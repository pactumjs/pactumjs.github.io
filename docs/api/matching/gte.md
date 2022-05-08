---
tags:
  - matching
  - number matching
  - greater than or equal
---

# gte

Checks if actual value is greater than or equal to the given number.

## Syntax

```js
gte(input)
```

## Usage

### ✅  Correct Usage

```js
// with custom input
gte(10);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `gt` matcher in `expectJsonMatch` to validate the age.

- `age` should be greater than or equal to 0.


```js
const { spec } = require('pactum');
const { gte } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": gte(0)
        }
      }
    ]
  });
```