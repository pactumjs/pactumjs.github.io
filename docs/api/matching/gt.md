---
tags:
  - matching
  - number matching
  - greater than
---

# gt

Checks if actual value is greater than the given number.

## Syntax

```js
gt(input)
```

## Usage

### ✅  Correct Usage

```js
// with custom input
gt(10);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `gt` matcher in `expectJsonMatch` to validate the age.

- `age` should be greater than 0.


```js
const { spec } = require('pactum');
const { gt } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": gt(0)
        }
      }
    ]
  });
```