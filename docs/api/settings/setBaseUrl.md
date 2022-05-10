---
tags:
  - base url
---

# setBaseUrl

sets request base url for all requests.

## Syntax

```js
setBaseUrl(base-url)
```

## Usage

### ✅  Correct Usage

```js
request.setBaseUrl('https://reqres.in')
```

## Arguments

#### > base-url (string)

Base url.

## Examples

### Normal

```js
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

await spec()
  .get('/api/users/1')
  .expectStatus(200);
```

### Override Base Url

```js
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```