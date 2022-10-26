# setDefaultExpectHandlers

set default expect handlers for all the response assertions.

## Syntax

```js
setDefaultExpectHandlers(handler, data)
```

## Usage

### ✅  Correct Usage

```js
// key-value pair
response.setDefaultExpectHandlers('user', 'gender')
```

## Arguments

#### > handler (string)

Name of the expect handler

#### > data (any)

custom data to be passed to handler

## Examples

### Normal

```js
const { handler, spec, response } = require('pactum');
const { expect } = require("chai")

handler.addExpectHandler('user', (ctx) => {
  // ctx.data will have 'gender'
  expect(ctx.res.json.results[0]).to.have.property(ctx.data);
});

response.setDefaultExpectHandlers('user', 'gender')

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);

```

## See Also

- [expect](/api/assertions/expect)
- [addExpectHandler](/api/handlers/addExpectHandler)
