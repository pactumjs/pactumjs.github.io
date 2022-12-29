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

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withBearerToken('token')
  .expectStatus(200);
```

## Arguments

#### > token (string)

Bearer token.

## Examples

### Bearer Authentication

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withBearerToken('my-token')
  .expectStatus(200);
```