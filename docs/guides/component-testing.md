# Component Testing

Component testing is defined as a software testing type, in which the testing is performed on each component (or service) separately without integrating with other components (or services).

These tests are all about testing the functionality of individual service. During this, your service will be trying to interact with external services. But instead of talking to real external services, they talk to mock servers and local databases.

::: tip
[Docker](https://www.docker.com) is great place to test your applications in isolation. 

**PactumJS** might be the best tool available in the market for component testing. ¯\\(ツ)/¯
:::

## Example

To better understand the concept of component testing, consider an e-commerce application that has multiple micro-services like login-service, payment-service, **order-service**, **inventory-service** and many more. All these micro-services are developed, deployed & operated independently by different teams.

Lets focus on **order-service** which is responsible for managing orders. Consider it is running on port `3000` locally & it has an API endpoint `/api/orders` to accept orders.

We can write two simple functional tests for order-service

- Buy a product which is in-stock
- Buy a product which is out-of-stock

```js
it('should buy a product which is in stock', async () => {
  await spec()
    .post('http://localhost:3000/api/orders')
    .withJson({
      "name": "iPhone"
    })
    .expectStatus(200);
});

it('should not buy a product which is out-of-stock', async () => {
  await spec()
    .post('http://localhost:3000/api/orders')
    .withJson({
      "name": "Galaxy"
    })
    .expectStatus(400)
    .expectJson({
      "message": "product is out-of-stock"
    });
});
```

When a user places an order, **order-service** will process it. During processing of the order it will internally communicates with the **inventory-service** to check if the product is available or not.

Assume **inventory-service** exposes an API endpoint `/api/inventory` that returns available products in the inventory.

As per component testing, **order-service** should not communicate with actual **inventory-service** instead with a mock version of it.

```js
const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/inventory',
    queryParams: {
      product: 'iPhone'
    }
  },
  response: {
    status: 200,
    body: {
      "in_stock": true
    }
  }
});

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/inventory',
    queryParams: {
      product: 'Galaxy'
    }
  },
  response: {
    status: 200,
    body: {
      "in_stock": false
    }
  }
});

mock.start(3000);
```

Now, we can update the **inventory-service** to divert the traffic to the mock server and run the tests.

This looks simple & easy to test. But as the functionality of the application grows, the dependency of the **order-service** on other services will increase. To test different scenarios, it becomes difficult to control the behavior of mock server.

## Pattern

**PactumJS** makes component testing easy & fun as it allows us to control the behavior of the mock server for each & every test case.

Interactions can be added to the mock server before the execution of a test case through `useInteraction` method. Once the interactions are added, you can build your request & expectations on top of it. The mock interactions added through `useInteraction` method are auto removed after the test case is executed.

::: danger
If the interaction doesn't get exercised, the component test will fail. 
:::

Let's look at the example of component tests where the mock server runs along with the tests.

```js
const { spec, mock } = require('pactum');

before(async () => {
  await mock.start(4000);
});

after(async () => {
  await mock.stop();
});

it('should buy a product which is in stock', async () => {
  await spec()
    .useInteraction({
      request: {
        method: 'GET',
        path: '/api/inventory',
        queryParams: {
          product: 'iPhone'
        }
      },
      response: {
        status: 200,
        body: {
          "in_stock": true
        }
      }
    })
    .post('/api/orders')
    .withJson({
      "name": "iPhone"
    })
    .expectStatus(200);
});

it('should not buy a product which is out-of-stock', async () => {
  await spec()
    .useInteraction({
      request: {
        method: 'GET',
        path: '/api/inventory',
        queryParams: {
          product: 'iPhone'
        }
      },
      response: {
        status: 200,
        body: {
          "in_stock": false
        }
      }
    })
    .post('/api/orders')
    .withJson({
      "name": "iPhone"
    })
    .expectStatus(400)
    .expectJson({
      "message": "product is out-of-stock"
    });
});
```

::: tip
Use interaction handlers and remote mock server to make component tests look simpler.
:::

## Non CRUD Endpoints

Not all endpoints will perform CRUD operations. Some endpoints will perform some long running operations in the background even though it sends a response immediately. It becomes difficult to test how it interacts with other services in the background.

This library helps to validate whether interactions are exercised or not in the background. We can also validate the number of times the interaction is exercised.

Use `addInteraction` to add a interaction to the server & later use `getInteraction` to get interaction details & perform validations on it.

Lets look at an example

```js
it('some background process', async () => {
  const id = mock.addInteraction('get product');
  
  await spec()
    .post('/api/process')
    .expectStatus(202);
  
  await sleep(3000); // wait for the process to complete
  
  const interaction = mock.getInteraction(id);
  expect(interaction.exercised).equals(true);
  expect(interaction.callCount).equals(1);
  
  mock.removeInteraction(id);
});
```

### Static Wait

Alternatively, use `wait` method to pause the validation for the background process to complete.

```js
it('some background process', async () => {
  await spec()
    .useInteraction('get product')
    .post('/api/process')
    .expectStatus(202)
    .wait(1000);
    // it waits for 1s after receiving the response and before performing the assertions
});
```

### Dynamic Wait

`wait` method also accepts a `spec` instance with a retry mechanism to dynamically wait for something.

```js
it('some background process', async () => {
  // don't use 'await' statement
  const specWait = spec()
    .get('/api/status')
    .retry({ strategy: ({res}) => res.json.status === 'completed' });
  await spec()
    .useInteraction('get product')
    .post('/api/process')
    .expectStatus(202)
    .wait(specWait);
});
```

### Background Interactions

For Non-CRUD endpoints, your service could be taking to other dependent services after replying with a response. This behavior is mostly seen in asynchronous tasks. For such test cases, add a background interaction through `background` property and invoke the `wait` method.

By default when a background interaction is present, pactum will wait for `1000` milliseconds with a polling interval of `100` milliseconds to check the background interactions are exercised or not.

> Imagine it as an Explicit Wait from Selenium.

```js
it('some background process', async () => {
  await spec()
    .useInteraction({
      background: true,
      request: {
        method: 'GET',
        path: '/api/products'
      },
      response: {
        status: 200,
        body: []
      }
    })
    .post('/api/process')
    .expectStatus(202)
    .wait();
});
```