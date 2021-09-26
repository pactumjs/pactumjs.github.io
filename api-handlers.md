# Handlers

Handlers is a powerful concept that allows us to reuse & customize different things to build a more reliable and less redundant automation framework around PactumJS.

## List of Handlers

| Name        | Method                    |
| ----------- | ------------------------- |
| Spec        | `addSpecHandler`          |
| Expect      | `addExpectHandler`        |
| Assert      | `addAssertHandler`        |
| Interaction | `addInteractionHandler`   |
| Data        | `addDataHandler`          |
| Retry       | `addRetryHandler`         |
| Capture     | `addCaptureHandler`       |
| State       | `addStateHandler`         |
| Wait        | `addWaitHandler`         |


## API

### addSpecHandler

Spec handlers helps us to reuse similar kind of request making & response validation across different test cases.

The function accepts two arguments

- **handler name** - name of the handler
- **callback function** - receives a context object containing `spec` & optional custom `data` properties.

To use a spec handler, pass the handler name into `pactum.spec()` or `use()` method.

<!-- tabs:start -->

#### ** spec.handlers.js **

```js
const { addSpecHandler } = require('pactum').handler;

addSpecHandler('GetUser', (ctx) => {
  const { spec, data } = ctx;
  const { userId } = data;

  // request makers
  spec.get('/api/users');
  spec.withHeaders('Authorization', 'Basic abc');
  spec.withQueryParams('id', userId);

  // response validations
  spec.expectStatus(200);
  spec.expectJsonSchema({ type: 'object' });
});
```

#### ** base.test.js **

```js
const { request } = require('pactum');

// load handlers
require('./spec.handlers');

// global hook
before(() => {
  request.setBaseUrl('http://localhost:3000');
});
```

#### ** users.test.js **

```js
const pactum = require('pactum');

it('get first user', async () => {
  await pactum.spec('GetUser', { userId: 1 })
    .expectJson({
      id: 1,
      name: 'snow'
    });
});

it('get second user', async () => {
  await pactum.spec('GetUser', { userId: 2 })
    .expectJson({
      id: 2,
      name: 'jon'
    });
});

// Alternatively we can use the "use" method
it('get third user', async () => {
  await pactum.spec()
    .use('GetUser', { userId: 3 })
    .expectJson({
      id: 3,
      name: 'dragon'
    });
});
```

<!-- tabs:end -->

### addExpectHandler

Expect handlers helps us to define custom expectations & reuse them across different test cases.

The function accepts two arguments

- **handler name** - name of the handler
- **callback function** - receives a context object containing `req` (*request*) & `res` (*response*) objects & optional `data` (*custom data*).

<!-- tabs:start -->

#### ** expect.handlers.js **

```js
const { addExpectHandler } = require('pactum').handler;
const { expect } = require('chai');

addExpectHandler('user details', (ctx) => {
  const user = ctx.res.json;
  expect(user).deep.equals({ id: 1 });
});
```

#### ** base.spec.js **

```js
//  load handlers
require('./expect.handlers');
```

#### ** user.spec.js **

```js
const pactum = require('pactum');

it('should have user', async () => {
  const response = await pactum.spec()
    .get('/api/users/5')
    .expect('user details');

  // bdd style
  pactum.expect(response).should.have._('user details');
});
```

<!-- tabs:end -->

We may need to modify the way we assert based on the request or custom data. We can pass custom data to expect handlers.

<!-- tabs:start -->

#### ** expect.handlers.js **

```js
const { addExpectHandler } = require('pactum').handler;

addExpectHandler('user details', (ctx) => {
  const res = ctx.res;
  const req = ctx.req;
  const data = ctx.data;
  // add custom assertions
});
```

#### ** base.spec.js **

```js
//  load handlers
require('./expect.handlers');
```

#### ** user.spec.js **

```js
const pactum = require('pactum');

it('should have user', async () => {
  const response = await pactum.spec()
    .get('/api/users/5')
    .expect('user details', 5);
});
```

<!-- tabs:end -->

### addAssertHandler

Assert Handlers helps us to reuse the custom JavaScript assertion code on a JSON. With this we can easily extend the capabilities of `expectJsonLike` to solve complex assertions.

- **handler name** - name of the handler
- **callback function** - receives a context object containing `data` & optional `args`.

!> Prefix handler name with **#** in `expectJsonLike` to use assert handler. 

<!-- tabs:start -->

#### ** assert.handlers.js **

```js
const { addAssertHandler } = require('pactum').handler;

addAssertHandler('number', (ctx) => {
  return typeof ctx.data === 'number';
});
```

#### ** base.spec.js **

```js
//  load handlers
require('./assert.handlers');
```

#### ** user.spec.js **

```js
const pactum = require('pactum');

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        id: '#number',
        name: 'jon'
      }
    ]);
});
```

<!-- tabs:end -->

We may need to modify the way we assert based on custom data. Custom arguments can be passed to the handler function by using **comma** separated values after `:`.

<!-- tabs:start -->

#### ** assert.handlers.js **

```js
const { addAssertHandler } = require('pactum').handler;

addAssertHandler('type', (ctx) => {
  return typeof ctx.data === ctx.args[0];
});
```

#### ** base.spec.js **

```js
//  load handlers
require('./assert.handlers');
```

#### ** user.spec.js **

```js
const pactum = require('pactum');

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        id: '#type:number',
        name: 'jon'
      }
    ]);
});
```

<!-- tabs:end -->

### addInteractionHandler

Interaction handlers helps us to define & reuse similar kind of interactions in mock server.

The function accepts two arguments

- **handler name** - name of the handler
- **callback function** - receives a context object containing optional `data` & `spec` (*when used in `useInteraction` of `pactum.spec()`*).

#### Simple Interaction Handler

```js
const { mock, handler } = require('pactum');

// define interaction 
handler.addInteractionHandler('get users from user-service', () => {
  return {
    request: {
      method: 'GET',
      path: '/api/users'
    },
    response: {
      status: 200,
      body: []
    }
  }    
});

// add the defined interaction to the mock server
mock.addInteraction('get users from user-service');

mock.start(3000);
```

#### Interaction Handler - With Context

We can pass custom data to the interaction handler callback function through the context object which helps us to reuse the interaction with customizations.

The `ctx` object contains a `data` property that will represent the passed custom data.

```js
const { mock, handler } = require('pactum');

handler.addInteractionHandler('get product', (ctx) => {
  return {
    request: {
      method: 'GET',
      path: '/api/inventory',
      queryParams: {
        product: ctx.data.product
      }
    },
    response: {
      status: 200,
      body: {
        "InStock": ctx.data.inStock
      }
    }
  }    
});

mock.addInteraction('get product', { product: 'iPhone', inStock: true });
mock.addInteraction('get product', { product: 'Galaxy', inStock: false });

mock.start(3000);
```

#### Interaction Handler - Refer Other Handlers

Interaction handlers can refer other interaction handlers to make them more reusable. Instead of returning interaction, return an object with `name` & optional `data` property.

```js
const { mock, handler } = require('pactum');

handler.addInteractionHandler('get product', (ctx) => {
  return {
    request: {
      method: 'GET',
      path: '/api/inventory',
      queryParams: {
        product: ctx.data.product
      }
    },
    response: {
      status: 200,
      body: {
        "InStock": ctx.data.inStock
      }
    }
  }    
});

handler.addInteractionHandler('get product in stock', () => {
  // reuses the interaction - get product
  return { name: 'get product', data: { product: 'iPhone', inStock: true } };   
});

handler.addInteractionHandler('get product out of stock', () => {
  // reuses the interaction - get product
  return { name: 'get product', data: { product: 'iPhone', inStock: false } };   
});

mock.addInteraction('get product in stock');
mock.addInteraction('get product out of stock');

mock.start(3000);
```

### addWaitHandler

Wait handlers helps us to wait for background tasks to complete before moving to the next test case or API call.

The function accepts two arguments

- **handler name** - name of the handler
- **callback function** - receives a context object containing `req`, `res`, optional custom `data` and optional `rootData` (*spec handler data*)  properties. This call back function can return a *promise*.

<!-- tabs:start -->

#### ** wait.handlers.js **

```js
const pactum = require('pactum');
const { addWaitHandler } = pactum.handler;

addWaitHandler('WaitForJob', async (ctx) => {
  const { res } = ctx; // 'res' will be the response of the invoking spec

  await pactum.spec()
    .get('/api/job/progress')
    .withQueryPrams('id', res.json.id)
    .expectJson({ status: 'completed' })
    .retry(5, 100)

});
```

#### ** base.test.js **

```js
const { request } = require('pactum');

// load handlers
require('./wait.handlers');

// global hook
before(() => {
  request.setBaseUrl('http://localhost:3000');
});
```

#### ** users.test.js **

```js
const pactum = require('pactum');

it('trigger job', async () => {
  await pactum.spec()
    .post('/trigger/background/job')
    .expectStatus(200)
    .expectJsonLike({
      id: /\w+/
    })
    .wait('WaitForJob');
});
```

<!-- tabs:end -->