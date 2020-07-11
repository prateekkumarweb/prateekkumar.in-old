---
title: Hello, World!
date: 2018-01-01
tags:
  - hello
---

# Hello, World!

This is a reference post to see how markdown is styled.

<!--more-->

## Headers

```md
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

```md
_This text will be italic_

**This text will be bold**

_You **can** combine them_
```

_This text will be italic_

**This text will be bold**

_You **can** combine them_

## Blockquotes

```md
As Grace Hopper said:

> I’ve always been more interested
> in the future than in the past.
```

As Grace Hopper said:

> I’ve always been more interested
> in the future than in the past.

## Lists

### Unordered

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

## Ordered

```md
1. Item 1
2. Item 2
3. Item 3
   - Item 3a
   - Item 3b
```

1. Item 1
2. Item 2
3. Item 3
   - Item 3a
   - Item 3b

## Images

```md
![Logo](/images/logo-192.png)
```

![Logo](/images/logo-192.png)

## Links

```md
http://github.com - automatic!

[GitHub](http://github.com)
```

http://github.com - automatic!

[GitHub](http://github.com)

## Backslash escapes

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax.

```md
\*literal asterisks\*
```

\*literal asterisks\*

Markdown provides backslash escapes for the following characters:

```txt
\ backslash
` backtick
* asterisk
_ underscore
{} curly braces
[] square brackets
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
```

## Emoji

```md
Emoji! :+1: :sparkles: :camel: :tada: :rocket: :smile: :panda_face: :first_quarter_moon_with_face:
```

Emoji! :+1: :sparkles: :camel: :tada: :rocket: :smile: :panda_face: :first_quarter_moon_with_face:

## Fenced code blocks

````md
```javascript
function test() {
  console.log('look ma’, no spaces');
}
```
````

```javascript
function test() {
  console.log('look ma’, no spaces');
}
```

## Task lists

```md
- [x] this is a complete item
- [ ] this is an incomplete item
- [x] [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
```

- [x] this is a complete item
- [ ] this is an incomplete item
- [x] [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)

## Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```md
| First Header   | Second Header  |
| -------------- | -------------- |
| Content cell 1 | Content cell 2 |
| Content cell 3 | Content cell 4 |
| Content cell 5 | Content cell 6 |
| Content cell 7 | Content cell 8 |
```

| First Header   | Second Header  |
| -------------- | -------------- |
| Content cell 1 | Content cell 2 |
| Content cell 3 | Content cell 4 |
| Content cell 5 | Content cell 6 |
| Content cell 7 | Content cell 8 |
