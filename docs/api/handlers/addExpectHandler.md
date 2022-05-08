# addExpectHandler

**Expect Handlers** helps us to reuse same set of custom assertions across different tests.

## Syntax

```js
addExpectHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addExpectHandler('user details', (ctx) => {
  // add custom assertions
});
```

```js
// using custom data
addExpectHandler('user details', (ctx) => {
  const { req, res, data } = ctx;
  // add custom assertions
});
```

## Arguments

#### > name *(string)*

Name of the expect handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **req**, **res** and **data** properties.

## Examples

### Normal

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

### Custom Data

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

- [expect](/api/assertions/expect)