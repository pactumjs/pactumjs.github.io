---
tags:
  - custom assertions
  - assert
---

# expect

By default, this library provides a rich set of assertion methods that mainly focuses on JSON content. We can also add custom expect handlers for making much more complicated assertions on different data types. You can bring your own assertion library or take advantage of popular libraries like [chai](https://www.npmjs.com/package/chai).

## Syntax

```js
expect(cb)
expect(handler-name)
expect(handler-name, data)
```

## Usage

### ✅  Correct Usage

```js
// using callback function
await spec()
  .get('/api/health')
  .expect((ctx) => {
    // run your custom assertions
  });
```

```js
// using handler function
await spec()
  .get('/api/health')
  .expect('healthy');
```

```js
// using handler function and custom data
await spec()
  .get('/api/health')
  .expect('healthy', { "message": "OK" });
```

```js
// bdd style
const _spec = await spec().get('/api/health').toss();
_spec.response().to.be._('healthy');
```

## Arguments

#### > cb *(function)*

Callback function. It will receive a `context` object that has **req** and **res** properties.

#### > handler-name *(string)*

Name of the expect handler

#### > data *(any)*

custom data to be passed to handler

::: tip
handlers and callback functions can be asynchronous
:::

## Examples

### Callback Function

```js
const { spec } = require('pactum');
const { expect } = require("chai")

await spec()
  .get('https://randomuser.me/api')
  .expect(ctx => {
    expect(ctx.res.json.results[0]).to.have.property('gender');
  });
```

### Handler

```js
const { handler, spec } = require('pactum');
const { expect } = require("chai")

handler.addExpectHandler('user', (ctx) => {
  expect(ctx.res.json.results[0]).to.have.property('gender');
});

await spec()
  .get('https://randomuser.me/api')
  .expect('user');
```

### Handler with Custom Data

```js
const { handler, spec } = require('pactum');
const { expect } = require("chai")

handler.addExpectHandler('user', (ctx) => {
  // ctx.data will have 'gender'
  expect(ctx.res.json.results[0]).to.have.property(ctx.data);
});

await spec()
  .get('https://randomuser.me/api')
  .expect('user', 'gender');
```

## See Also

- [Expect Handler](/api/handlers/addExpectHandler)