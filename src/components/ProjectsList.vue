<template>
  <div class="tile is-vertical box notification is-light">
    <h2 class="title is-4">Projects</h2>
    <div class="tile is-parent is-vertical">
      <div class="tile is-child notification is-danger">
        <h3 class="title is-6">Open-WBO-Inc MaxSAT Solver</h3>
        <p>
          Open-WBO-Inc is an incomplete MaxSAT solver based on the top Open-WBO with
          approximation strategies proposed in
          <a
            href="https://link.springer.com/content/pdf/10.1007/978-3-319-98334-9_15.pdf"
          >this paper</a>. At MaxSAT Evaluation 2018,
          Open-WBO-Inc got 1st place in incomplete weighted track with 60s timeout
          and 2nd place in incomplete weighted track with 300s timeout. The results
          are available
          <a
            href="https://maxsat-evaluations.github.io/2018/rankings.html"
          >here</a>.
          At MaxSAT Evaluation 2019, Open-WBO-Inc got 3rd place in incomplete weighted
          track with 60s and 300s timeout. The results are available
          <a
            href="https://maxsat-evaluations.github.io/2019/rankings.html"
          >here</a>.
        </p>
        <hr />
        <div class="buttons">
          <a href="https://github.com/sbjoshi/Open-WBO-Inc" class="button is-danger is-light">
            <span class="icon">
              <font-awesome :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="tile is-child notification is-info">
        <h3 class="title is-6">FM and LP based UTVPI Over Approximation</h3>
        <p>
          Algorithms for finding tight UTVPI (octagonal) over-approximations of
          polyhedra using linear programming and Fourier-Motzkin eliminations.
        </p>
        <hr />
        <div class="buttons">
          <a href="https://github.com/IITH-Compilers/UTVPI-OA" class="button is-info is-light">
            <span class="icon">
              <font-awesome :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="tile is-child notification is-success">
        <h3 class="title is-6">Timetabler</h3>
        <p>
          Timetabler generates a timetable given a set of inputs and constraints. It encodes
          constraints of the timetabling problem as a SAT formula in the Conjunctive Normal
          Form and then calls a MaxSAT solver to solve the problem. It is currently used by
          IIT Hyderabad to schedule timetable for courses.
        </p>
        <hr />
        <div class="buttons">
          <a href="https://github.com/GoodDeeds/Timetabler" class="button is-success is-light">
            <span class="icon">
              <font-awesome :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="tile is-child notification is-warning">
        <h3 class="title is-6">Semaphore in Minix</h3>
        <p>Implemention of semaphores in Minix Operating System.</p>
        <hr />
        <div class="buttons">
          <a
            href="https://github.com/prateekkumarweb/minix-semaphore"
            class="button is-warning is-light"
          >
            <span class="icon">
              <font-awesome :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
