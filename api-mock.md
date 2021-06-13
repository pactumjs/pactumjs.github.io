# Mock

Mock Server allows you to mock any server or service via HTTP or HTTPS, such as a REST endpoint. Simply it is a simulator for HTTP-based APIs.

## List of Mock Options

| Method                        | Description                           |
| ----------------------------  | ------------------------------------  |
| `start`                       | start mock server                     |
| `stop`                        | stop mock server                      |
| `addInteraction`              | adds interaction                      |
| `getInteraction`              | gets interaction                      |
| `removeInteraction`           | removes interaction                   |
| `clearInteractions`           | removes all interactions              |
| `useRemoteServer`             | use remote mock server                |

## API

### start

Starts a mock server. It returns a promise.

```js
const { mock } = require('pactum');
mock.start(3000);
```

### stop

Stops a mock server. It returns a promise.

```js
const { mock } = require('pactum');
mock.start(3000);

// stops mock server after 3 seconds
setTimeout(() => { mock.stop(); }, 3000);
```

### addInteraction

Adds interaction to mock server. It returns interaction id.

#### Adding Single Interaction

```js
const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/health'
  },
  response: {
    status: 200
  }
});

mock.start(3000);
```

#### Adding Multiple Interactions

`addInteraction` can accept multiple interactions.

```js
const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/v1/health'
  },
  response: {
    status: 200
  }
});

mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/v2/health'
  },
  response: {
    status: 200
  }
});

mock.addInteraction([
  {
    request: {
      method: 'GET'
      path: '/api/v3/health'
    },
    response: {
      status: 200
    }
  },
  {
    request: {
      method: 'GET'
      path: '/api/v4/health'
    },
    response: {
      status: 200
    }
  }
]);

mock.start(3000);
```

#### Adding Interactions using Handlers

Reusing interactions are made easy with handlers.

```js
const { mock, handler } = require('pactum');

handler.addInteractionHandler('get health', (ctx) => {
  return {
    request: {
      method: 'GET',
      path: `/api/${ctx.data}/health`
    },
    response: {
      status: 200
    }
  }    
});

mock.addInteraction('get health', 'v1');
mock.addInteraction('get health', 'v2');
mock.addInteraction('get health', 'v3');
mock.addInteraction('get health', 'v4');

mock.start(3000);
```

### getInteraction

Returns the interaction object with usage details.

```js
const { mock } = require('pactum');

const id = mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/health'
  },
  response: {
    status: 200
  }
});

mock.start(3000);

// after mock server started & someone hit the above health endpoint
const interaction = mock.getInteraction(id);

// get multiple interactions
const interactions = mock.getInteraction([ /* multiple interaction ids */ ]);
```

### removeInteraction

Removes interaction from mock server.

```js
const { mock } = require('pactum');

const id = mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/health'
  },
  response: {
    status: 200
  }
});

mock.start(3000);

// removes a single interaction
mock.removeInteraction(id);

// remove multiple interactions
mock.removeInteraction([ /* multiple interaction ids */ ]);
```

### clearInteractions

Removes all interactions from server.

```js
const { mock } = require('pactum');

const id = mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/health'
  },
  response: {
    status: 200
  }
});

mock.start(3000);

// remove all interactions
mock.clearInteractions();
```

### useRemoteServer

Uses remote mock server. PactumJS allows us to control a mock server remotely.

!> While using remote mock server, all methods under `mock` will return promises.

```js
const { mock } = require('pactum');

// if pactum mock server is running in a different machine/process.
mock.useRemoteServer('http://some-url');

const id = await mock.addInteraction({
  request: {
    method: 'GET'
    path: '/api/health'
  },
  response: {
    status: 200
  }
});

await mock.removeInteraction(id);
```

