---
tags:
  - matching
  - string matching
---

# includes

checks if actual value includes a specified value in it

## Syntax

```js
includes(input)
```

## Usage

### ✅  Correct Usage

```js
includes('some')
```

## Arguments

#### > input *(string)*

checks if actual value includes the given input. In contract testing, it returns the first element.

## Examples

```js
const { spec } = require('pactum');
const { includes } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "gender": includes("male"),
      }
    ]
  });
```