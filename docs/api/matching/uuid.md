---
tags:
  - matching
  - pattern matching
---

# uuid

Checks if actual value follows uuid pattern.

## Syntax

```js
uuid()
uuid(input)
```

## Usage

### ✅  Correct Usage

```js
// without input
uuid();
```

```js
// with custom input
uuid('34e23e8f-cbb5-4506-b20c-18cf4001cc5c');
```

## Arguments

#### > input *(any)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `uuid` matcher in `expectJsonMatch` to validate login uuid.

- `uuid` should be a valid uuid.


```js
const { spec } = require('pactum');
const { uuid } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "login": {
          "uuid": uuid()
        }
      }
    ]
  });
```