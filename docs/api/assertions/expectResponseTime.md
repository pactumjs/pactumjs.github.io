---
tags:
  - time
  - response time
  - assert response time
---

# expectResponseTime

Assert response time less than the specified milliseconds

## Syntax

```js
expectResponseTime(milliseconds)
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .get('/api/health')
  .expectResponseTime(100);
```

```js
// bdd style
const _spec = await spec().get('/api/health');
_spec.response().to.have.responseTimeLessThan(100);
```

## Arguments

#### > milliseconds (number)

Expected response time.

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectResponseTime(1500);
```