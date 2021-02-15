# Contract Testing

In a world of micro-services architecture, there will be numerous micro-services that are developed, deployed & operated by different teams. One way to make sure all these moving parts work together is through having slow, brittle & expensive e2e or integration tests. But there is an another way to test the integrations between micro-services using contract tests which are fast, easy & cheap. 

Contract Testing is a technique for testing interactions between applications (often called as services) that communicate with each other, to ensure the messages they send or receive conform to a shared understanding that is documented in a **contract**.

Contract Testing gives a way for services to enter into an agreement on how they are going to communicate with each other. Once the agreement is in place it provides a way to modify the agreement but before the change takes effect, the services need to sign off on the new contract.

Learn more about contract testing at [pact.io](https://docs.pact.io)

> Pactum is inspired from **pact.io**.

## Terminology

* **Consumer** - An application that makes use of the functionality or data from another application to do its job.

* **Provider** - An application (often called a service) that provides functionality or data for other applications to use, often via an API.

* **Contract** - A contract is a documented form of shared understanding between a consumer & a provider. Pact creates this document in the form of a **JSON** file.

* **Pact** - A contract between a consumer and provider is called a pact. Each pact is a collection of interactions.

* **Interaction** - An individual message that combines a request sent by the consumer & minimal expected response replied by the provider.

* **Minimal Expected Response** - It describes the parts of the response the consumer wants the provider to return.

## Workflow

Contract testing with pactum follows an easy pattern that will convert our existing *unit tests* or *component tests* into *contract tests*.

Contract Testing has two steps

1. Publish Actual Behavior (*By Provider*)
2. Publish Assumed Behavior (*From Consumer*)

Once we publish the actual & assumed behavior to **PactumJS Flow Server**, pactum will compare this behaviors and produce compatibility results.

### Actual Behavior

Actual behavior is recorded during component tests that are executed in providers pipeline. Each actual behavior is recorded as a **flow**. All these flows are published to **PactumJS Flow Server** using [pactum-flow-plugin](https://www.npmjs.com/package/pactum-flow-plugin)

<!-- tabs:start -->

#### ** inventory.spec.js **

```js
const pactum = require('pactum');

it('get a product in-stock from inventory-service', async () => {
  await pactum.flow('get a product in-stock')
    .get('/api/orders')
    .withQueryParams('product', 'iPhone')
    .expectJson({
      "InStock": true
    })
    .expectStatus(200);
});
```

#### ** base.spec.js **

```js
const { reporter } = require('pactum');

before(async () => {
  addFlowReporter();
});

function addFlowReporter() {
  pf.config.url = 'http://localhost:3000';
  pf.config.projectId = 'team2_inventory-service';
  pf.config.projectName = '[TEAM2] Inventory-Service';
  pf.config.version = '1.0.18';
  pf.config.token = 'YWRtaW46YWRtaW4=';
  reporter.add(pf.reporter);
}

after(async () => {
  await reporter.end();
});
```

<!-- tabs:end -->

### Assumed Behavior

Assumed behavior is recorded during unit tests or component tests that are executed in consumers pipeline. Each assumed behavior is recorded as an **interaction**. All these interactions are published to **PactumJS Flow Server** using [pactum-flow-plugin](https://www.npmjs.com/package/pactum-flow-plugin)

<!-- tabs:start -->

#### ** orders.spec.js **

```js
const pactum = require('pactum');

it('post an orders to order-service', async () => {
  await pactum.flow('post an order')
    .useInteraction('get a product in-stock from inventory-service')
    .post('/api/orders')
    .withJson({})
    .expectStatus(200);
});
```

#### ** base.spec.js **

```js
const { reporter, handler } = require('pactum');

before(async () => {
  addFlowReporter();
  addInteractions();
  await mock.start(4000);
});

function addFlowReporter() {
  pf.config.url = 'http://localhost:3000';
  pf.config.projectId = 'team_order-service';
  pf.config.projectName = '[TEAM] Order-Service';
  pf.config.version = '1.0.18';
  pf.config.token = 'YWRtaW46YWRtaW4=';
  reporter.add(pf.reporter);
}

function addInteractions() {
  handler.addInteractionHandler('get a product in-stock from inventory-service', () => {
    return {
      provider: 'team2_inventory-service',
      flow: 'get a product in-stock',
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
          "InStock": true
        }
      }
    }    
  });
}

after(async () => {
  await mock.stop();
  await reporter.end();
});
```

<!-- tabs:end -->

## Pactum Flow Server

Find official Dockerized Pactum Flow Server at https://hub.docker.com/r/asaianudeep/pactumjs