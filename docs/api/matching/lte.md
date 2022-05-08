---
tags:
  - matching
  - number matching
  - lesser than or equal
---

# lte

Checks if actual value is less than or equal to the given number.

## Syntax

```js
lte(input)
```

## Usage

### ✅  Correct Usage

```js
// with custom input
lte(10);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `lte` matcher in `expectJsonMatch` to validate the age.

- `age` should be less than or equal to 100.


```js
const { spec } = require('pactum');
const { lte } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": lte(100)
        }
      }
    ]
  });
```