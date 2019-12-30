---
date: 2019-12-30
tags:
  - rust
  - wasm
  - web-assembly
  - sudoku
  - sat-solver
---

# Sudoku solver using a SAT Solver in Rust and WebAssembly

Lately, I have been interested in WebAssembly. So, I decided to build a Sudoku solver which uses a [SAT solver](https://crates.io/crates/rsat) written in [Rust programming language](https://www.rust-lang.org/). The sat solver will be compiled to [WebAssembly](https://webassembly.org/) and called from JavaScript.<!--more-->

You can find the final demo [here](https://sudoku-wasm.netlify.com/).

To get started we need to install NodeJS, Rust toolchain and wasm-pack.

You can install `node` and `npm` from the [NodeJS website](https://nodejs.org/en/).

Install rust toolchain using `rustup` by following instructions given [here](https://www.rust-lang.org/tools/install).

Similarly, install `wasm-pack` from [here](https://rustwasm.github.io/wasm-pack/installer/).

## Setup

First, let us create a project using the [`rust-webpack` template](https://github.com/rustwasm/rust-webpack-template). We will keep the name of the project as `sudoku-wasm`.

```bash
npm init rust-webpack sudoku-wasm
cd sudoku-wasm
git init . # Also initialize a git repository
```

In `Cargo.toml` file, add the necessary dependencies.

```text
[dependencies]
wasm-bindgen = { version = "0.2.45", features = ["serde-serialize"] }
rsat = "=0.1.5"
serde = { version = "1.0", features = ["derive"] }
```

We enable `serde-serialize` feature in `wasm-bindgen` as that will be useful later to easily convert structs into `JsValue`. We will use `rsat` sat solver which I have created in my free time. You can find more about it [here](https://crates.io/crates/rsat). We will use a particular pinned version of `rsat` as there is a bug in the later versions which is yet to be fixed.

Start the development server on port `8080` using the following command.

```bash
npm start
```

## Export functions in Rust to JavaScript

First, we will create a `sudoku` module. To do so, add the following line in `lib.rs`.

```rust
mod sudoku;
```

Create the file `src/sudoku.rs` and add the following two lines at the top of the file.

```rust
use rsat::common::*;
use rsat::msat::*;
```

In that file, we will create `Sudoku` struct which will store the sudoku grid and the sat solver.

```rust
pub struct Sudoku {
    pub grid: [[u32; 9]; 9],
    solver: Solver, // Exported from rsat::msat::*;
}
```

Next, let us create a `new` method for the `Sudoku` struct.

```rust
impl Sudoku {
    pub fn new(grid: [[u32; 9]; 9]) -> Option<Self> {
        let mut solver = Solver::new();
        let mut lits = [[[Lit::new(0, false); 9]; 9]; 9];

        for lits_i in &mut lits {
            for lits_ij in lits_i.iter_mut() {
                for lits_ijk in lits_ij.iter_mut() {
                    // Cell (i, j) is assigned k+1
                    *lits_ijk = Lit::new(solver.new_var(), false);
                }
            }
        }

        // Exactly one value is assigned to each cell
        // Each horizontal line contains k exactly once
        // Each vertical line contains k exactly once
        // Each 3x3 grid contains k exactly once
        for i in 0..9 {
            for j in 0..9 {
                let mut cl = vec![];
                for k in 0..9 {
                    cl.push(lits[i][j][k]);
                    for l in 0..9 {
                        if k != l {
                            // Cell(i, j) == k+1 => Cell(i, j) != l+1 for k != l
                            if !solver.new_clause(vec![!lits[i][j][k], !lits[i][j][l]]) {
                                return None;
                            }
                        }
                        if j != l {
                            // Cell(i, j) == k+1 => Cell(i, l) != k+1 for j != l
                            if !solver.new_clause(vec![!lits[i][j][k], !lits[i][l][k]]) {
                                return None;
                            }
                        }
                        if i != l {
                            // Cell(i, j) == k+1 => Cell(l, j) != k+1 for i != l
                            if !solver.new_clause(vec![!lits[i][j][k], !lits[l][j][k]]) {
                                return None;
                            }
                        }

                        let mod_i = (i / 3) * 3 + l / 3;
                        let mod_j = (j / 3) * 3 + l % 3;
                        if i != mod_i || j != mod_j {
                            // Cell(i, j) == k+1 => Cell(mod_i, mod_j) != k+1 for i != mod_i, j != mod_j
                            if !solver.new_clause(vec![!lits[i][j][k], !lits[mod_i][mod_j][k]]) {
                                return None;
                            }
                        }
                    }
                }

                // At least one of 1..=9 is assigned to Cell(i, j)
                if !solver.new_clause(cl) {
                    return None;
                }

                if grid[i][j] != 0 {
                    // Unit clause for already assigned cells
                    if !solver.new_clause(vec![lits[i][j][grid[i][j] as usize - 1]]) {
                        return None;
                    }
                }
            }
        }

        Some(Sudoku { grid, solver })
    }
}
```

The `new` method creates a sat solver instance and adds the clauses specifying the constraints of the sudoku puzzle. It returns `Some()` variant if a solver instance was created successfully, otherwise it returns `None`.

Next, we create a `solve` method that returns `(true, grid)` if the solver found the answer otherwise `(false, grid)` if the puzzle cannot be solved.

```rust
impl Sudoku {
    // ...

    pub fn solve(&mut self) -> bool {
        match self.solver.solve(vec![]) {
            Solution::Sat(sol) => {
                for i in 0..9 {
                    for j in 0..9 {
                        for k in 0..9 {
                            if sol[9 * 9 * i + 9 * j + k] {
                                if self.grid[i][j] != 0 && self.grid[i][j] != k as u32 + 1 {
                                    panic!("This should not occur. Something wrong in solver.");
                                }
                                self.grid[i][j] = k as u32 + 1;
                            }
                        }
                    }
                }
                true
            }
            Solution::Unsat | Solution::Best(_) => false,
        }
    }
}
```

Next in the `lib.rs` file, we create two structs.

```rust
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct SudokuGrid([[u32; 9]; 9]);

#[derive(Serialize, Deserialize, Debug)]
struct SudokuSolution {
    solved: bool,
    grid: [[u32; 9]; 9],
}
```

Here, we have used `serde` to perform serialization and deserialization of structs. This helps in creating a `JsValue` instance (exported by `wasm-bindgen`) by wrapping the struct. The functions that have to be exported to the JavaScript, should take `JsValue` as input and return `JsValue`.

Finally, we create a new `solve` function and export it.

```rust
#[wasm_bindgen]
pub fn solve(grid: &JsValue) -> JsValue {
    let grid: SudokuGrid = grid.into_serde().unwrap();
    let sudoku = sudoku::Sudoku::new(grid.0);
    match sudoku {
        Some(mut sudoku) => {
            let solved = sudoku.solve();
            JsValue::from_serde(&SudokuSolution {
                solved,
                grid: sudoku.grid,
            })
            .unwrap()
        }
        None => JsValue::from_serde(&SudokuSolution {
            solved: false,
            grid: [[0; 9]; 9],
        })
        .unwrap(),
    }
}
```

`#[wasm_bindgen]` macro is used to mark the functions that can be called from JavaScript.

## Testing the exported functions

In the `js/index.js` file, remove all of its content and the following snippet and calls the solve function and prints the output to the console.

```js
const initialGrid = [
  [6, 0, 0, 0, 0, 4, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 4, 9],
  [5, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 5, 7, 0, 0, 0, 0, 9, 6],
  [0, 0, 4, 0, 9, 6, 0, 0, 3],
  [3, 0, 0, 0, 4, 5, 0, 1, 8],
  [0, 0, 0, 0, 7, 0, 0, 0, 0],
  [7, 6, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 8, 5, 0, 0, 3, 0, 4]
];

const main = async () => {
  try {
    const lib = await import("../pkg/index.js");
    console.log(lib.solve(initialGrid));
  } catch (error) {
    console.error(error);
  }
};

main();
```

In the browser console, you should be able to see the output of the solver.

## Building UI for the solver.

In `static/index.html` file, replace all of its content with the following code.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Sudoku Solver</title>
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <section class="container m-8">
      <h1 class="text-3xl mb-4">Sudoku Solver</h1>
      <p class="mb-4">
        See the source code
        <a
          href="https://github.com/prateekkumarweb/sudoku-wasm"
          class="underline hover:no-underline"
          >here</a
        >.
      </p>
      <div class="flex whitespace-no-wrap pr-6">
        <div class="border-2 border-gray-800">
          <div class="p-2">
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="px-2">
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div class="inline-block">
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="px-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
              <div class="p-1">
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
                <div class="inline-block">
                  <input
                    type="number"
                    class="w-12 h-12 px-2 py-1 text-2xl text-center border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        id="solve-btn"
        class="my-8 border-2 border-black bg-gray-700 text-gray-300 px-4 py-2 text-xl"
      >
        Solve
      </button>
      <p id="status" class="mb-4">Click solve!</p>
    </section>
    <script src="index.js"></script>
  </body>
</html>
```

Modify the contents in `js/index.js` to call the `solve` function when the button is clicked.

```js
const initialGrid = [
  [6, 0, 0, 0, 0, 4, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 4, 9],
  [5, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 5, 7, 0, 0, 0, 0, 9, 6],
  [0, 0, 4, 0, 9, 6, 0, 0, 3],
  [3, 0, 0, 0, 4, 5, 0, 1, 8],
  [0, 0, 0, 0, 7, 0, 0, 0, 0],
  [7, 6, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 8, 5, 0, 0, 3, 0, 4]
];
const inputs = document.querySelectorAll("input");

const setGrid = grid => {
  for (let i = 0; i < 81; i++) {
    const div = (i / 9) >> 0;
    const rem = i % 9;
    const val = grid[div][rem];
    inputs[i].value = val !== 0 ? val : "";
  }
};

setGrid(initialGrid);

document.querySelector("#solve-btn").onclick = async () => {
  try {
    for (let i = 0; i < 81; i++) {
      const div = (i / 9) >> 0;
      const rem = i % 9;
      const val = inputs[i].value;
      initialGrid[div][rem] = Number(val);
    }
    const lib = await import("../pkg/index.js");
    const { solved, grid } = lib.solve(initialGrid);
    if (solved) {
      setGrid(grid);
      document.querySelector("#status").innerHTML = "Solved!";
    } else {
      document.querySelector("#status").innerHTML = "Could not be solved!";
    }
  } catch (error) {
    document.querySelector("#status").innerHTML = "Could not be solved!";
    console.error(error);
  }
};
```

The sat solver is ready.

You can build the solver by using the following command.

```bash
npm run build
```

This generates the output in the `dist` folder.

## Conclusion

You can find the demo of this solver here: [https://sudoku-wasm.netlify.com/](https://sudoku-wasm.netlify.com/).

The source code is available on GitHub in the repository [@prateekkumarweb/sudoku-wasm](https://github.com/prateekkumarweb/sudoku-wasm) under MIT license.
