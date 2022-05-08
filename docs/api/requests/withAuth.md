---
tags:
  - authentication
  - basic auth
---

# withAuth

Specifies basic authentication.

## Syntax

```js
withAuth(username, password)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withAuth('my-username', 'super-secret-password')
  .expectStatus(200);
```

## Arguments

#### > username (string)

Username in basic auth.

#### > password (string)

Password in basic auth.

## Examples

### Basic Authentication

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/basic-auth/user/pass')
  .withAuth('user', 'pass')
  .expectStatus(200);
```