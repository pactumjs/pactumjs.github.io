---
tags:
  - retry delay
  - request retry delay
---

# setRequestDefaultRetryDelay

sets default retry delay for requests with retry enabled.

> Defaults to 1000 milliseconds

## Syntax

```js
setRequestDefaultRetryDelay(milliseconds)
```

## Usage

### ✅  Correct Usage

```js
settings.setRequestDefaultRetryDelay(3000)
```

## Arguments

#### > milliseconds (number)

delay in milliseconds.

## Examples

### Normal

```js
const { spec, settings } = require('pactum');

settings.setRequestDefaultRetryCount(2);
settings.setRequestDefaultRetryDelay(2000);

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```


With retry
```js
const { spec, settings } = require('pactum');

settings.setRequestDefaultRetryDelay(2000);

await spec()
  .get('https://randomuser.me/api')
  .retry(2)
  .expectStatus(200);
```

## See Also

- [retry](/api/requests/retry)
- [setRequestDefaultRetryCount](/api/settings/setRequestDefaultRetryCount)