---
tags:
  - matching
  - number matching
---

# float

Checks if actual value is an float number.

## Syntax

```js
float()
float(input)
```

## Usage

### ✅  Correct Usage

```js
// without input
float();
```

```js
// with custom input
float(10.1);
```

## Arguments

#### > input *(number)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `float` matcher in `expectJsonMatch` to validate the age.

- `age` should be a float.


```js
const { spec } = require('pactum');
const { float } = require('pactum-matchers');

// this test will fail
await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "dob": {
          "age": float()
        }
      }
    ]
  });
```