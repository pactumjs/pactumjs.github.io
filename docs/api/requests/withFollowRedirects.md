---
tags:
  - redirects
  - follow redirects
---

# withFollowRedirects

Follows redirection.

## Syntax

```js
withFollowRedirects(follow)
```

- `follow` (**boolean**) - follow redirect.

## Usage

#### ✅  Correct Usage

```js
await spec()
  .get('/api/old/location')
  .withFollowRedirects()
  .expectStatus(200);
```

## Examples

#### General Redirection

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/redirect-to')
  .withQueryParams('url', 'https://httpbin.org/status/200')
  .withFollowRedirects(true)
  .expectStatus(200);
```