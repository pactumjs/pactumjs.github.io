# toss

Runs the test and returns the response object. 

> *It is optional in most scenarios*

## Syntax

```js
toss()
```

## Usage

#### ✅  Correct Usage

```js
// optional to invoke toss()
await spec()
  .get('/api/users')
  .expectStatus(200)
  .toss();

// required
const _spec = spec();
_spec.get('/api/users');
_spec.expectStatus(200);
await _spec.toss(); // pactum makes the request and validates the response here
```

## Examples

```js
const { spec, expect } = require('pactum');

const _spec = spec();
_spec.get('https://reqres.in/api/users/1')
const response = await _spec.toss();
expect(response).to.have.status(200);
```

## Yields

Returns a promise which resolves to response object.