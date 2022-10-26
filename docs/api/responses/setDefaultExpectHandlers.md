# setDefaultExpectHandlers

set default expect handlers for all the response assertions.

## Syntax

```js
setDefaultExpectHandlers(handler, data)
```
- `handler` (**string**) - name of the expect handler
- `data` (**any**) - custom data to be passed to handler
## Usage

### ✅  Correct Usage

```js
response.setDefaultExpectHandlers('user', 'gender')
```

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
