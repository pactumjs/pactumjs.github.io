# useRemoteServer

Uses remote mock server.

:::danger CHANGES
All methods in mock will return promises while using a remote mock server.
:::

## Syntax

```js
useRemoteServer(url)
```

## Usage

### ✅  Correct Usage

```js
mock.useRemoteServer('http://localhost:9393');
```

## Arguments

#### > url (string)

Mock server url

## Examples

Start a mock server

```js
const { mock, handler } = require('pactum');

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

mock.start(3000);
```

Control the server from a different file.

```js
const { mock } = require('pactum');

mock.useRemoteServer('http://localhost:3000');

await mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/hello'
  },
  response: {
    status: 200,
    body: 'Hello, 👋'
  }
});

await mock.addInteraction('get empty users from user-service');
```