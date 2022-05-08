---
tags:
  - body
  - json
  - payload
---

# withJson

Request body as json payload.

## Syntax

```js
withJson(payload)
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .post('/api/users')
  .withJson({
    "name": "morpheus",
    "job": "leader"
  })
  .expectStatus(201);
```

## Arguments

#### > payload (object)

Payload is a js object.

## Examples

#### JSON 

```js
const { spec } = require('pactum');

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    "name": "morpheus",
    "job": "leader"
  })
  .expectStatus(201);
```

## See Also

- [withBody](/api/requests/withBody)