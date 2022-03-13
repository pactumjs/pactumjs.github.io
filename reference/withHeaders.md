# withHeaders

Request headers. A request header is an HTTP header that can be used in an HTTP request to provide information about the request context

## Syntax

```js
withHeaders(name, value) // key-value pair
withHeaders(headers)     // key-value pairs as object
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .get('/api/users')
  .withHeaders('Content-Type', 'application/json')
  .expectStatus(200);

await spec()
  .get('/api/users')
  .withHeaders('Content-Type', 'application/json')
  .withHeaders('Accept', 'application/json')
  .expectStatus(200);

await spec()
  .get('/api/users')
  .withHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
  .expectStatus(200);
```

#### ❗ Incorrect Usage

```js
await spec()
  .get('/api/users')                // don't use both overridden methods in same spec
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

#### Single header

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders('Authorization', 'Bearer abc')
  .expectStatus(200);
```

#### Multiple headers

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders('Authorization', 'Bearer abc')
  .withHeaders('Accept', 'application/json')
  .expectStatus(200);

await spec()
  .get('https://httpbin.org/bearer')
  .withHeaders({
    'Authorization': 'Bearer abc',
    'Accept': 'application/json'
  })
  .expectStatus(200);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.