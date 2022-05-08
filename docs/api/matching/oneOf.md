---
tags:
  - matching
---

# oneOf

Checks if actual value is one of the expected value.

## Syntax

```js
oneOf(input)
```

## Usage

### ✅  Correct Usage

```js
oneOf(["male", "female"])
```

## Arguments

#### > input *(string[])*

checks if actual value oneOf the given element in the input array

## Examples

```js
const { spec } = require('pactum');
const { oneOf } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "gender": oneOf(["male", "female"]),
      }
    ]
  });
```