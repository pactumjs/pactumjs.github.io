---
tags:
  - matching
  - type matching
---

# like

Matching for primitive data types.

## Syntax

```js
like(input)
```

## Usage

### ✅  Correct Usage

```js
// string
like('one')
```

```js
// number
like(1)
```

```js
// boolean
like(true)
```

```js
// object
like({
  name: 'mom',
  age: 50
})
```

### ❗ Incorrect Usage

```js
// array - instead use eachLike
like([1, 2])
```

```js
// nested objects
// like only applies for the root properties
// - 'name'
// - 'age'
// - 'address'
like({
  name: 'mom',
  age: 50,
  address: {
    street: 'road no 60',
    pin: 500500
  }
})
```

## Arguments

#### > input *(string|number|boolean|object)*

Input to match with.

## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `like` matcher in `expectJsonMatch` to validate the type of the values instead of the content.

- `gender` should be a string.
- `name` should be a object and it should include
  - `first` and it should be a string
- `dob` should be a object and it should include
  - `date` and it should be a string
  - `age` and it should be a number


```js
const { spec } = require('pactum');
const { like } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "gender": like("male"),
        "name": {
          "first": like("Amira"),
        },
        "dob": like({
          "date": "1949-02-09T12:49:15.975Z"
          "age": 67
        })
      }
    ]
  });
```