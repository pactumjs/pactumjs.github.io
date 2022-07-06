---
tags:
  - state
  - handler
---

# addStateHandler

**State Handlers** helps us to run specific asynchronous code that puts our application in a specific state. Most common use case would be database interactions.

## Syntax

```js
addStateHandler(name, cb)
```

### ✅  Correct Usage

```js
addStateHandler('some state name', async (ctx) => {
  const { data } = ctx;
  // code to add data in database - redis.set()
  // or code to add mock interactions - mock.addInteraction()
  // or custom code
});
```

## Arguments

#### > name *(string)*

Name of the state handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **data** property.

## Examples

### Normal

```js
const { mock, handler } = require('pactum');

handler.addStateHandler('some state name', async (ctx) => {
  const { data } = ctx;
  // code to add data in database - redis.set()
  // or code to add mock interactions - mock.addInteraction()
  // or custom code
});

mock.start(3000);
```

Invoke the state handler.

```shell
curl --location --request POST 'http://localhost:3000/api/pactum/state' \
--header 'Content-Type: application/json' \
--data-raw '[ { "name": "some state name", "data": { "id": "some-random-id" } } ]'
```