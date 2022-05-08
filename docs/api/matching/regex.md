---
tags:
  - matching
  - regex matching
---

# regex

Regex matching.

## Syntax

```js
regex(expression)
regex(input, expression)
```

## Usage

### ✅  Correct Usage

```js
// expression
regex(/\w+/);
```

```js
// input and expression
regex('some string', /\w+/);
```

## Arguments

#### > expression *(regex)*

Regular expression to match with.

#### > input *(any)*

Input to return while using in mock server.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `regex` matcher in `expectJsonMatch` to validate the json.

- `gender` should be **male** or **female**.


```js
const { spec } = require('pactum');
const { regex } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "gender": regex(/^(male|female)$/),
      }
    ]
  });
```