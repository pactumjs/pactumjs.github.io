---
tags:
  - redirects
  - follow redirects
---

# setDefaultFollowRedirects

set default Follow Redirects for all the requests.

::: tip Tip
Default value for follow redirects is false / disabled
:::

## Syntax

```js
setDefaultFollowRedirects(follow)
```

## Usage

### ✅  Correct Usage

```js
// Boolean parameter - defaults to count 20
request.setDefaultFollowRedirects(true)
```

```js
// Absolute follow redirect count
request.setDefaultFollowRedirects(5)
```

## Arguments

#### > follow (boolean)

Toggle follow redirects

#### > follow (number)

Toggle follow redirects and set the absolute redirect count.



## Examples

### Normal

```js
const { spec, request } = require('pactum');

request.setDefaultFollowRedirects(true);

await spec()
  .get('https://httpbin.org/redirect-to')
  .withQueryParams('url', 'https://httpbin.org/status/200')
  .expectStatus(200);
```

```js
const { spec, request } = require('pactum');

request.setDefaultFollowRedirects(5);

await spec()
  .get('https://httpbin.org/redirect-to')
  .withQueryParams('url', 'https://httpbin.org/status/200')
  .expectStatus(200);
```

::: tip Tip
Follow redirects count should be greater than or equal to number of redirects on the server side for the request.
:::


## See Also

- [withFollowRedirects](/api/requests/withFollowRedirects)