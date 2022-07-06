---
tags:
  - interaction
  - handler
---

# addInteractionHandler

Interaction handlers helps us to define & reuse similar kind of interactions in mock server.

## Syntax

```js
addInteractionHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addInteractionHandler('get empty users from user-service', () => {
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
```

```js
// using custom data
addInteractionHandler('get a user from user-service', (ctx) => {
  return {
    request: {
      method: 'GET',
      path: '/api/users/{id}',
      pathParams: {
        id: ctx.data.userId
      }
    },
    response: {
      status: 200,
      body: { "id": ctx.data.userId, "name": "mom" }
    }
  }    
});
```

## Arguments

#### > name *(string)*

Name of the interaction handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **data** property. 

::: warning
Callback function should return an `interaction` object or reference to other interactions.
:::

## Examples

### Normal

```js
const { handler, mock } = require('pactum');

handler.addInteractionHandler('get empty users from user-service', () => {
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

mock.addInteraction('get users from user-service');

mock.start(3000);
```

### Custom Data

Example of adding multiple interactions with the same handler.

```js
const { handler, mock } = require('pactum');

handler.addInteractionHandler('get a user from user-service', (ctx) => {
  return {
    request: {
      method: 'GET',
      path: '/api/users/{id}',
      pathParams: {
        id: ctx.data.userId
      }
    },
    response: {
      status: 200,
      body: { "id": ctx.data.userId, "name": "mom" }
    }
  }    
});

mock.addInteraction('get a user from user-service', { userId: 1 });
mock.addInteraction('get a user from user-service', { userId: 2 });

mock.start(3000);
```

### Refer Other Interactions

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
  // reuses the above interaction
  return { name: 'get product', data: { product: 'iPhone', inStock: true } };   
});

handler.addInteractionHandler('get product out of stock', () => {
  // reuses the first interaction
  return { name: 'get product', data: { product: 'iPhone', inStock: false } };   
});

mock.addInteraction('get product in stock');
mock.addInteraction('get product out of stock');

mock.start(3000);
```

### Component Testing

```js
const { handler, spec } = require('pactum');

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

await spec()
  .useInteraction('get product', { product: 'iPhone', inStock: true })
  .post('/api/orders')
  .withJson({
    "name": "iPhone",
    "quantity": 1
  })
  .expectStatus(200);
```