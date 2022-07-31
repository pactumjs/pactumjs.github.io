---
tags:
  - timeout
  - request timeout
---

# setDefaultTimeout

sets default timeout of requests.

> Defaults 3000 milliseconds

## Syntax

```js
setDefaultTimeout(milliseconds)
```

## Usage

### ✅  Correct Usage

```js
request.setDefaultTimeout(5000)
```

## Arguments

#### > milliseconds (number)

timeout in milliseconds.

## Examples

### Normal

```js
const { spec, request } = require('pactum');

request.setDefaultTimeout(5000);

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```