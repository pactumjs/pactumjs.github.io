---
tags:
  - matching
---

# expression

Checks if actual value satisfies the expected expression.

- Expression should contain `$V` to represent current value.
- Expression should be a valid JavaScript code.
- Expression should return a boolean.

## Syntax

```js
expression(input, expr)
```

## Usage

### ✅  Correct Usage

```js
// input and expression
expression('some string', '$V.length > 0');
```

## Arguments

#### > expression *(code)*

Javascript code to run.

#### > input *(any)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `expression` matcher in `expectJsonMatch` to validate the age.

- `age` should be greater than **0**.


```js
const { spec } = require('pactum');
const { expression } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": expression(10, "$V > 0")
        }
      }
    ]
  });
```