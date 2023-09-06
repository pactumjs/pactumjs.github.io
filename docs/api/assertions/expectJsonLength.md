---
tags:
  - length
  - json length
  - assert json length
---

# expectJsonLength

Asserts on the length of JSON array objects.

## Syntax

```js
expectJsonLength(length)
expectJsonLength(path, length)
expectJsonLength(path, matcher)  // Supports assertions with matcher functions
```

* Allowed matcher functions `lt`, `gt`, `lte`, `gte`, `notEquals` from `>=v3.5.1`

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .expectJsonLength(1);
```

```js
const { lte } = require("pactum-matchers");
await spec()
  .get('/api/users')
  .expectJsonLength('data', lte(6));
```

```js
// bdd style
const _spec = await spec().get('/api/users');
_spec.response().to.have.jsonLength(1);
```

## Arguments

#### > length (number)

Expected json object length.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

#### > matcher function (function) 

Matcher function for comparison assertion - `lt`, `gt`, `lte`, `gte`, `notEquals`

## Examples

### Normal

```js
const { spec } = require('pactum');

await spec()
  .get('https://jsonplaceholder.typicode.com/users')
  .expectJsonLength(10);
```

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users')
  .expectJsonLength('data', 6);
```

### Using Matcher Function

```js
const { spec } = require('pactum');
const { gte } = require("pactum-matchers");

await spec()
  .get('https://jsonplaceholder.typicode.com/users')
  .expectJsonLength('.', gte(10));
```

```js
const { spec } = require('pactum');
const { lte } = require("pactum-matchers");

await spec()
  .get('https://reqres.in/api/users')
  .expectJsonLength('data', lte(6));
```