# expect

Custom assertions.

> By default, this library provides a rich set of assertion methods that majorly focuses on JSON content. At times, we might need to assert different data types or perform some custom assertions on JSON content itself. To support this kind of requirements, pactum allows us to bring our own assertion library or take advantage of popular libraries like [chai](https://www.npmjs.com/package/chai) by seamless integration.

## Syntax

```js
expect(custom_function)
expect(handler_name)
expect(handler_name, handler_options)
```

## Usage

#### ✅  Correct Usage

```js
// using ad-hoc anonymous custom function
await spec()>
  .get('/posts/5')
  .expect((ctx) => {
    const { req, res, data } = ctx;
    // run your custom assertions
  });

// using handler name
await pactum.spec()
  .get('/api/users/5')
  .expect('user details');

// using handler name and passing custom data
await pactum.spec()
  .get('/api/users/5')
  .expect('user details', 5);
```

## Arguments

#### > custom_function (function)

Custom callback assertion function. A context object is passed as an argument that has `req` *(request)*, `res` *(response)* and `data` properties.

#### > handler_name (string)

Name of the expect handler to use.

#### > handler_options (any)

Handler options could be anything. With the help of this options, we can make the expect handlers dynamic.

## Examples

### Custom Functions

```js
const { spec } = require('pactum');
const assert = require('assert');

await spec()
  .get('https://reqres.in/api/users/1')
  .expect((ctx) => {
    assert.strictEqual(ctx.res.statusCode, 200)
  });
```

### Handlers

```js
const { spec, handler } = require('pactum');
const assert = require('assert');

handler.addExpectHandler('status 200', (ctx) => {
  assert.strictEqual(ctx.res.statusCode, 200)
});

await spec()
  .get('https://reqres.in/api/users/1')
  .expect('status 200');
```

### Handlers with custom data

```js
const { spec, handler } = require('pactum');
const assert = require('assert');

handler.addExpectHandler('status', (ctx) => {
  assert.strictEqual(ctx.res.statusCode, ctx.data)
});

await spec()
  .get('https://reqres.in/api/users/1')
  .expect('status', 200);

await spec()
  .get('https://reqres.in/api/users/1001')
  .expect('status', 404);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.