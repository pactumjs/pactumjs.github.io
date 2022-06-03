---
tags:
  - timeout
  - request timeout
---

# withRequestTimeout

Set the request timeout for the current `spec`.

> By default, request will timeout after **3000ms**.

::: danger
Make sure to increase the test runners timeout as well
:::

## Syntax

```js
withRequestTimeout(milliseconds)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withRequestTimeout(5000)
  .expectStatus(200);
```

## Arguments

#### > milliseconds (number)

Number of milliseconds to wait for a server to respond.

## Examples

### Normal

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectStatus(200)
  .withRequestTimeout(5000);
```

### Mocha

```js
const { spec } = require('pactum');

it('should get user with id 1', async function () {
  // updates test runners timeout for this 'it' block
  this.timeout(5000);
  
  await spec()
    .get('https://reqres.in/api/users/1')
    .expectStatus(200)
    .withRequestTimeout(5000);
});
```

## See Also

- [setDefaultTimeout](/api/settings/setDefaultTimeout)
