---
tags:
  - matching
  - number matching
---

# int

Checks if actual value is an integer number.

## Syntax

```js
int()
int(input)
```

## Usage

### ✅  Correct Usage

```js
// without input
int();
```

```js
// with custom input
int(10);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `int` matcher in `expectJsonMatch` to validate the age.

- `age` should be an integer.


```js
const { spec } = require('pactum');
const { int } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": int()
        }
      }
    ]
  });
```