---
tags:
  - status code
  - assert status code
---
# expectStatus

Assert response status code

## Syntax

```js
expectStatus(status)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .expectStatus(200);
```

```js
// bdd style
const _spec = await spec().get('/api/users');
_spec.response().to.have.status(200);
```

## Arguments

#### > status (number)

Response status code.

## Examples

```js 
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users')
  .expectStatus(200);
```