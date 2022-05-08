---
tags:
  - header
  - assert header
---

# expectHeaderContains

Assert partial response header.

## Syntax

```js
expectHeaderContains(key, value)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .expectHeaderContains('content-type', 'application/json');
```

```js
// bdd style
const _spec = await spec().get('/api/users');
_spec.response().to.have.headerContains('content-type', 'application/json');
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
  .expectHeaderContains('content-type', 'application/json');
```