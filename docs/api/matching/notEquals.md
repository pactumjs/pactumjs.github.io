---
tags:
  - not
  - equals
---

# notEquals

Checks if actual value is not equal to expected.

## Syntax

```js
notEquals(input)
```

- `input` (**string | number | boolean**) - expected value

## Usage

### ✅  Correct Usage

```js
notEquals('jon')
```

## Examples

```js
const { spec } = require('pactum');
const { notEquals } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "name": notEquals('jon'),
      }
    ]
  });
```