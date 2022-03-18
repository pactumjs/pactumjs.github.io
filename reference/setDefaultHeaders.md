# setDefaultHeaders

Sets default headers for all the HTTP requests.

## Syntax

```js
setDefaultHeaders(key, value)
setDefaultHeaders(headers)
```

## Usage

#### ✅  Correct Usage

```js 
request.setDefaultHeaders('Authorization', 'Basic xxxxx');
request.setDefaultHeaders({ 'content-type': 'application/json' });
```

## Arguments

#### > key (string)

Header key

#### > value (string)

Header value

#### > headers (object)

Header key/value pairs

## Examples

```js 
const { spec, request } = require('pactum');

request.setDefaultHeaders('Authorization', 'Basic xxxxx');

await spec()
  .get('https://reqres.in/api/users')
  .expectStatus(201);
```

## See Also

- [withHeaders](reference/withHeaders)