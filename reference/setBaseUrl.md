# setBaseUrl

Sets the base URL for all the HTTP requests.

## Syntax

```js
setBaseUrl(url)
```

## Usage

#### ✅  Correct Usage

```js 
request.setBaseUrl('https://reqres.in');
```

## Arguments

#### > url (string)

Base url.

## Examples

```js 
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

await spec()
  .get('/api/users')
  .expectStatus(201);

await spec()
  .get('/api/unknown/2')
  .expectStatus(201);
```

## See Also

- [withPath](reference/withPath)