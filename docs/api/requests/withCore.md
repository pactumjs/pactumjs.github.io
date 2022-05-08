---
tags:
  - core
  - agent
---

# withCore

To further customize the request, pactum allows us directly set the [core options](https://nodejs.org/api/http.html#httprequesturl-options-callback) of the request.

## Syntax

```js
withCore(options)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withCore({
    agent: myAgent
  })
  .expectStatus(200);
```

## Arguments

#### > options (object)

Core options - [see](https://nodejs.org/api/http.html#httprequesturl-options-callback)

## Examples

### Basic Authentication using Core Options

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/basic-auth/user/pass')
  .withCore({
    auth: 'user:pass'
  })
  .expectStatus(200);
```