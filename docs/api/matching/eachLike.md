---
tags:
  - matching
  - type matching
  - array matching
---

# eachLike

Matching for arrays that has primitive data types.

## Syntax

```js
eachLike(input)
eachLike(input, options)
```

## Usage

### ✅  Correct Usage

```js
// string
eachLike('one')
```

```js
// number
eachLike(1)
```

```js
// boolean
eachLike(true)
```

```js
// object
eachLike({
  name: 'mom',
  age: 50
})
```

```js
// nested object
eachLike({
  quantity: 2,
  active: true,
  product: like({
    name: 'car',
    colors: eachLike('blue')
  })
})
```

```js
// return multiple items
eachLike('one', { items: ['one', 'two'] })
```

## Arguments

#### > input *(string|number|boolean|object)*

Input to match with.

#### > options *(object)*

custom options to modify the behavior of `eachLike`.

| options | description            |
|---------|------------------------|
| items   | return custom elements |

## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `eachLike` matcher in `expectJsonMatch` to validate the type of the values instead of the content.

- `results` should be an array of objects.
  - each object in `results` should contain
    - `gender` and it should be a string

```js
const { spec } = require('pactum');
const { like, eachLike } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .withQueryParams('results', 2)
  .expectJsonMatch({
    "results": eachLike({
      "gender": like("male")
    }
  });
```

### Mock Server

Interactions in mock server will help in building contracts between services. Matching rules are defined in interaction responses to make them more reliable during contract testing.

In some scenarios, we might want to return multiple items while using `eachLike` as by default,  it only returns one element. To overcome it, use `items` property.

```js
const { mock } = require('pactum');
const { eachLike } = require('pactum-matchers');

// return only one user
mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/users'
  },
  response: {
    status: 200,
    body: eachLike({
      "name": "mom",
      "age": 50
    })
  }
});
```

```js
const { mock } = require('pactum');
const { eachLike } = require('pactum-matchers');

// return multiple users - dad and brother
mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/users'
  },
  response: {
    status: 200,
    body: eachLike({
      "name": "mom",
      "age": 50
    }, items: [
      {
        "name": "dad",
        "age": 55
      },
      {
        "name": "brother",
        "age": 30
      }
    ])
  }
});
```
