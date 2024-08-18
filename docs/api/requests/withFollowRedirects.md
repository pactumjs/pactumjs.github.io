---
tags:
  - redirects
  - follow redirects
---

# withFollowRedirects

Follows redirection.

::: tip Tip
Default value for follow redirects is false / disabled
:::

## Syntax

```js
withFollowRedirects(follow)
```
follow redirects option
- `follow` (**boolean**) - follow redirect toggle, to enable follow redirects and use default follow redirect count of 20.
- `follow` (**number**) - follow redirect, count of redirects. Allowed values are >=0.

## Usage

#### ✅  Correct Usage

```js
// 
await spec()
  .get('/api/old/location')
  .withFollowRedirects(true)
  .expectStatus(200);
```

```js
// 
await spec()
  .get('/api/old/location')
  .withFollowRedirects(5)
  .expectStatus(200);
```

## Examples

#### General Redirection

```js
// toggle follow redirects with default follow-redirect count
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/redirect-to')
  .withQueryParams('url', 'https://httpbin.org/status/200')
  .withFollowRedirects(true)
  .expectStatus(200);
```

```js
// toggle follow redirects with custom follow-redirect count
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/redirect-to')
  .withQueryParams('url', 'https://httpbin.org/status/200')
  .withFollowRedirects(2)
  .expectStatus(200);
```

::: tip Tip
Follow redirects count should be greater than or equal to number of redirects on the server side for the request.
:::

## See Also

- [setDefaultFollowRedirects](/api/settings/setDefaultFollowRedirects)