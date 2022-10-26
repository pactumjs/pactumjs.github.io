---
tags:
  - header
  - assert header
---

# expectHeader

Assert response header.

## Syntax

```js
expectHeader(key, value)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .expectHeader('content-type', 'application/json');
```

```js
// bdd style
const _spec = await spec().get('/api/users');
_spec.response().to.have.header('content-type', 'application/json');
```

## Arguments

#### > key (string)

Response header key.

#### > key (string|regex)

Response header value.

## Examples

```js 
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users')
  .expectHeader('content-type', 'application/json; charset=utf-8');
```

## See Also

- [setDefaultExpectHeaders](/api/responses/setDefaultExpectHeaders)
- [expectHeaderContains](/api/assertions/expectHeaderContains)