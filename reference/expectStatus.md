# expectStatus

Expecting Status Code

## Syntax

```js
expectStatus(status)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .expectStatus(201);
```

## Arguments

#### > status (number)

Response status code.

## Examples

```js 
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users')
  .expectStatus(200);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.