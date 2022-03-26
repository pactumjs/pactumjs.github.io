# expectBody

Performs strict equal on body text. 

> *Use this for text comparison.*

## Syntax

```js
expectBody(body)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/health')
  .expectBody('OK');
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

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [expectBodyContains](reference/expectBodyContains)