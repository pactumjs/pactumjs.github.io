# expectBodyContains

Performs partial equal on body text. 

> *Use this for text comparison.*

## Syntax

```js
expectBodyContains(body)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/health')
  .expectBodyContains('OK');
```

## Arguments

#### > body (string)

Response body.

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/robots.txt')
  .expectBodyContains(`User-agent: *`);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [expectBody](reference/expectBody)