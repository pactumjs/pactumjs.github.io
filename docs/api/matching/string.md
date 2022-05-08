---
tags:
  - matching
---

# string

Checks if actual value is a non empty string.

## Syntax

```js
string()
string(input)
```

## Usage

### ✅  Correct Usage

```js
// without input
string();
```

```js
// with custom input
string('some');
```

## Arguments

#### > input *(string)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `string` matcher in `expectJsonMatch` to validate login uuid.

- `uuid` should be a non empty string.


```js
const { spec } = require('pactum');
const { string } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "login": {
          "uuid": string()
        }
      }
    ]
  });
```