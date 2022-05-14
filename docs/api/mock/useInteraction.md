# useInteraction

Add interactions to the mock server during component testing before the start of the test case. Once the test case execution is completed the interactions are **auto** removed. 


::: danger

If the interactions added through this method doesn't get exercised, the component tests will fail.

:::

## Syntax

```js
useInteraction(interaction)
useInteraction(interactions[])
useInteraction(handler-name)
useInteraction(handler-name, handler-options)
```

## Usage

### ✅  Correct Usage

```js
// using interaction object
await spec()
  .useInteraction({
    request: {
      method: 'GET',
      path: '/api/hello'
    },
    response: {
      status: 200,
      body: 'Hello, 👋'
    }
  })
  .get('/api/hello')
  .expectStatus(200);
```

```js
// using multiple interaction objects
await spec()
  .useInteraction([
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
  ])
  .get('/api/hello')
  .expectStatus(200);
```

```js
// using interaction handler
await spec()
  .useInteraction('get hello')
  .get('/api/hello')
  .expectStatus(200);
```

```js
// using interaction handler with custom data
await spec()
  .useInteraction('get hello', { sign: '👋' })
  .get('/api/hello')
  .expectStatus(200);
```

## Arguments

#### > interaction (object | objects[])

[Interaction](/api/mock/interaction) object or objects.

#### > handler-name (string)

Name of the interaction handler to use. 

#### > handler-options (any)

Handler options could be anything. With the help of this options, we can make the interactions dynamic.

## See Also

- [Component Testing](/guides/component-testing)
- [Interaction](/api/mock/interaction)