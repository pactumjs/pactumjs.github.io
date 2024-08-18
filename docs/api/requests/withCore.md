---
tags:
  - core
  - agent
  - proxy agent
---

# withCore

To further customize the request, pactum allows us directly set the [core options](https://nodejs.org/api/http.html#httprequesturl-options-callback) of the request.

::: warning WARNING 
If `withCore` is used at the end in request chaining, all [http core options](https://nodejs.org/api/http.html#httprequesturl-options-callback) provided in `withCore` will take precedence and they will override any previously values.
:::

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

### Proxy Agent

```js
const { spec } = require('pactum');
const { ProxyAgent } = require('proxy-agent');

const agent = new ProxyAgent();

await spec()
  .get('https://pactumjs.github.io/')
  .withCore({ agent })
  .expectStatus(200);
```

### Https Agent with SSL certificates

```js
// If you have the cert/key pair
const { spec } = require('pactum');
const https = require('https');
const fs = require('fs');

const key = fs.readFileSync("server.key")
const cert = fs.readFileSync("server.crt")

const agent = new https.Agent({
  cert: cert,
  key: key,
});

await spec()
    .get('<https url>')
    .withCore({agent: agent })
    .expectStatus(200)
```

### Https Agent with self signed / private SSL certificates

```js
const { spec } = require('pactum');
const https = require('https');
const fs = require('fs');

// If you have the cert/key pair
const key = fs.readFileSync("server.key")
const cert = fs.readFileSync("server.crt")

const agent = new https.Agent({
  cert: cert, // Optional - add if cert available 
  key: key, // Optional - add if key is available 
  rejectUnauthorized: false // Ignore  certificate errors
});

await spec()
    .get('<https url>')
    .withCore({agent: agent })
    .expectStatus(200)
```



