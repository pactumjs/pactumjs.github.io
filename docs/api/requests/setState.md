---
tags:
  - state
  - set state
---

# setState

**State Handlers** helps us to run specific asynchronous code that puts our application in a specific state. We can use these state handlers in our tests to reset/set state before each test case.

## Syntax

```js
setState(name, data?);
```

### ✅  Correct Usage

```js
setState('admin user');
setState('admin user', { data: 'some data' });
```

## Arguments

#### > name *(string)*

Name of the state handler

#### > data *(object)*

Data that will be passed to the state handler

## Examples

### Normal

```js
const { spec, handler } = require('pactum');

handler.addStateHandler('fix earth', async (ctx) => {
  const { data } = ctx;
  // code to add data in database
  // or code to reset redis
  // or custom code to centering a div
});

await spec
  .setState('fix earth')
  .get('/users')
  .expectStatus(200);
```
