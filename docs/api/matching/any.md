---
tags:
  - matching
  - type matching
---

# any

Matching for primitive data types.

## Syntax

```js
any()
any(input)
```

## Usage

### ✅  Correct Usage

```js
// string
any('one')
```

```js
// number
any(1)
```

```js
// boolean
any(true)
```

### ❗ Incorrect Usage

```js
// array
any([1, 2])
```

```js
// object
any({
  name: 'mom',
  age: 50
})
```

## Arguments

#### > input *(string|number|boolean)*

Input to match with.

> It will be returned while using matchers in mock server.

## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `any` matcher in `expectJsonMatch` to validate the presence of properties in json.

- `gender` should be present in the response and it can be anything.
- `name` should be a object and it should include
  - `first` and  it can be anything.


```js
const { spec } = require('pactum');
const { any } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "gender": any("male"),
        "name": {
          "first": any(),
        }
      }
    ]
  });
```