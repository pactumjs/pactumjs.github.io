---
tags:
  - matching
  - property matching
---

# notIncludes

- checks if given property or properties are not part of an object.
- checks if given elements are not part of an array

## Syntax

```js
notIncludes(input)
```

## Usage

### ✅  Correct Usage

```js
notIncludes('some')
```

```js
notIncludes(['some', 'prop'])
```

## Arguments

#### > input *(any)*

Properties or elements.

## Examples

### Single property

```js
const { spec } = require('pactum');
const { notIncludes } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "name": notIncludes("middle"),
      }
    ]
  });
```

### Multiple properties

```js
const { spec } = require('pactum');
const { notIncludes } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "name": notIncludes(["middle", "surname"]),
      }
    ]
  });
```