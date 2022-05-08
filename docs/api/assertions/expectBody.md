---
tags:
  - body
  - assert body
  - assert text
---

# expectBody

Performs strict equal on body text. 

> *Use this for text comparison.*

## Syntax

```js
expectBody(body)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/health')
  .expectBody('OK');
```

```js 
// bdd style
const _spec = await spec().get('/api/health');
_spec.response().to.have.body('OK');
```

## Arguments

#### > body (string)

Response body.

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/robots.txt')
  .expectBody(`
    User-agent: *
    Disallow: /deny
  `);
```