---
tags:
  - matching
  - number matching
  - lesser than
---

# lt

Checks if actual value is less than the given number.

## Syntax

```js
lt(input)
```

## Usage

### ✅  Correct Usage

```js
// with custom input
lt(10);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `lt` matcher in `expectJsonMatch` to validate the age.

- `age` should be less than 100.


```js
const { spec } = require('pactum');
const { lt } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": lt(100)
        }
      }
    ]
  });
```