# addInteraction

Add interactions to the mock server. 

## Syntax

```js
addInteraction(interaction)
addInteraction(interactions[])
addInteraction(handler-name)
addInteraction(handler-name, handler-options)
```

## Usage

### ✅  Correct Usage

```js
// using interaction object
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
```

```js
// using multiple interaction objects
mock.addInteraction([
  {
    request: {
      method: 'GET',
      path: '/api/hello'
    },
    response: {
      status: 200,
      body: 'Hello, 👋'
    }
  },
  {
    request: {
      method: 'GET',
      path: '/api/bye'
    },
    response: {
      status: 200,
      body: 'Bye, 👋'
    }
  }
]);
```

```js
// using interaction handler
mock.addInteraction('get hello');
```

```js
// using interaction handler with custom data
mock.addInteraction('get hello', { sign: '👋' });
```

## Arguments

#### > interaction (object | objects[])

[Interaction](/api/mock/interaction) object or objects.

#### > handler-name (string)

Name of the interaction handler to use. 

#### > handler-options (any)

Handler options could be anything. With the help of this options, we can make the interactions dynamic.

## Examples

### Normal

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

### Handlers

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

## See Also

- [Interaction](/api/mock/interaction)
- [Interaction Handlers](/api/handlers/addInteractionHandler)