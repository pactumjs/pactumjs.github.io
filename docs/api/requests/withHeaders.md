---
tags:
  - headers
---

# withHeaders

Specifies request headers. A request header is an HTTP header that can be used in an HTTP request to provide information about the request context

## Syntax

```js
withHeaders(name, value) // key-value pair
withHeaders(headers)     // key-value pairs as object
```

## Usage

### ✅  Correct Usage

```js
// single key value pair
await spec()
  .get('/api/users')
  .withHeaders('Content-Type', 'application/json')
  .expectStatus(200);
```

```js
// multiple key value pair
await spec()
  .get('/api/users')
  .withHeaders('Content-Type', 'application/json')
  .withHeaders('Accept', 'application/json')
  .expectStatus(200);
```

```js
// key value pair object
await spec()
  .get('/api/users')
  .withHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
  .expectStatus(200);
```

### ❗ Incorrect Usage

```js
// don't use both overridden methods in same spec to introduce confusion
await spec()
  .get('/api/users')
  .withHeaders('Content-Type', 'application/json')
  .withHeaders({
    'Accept': 'application/json'
  })
  .expectStatus(200);
```

## Arguments

#### > name (string)

Name of the header key.

#### > value (string)

Value of the header.

#### > headers (object)

key-value pairs of headers.

## Examples

### Single header

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders('Authorization', 'Bearer abc')
  .expectStatus(200);
```

### Multiple headers

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders('Authorization', 'Bearer abc')
  .withHeaders('Accept', 'application/json')
  .expectStatus(200);

// or

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders({
    'Authorization': 'Bearer abc',
    'Accept': 'application/json'
  })
  .expectStatus(200);
```

## See Also

- [setDefaultHeaders](/api/settings/setDefaultHeaders)