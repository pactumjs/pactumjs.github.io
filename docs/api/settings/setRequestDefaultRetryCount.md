---
tags:
  - retry count
  - request retry count
---

# setRequestDefaultRetryCount

sets default retry count for requests.

> Defaults to retry count 1

## Syntax

```js
setRequestDefaultRetryCount(count)
```

## Usage

### ✅  Correct Usage

```js
settings.setRequestDefaultRetryCount(2)
```

## Arguments

#### > count (number)

retry count.

## Examples

### Normal

```js
const { spec, settings } = require('pactum');

settings.setRequestDefaultRetryCount(2);

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

## See Also

- [retry](/api/requests/retry)
- [setRequestDefaultRetryDelay](/api/settings/setRequestDefaultRetryDelay)