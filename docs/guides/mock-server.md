# Mock Server

Mock Server allows you to mock any server or service via HTTP or HTTPS, such as a REST endpoint. Simply it is a simulator for HTTP-based APIs.

At one end pactum is a REST API testing tool and on the other, it can act as a standalone mock server. It comes in handy while using this library for component & contract testing.


## Default Configuration

Use `mock.setDefaults()` method to set default configuration for the mock server.

Configuring a http mock server!
```js
const { mock } = require('pactum');
// sets port, host
const mockOpts = {port: 3001, host: '127.0.0.1'};
await mock.setDefaults(mockOpts)
```

Configuring a https mock server!
```js
const { mock } = require('pactum');
// sets port, host, httpsOpts
const mockOpts = {port: 3001, host: '127.0.0.1', httpsOpts: {key: "server.key", cert: "server.crt"}};
await mock.setDefaults(mockOpts)
```
`key` & `cert` values are the paths to .key and .crt files.

## Start Server

Use `mock.start()` method to run the server.

```js
const { mock } = require('pactum');
// runs mock server on port 3000
await mock.start(3000);
```
::: tip TIP
Use of `mock.setDefaults()` is encouraged for setting port, hostname and/or https options
:::

Check the health of the mock server

```shell
# Returns OK
curl http://localhost:3000/api/pactum/health
```

## Stop Server

Use `mock.stop()` method to stop the mock server. It returns a promise. 

::: tip TIP
Waiting for the server to stop will be useful while running the mock server along with your unit or component tests.
:::

```js
await mock.stop();
```

## Add Behavior

An **interaction** adds behavior to the mock server.

Use `addInteraction()` method to add interactions to the mock server. It accepts `interaction` object as an argument which contains `request` and `response` details.

```js
const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/hello'
  },
  response: {
    status: 200,
    body: 'Hello, 👋'
  }
});

mock.start(3000);
```

Opening `http://localhost:3000/api/hello` will respond with a status code 200 & a body with text `Hello, 👋`

## Request Matching

When a real request is sent to mock server, it will try to match the received real request with the interactions request. If a match is found it will return the specified response in the matched interaction or `404` status code will be returned.

- Performs a strong match on HTTP Method, Path, Query Params & JSON body.
- Performs a loose match on Headers.

### Strong Match on Query Params

Let's see an example to send different responses based on query params.

```js
mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/users',
    queryParams: {
      id: 1
    }
  },
  response: {
    status: 200,
    body: 'user 1'
  }
});

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/users',
    queryParams: {
      id: 2
    }
  },
  response: {
    status: 200,
    body: 'user 2'
  }
});
```

- an HTTP **GET** to `/api/users?id=1` will return `user 1`.
- an HTTP **GET** to `/api/users?id=2` will return `user 2`.
- for rest all requests it will return a status code `404`.

### Loose Match on Body

When `strict` is `false`, it performs a loose match on query params and response body.

```js
mock.addInteraction({
  strict: false,
  request: {
    method: 'POST',
    path: '/api/users',
    body: {
      name: 'jon'
    }
  },
  response: {
    status: 200
  }
});
```

- an HTTP **POST** to `/api/users` with body containing `name` as `jon`  will return a 200 status code.
- an HTTP **POST** to `/api/users` without `name` property in body will return a 404 status code.

## Consecutive Calls

`onCall` property in response defines the behavior of the interaction on the **n<sup>th</sup>** call. Useful for testing sequential interactions.

```js
mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/health'
  },
  response: {
    onCall: {
      0: {
        status: 500
      },
      1: {
        status: 200,
        body: 'OK'
      }
    }
  }
})
```

- an HTTP **GET** to `/api/health` will return a status code 500. _(first call)_
- an HTTP **GET** to `/api/health` again will return a status code 200. _(second call)_
- an HTTP **GET** to `/api/health` again will return a status code 404. _(third call)_

## Delays

`fixedDelay` & `randomDelay` properties in interaction will add delay in milliseconds to the response.

```js
mock.addInteraction({
  request: {
    method: 'POST',
    path: '/api/users',
    body: {
      id: 3
    }
  },
  response: {
    status: 200,
    fixedDelay: 1000
  }
});
```

## Stateful Behavior

Stateful Behavior feature can save us a lot of time when implementing integration test scenarios where we need to send a dynamic response based on the received request. Interactions leverage the features from [Data Management](/guides/data-management) to support stateful behavior.

Use `stores` property to capture parts of the request & use it in the response.

For example, consider the mock server receives multiple requests for different projects. Every time we need to pass the received project-id to the response body.

```js
const { mock } = require('pactum');
const { like } = require('pactum-matchers');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/projects/{id}',
    pathParams: {
      id: like('random-id')
    }
  },
  stores: {
    ProjectId: 'req.pathParams.id'
  },
  response: {
    status: 200,
    body: {
      id: '$S{ProjectId}'
    }
  }
});
```

- an HTTP **GET** to `/api/projects/1` will return a json body with id as `1`.
- an HTTP **GET** to `/api/projects/2` will return a json body with id as `2`.

For capturing other parts of the request,

- `req.pathParams` - Request Path Params
- `req.queryParams` - Request Query Params
- `req.headers` - Request Headers
- `req.body` - Request Body


## Remote API

Pactum allows us to add or remove interactions dynamically through the REST API. Once the server is started, interact with the following APIs to control the mock server.

```js
const { mock } = require('pactum');
mock.start(3000);
```

### Interactions

#### GET - /api/pactum/interactions

```shell
# Returns all interactions.
curl --location --request GET 'http://localhost:9393/api/pactum/interactions'
```

```shell
# Returns a single interaction.
curl --location --request GET 'http://localhost:9393/api/pactum/interactions?id=m1uh9'
```

#### POST - /api/pactum/interactions

```shell
# Adds multiple interactions to the server and returns array of interaction ids
curl --location --request POST 'http://localhost:9393/api/pactum/interactions' \
--header 'Content-Type: application/json' \
--data-raw '[{
    "request": {
        "method": "GET",
        "path": "/api/projects/2",
        "query": {
            "name": "fake"
        }
    },
    "response": {
        "status": 200,
        "headers": {
            "content-type": "application/json"
        },
        "body": {
            "id": 1,
            "name": "fake"
        }
    }
  }]'
```

#### DELETE - /api/pactum/interactions

```shell
# Removes a single interaction with id m1uh9
curl --location --request DELETE 'http://localhost:9393/api/pactum/interactions?id=m1uh9'
```

```shell
# Removes all interactions
curl --location --request DELETE 'http://localhost:9393/api/pactum/interactions'
```

### Using Remote Mock Server

For some reasons, you want the mock server to be independent of component tests & you still want the ability to control it remotely while running your api tests. This can be achieved through `useRemoteServer` method. While using remote server, all the existing functions will return promises.

#### Server

```js
// server.js
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

mock.start(3000);
```

#### Client

```js
const { mock } = require('pactum');
mock.useRemoteServer('http://localhost:3000');

// adds interaction through handler name
const id = await mock.addInteraction('get product');

// removes previously added interaction
await mock.removeInteraction(id);

// adds a custom interaction
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
```

## See Also

- [Interaction Handler](/api/handlers/addInteractionHandler)