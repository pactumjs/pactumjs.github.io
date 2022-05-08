# addRetryHandler

**Retry Handlers** helps us to retry a request based on a custom logic.

## Syntax

```js
addRetryHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addRetryHandler('on404', (ctx) => {
  if (ctx.res.statusCode === 404) {
    return false;
  } else {
    return true;
  }
});
```

## Arguments

#### > name *(string)*

Name of the retry handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **req** and **res** properties.

## Examples

### Normal

```js
const { handler, spec } = require('pactum');

handler.addRetryHandler('on404', (ctx) => {
  if (ctx.res.statusCode === 404) {
    return false;
  } else {
    return true;
  }
});

await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry({
    strategy: 'on 404'
  });
```

## See Also

- [retry](/api/requests/retry)