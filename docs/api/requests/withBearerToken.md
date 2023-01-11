---
tags:
  - authentication
  - bearer auth
---

# withBearerToken

Specifies bearer authentication.

## Syntax

```js
withBearerToken(token)
```

- `token` (**string**) - bearer token.

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withBearerToken('token')
  .expectStatus(200);
```

## Examples

### Bearer Authentication

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withBearerToken('my-token')
  .expectStatus(200);
```