# Integration Testing

Integration Testing is defined as a type of testing where software modules or components are logically integrated & tested.

When it comes to API Integration Testing, essentially it involves testing how multiple APIs work together. These tests doesn't necessarily build business workflows but tests integration points between single or multiple API endpoints.

> This documentation majorly focuses on the features offered by **pactum** to support integration testing by chaining multiple requests & passing data between them.

## Pre Requisite

- [API Testing](api-testing)
  - [Request Making](request-making)
  - [Response Validation](response-validation)


## Dependent HTTP Calls

API testing is naturally asynchronous, which can make tests complex when these tests need to be chained. **Pactum** allows us to return custom data from the response that can be passed to the next tests using [json-query](https://www.npmjs.com/package/json-query) expressions or custom handler functions.

You can pass data between tests by using either `returns` or `stores` methods.

### default

By default, entire response is returned by `await pactum.spec()` or `await pactum.spec().toss()`.

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const response = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200);
  const postID = response.json[0].id;
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .expectStatus(200);
});
```

### returns 

Use `returns` method to return custom response from the received response JSON.

#### json-query

`returns` method accepts a json-query expression as the first argument.

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const postID = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .returns('[0].id');
  await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts/{id}/comments')
    .withPathParams('id', postID)
    .expectStatus(200);
});
```

Use multiple `returns` to return an array of custom responses from the received JSON.

```js
const pactum = require('pactum');

it('first & second posts should have comments', async () => {
  const ids = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .returns('[0].id')
    .returns('[1].id');
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${ids[0]}/comments`)
    .expectStatus(200);
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${ids[1]}/comments`)
    .expectStatus(200);
});
```

#### AdHoc Handler

We can also use a custom handler function to return data. A *context* object is passed to the handler function which contains *req* (request) & *res* (response) objects. 

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const postID = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .returns((ctx) => { return ctx.res.json[0].id });
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .expectStatus(200);
});
```

#### Common Handler

We can also use a custom common handler function to return data & use it across tests. It accepts two arguments.

* *Fist Argument*: Name of the handler function used to refer it later in specs.
* *Second Argument*: A function that receives context object with request & response details. The returned value will be the output of `await pactum.spec()`. The function should be synchronous.

While using the common handlers, the name should be prefixed with `#`. It can be customized using `settings.setCaptureHandlerStrategy()`.

<!-- tabs:start -->

#### ** base.spec.js **

```js
const { addCaptureHandler } = require('pactum').handler;

before(() => {
  addCaptureHandler('first post id', (ctx) => {
    const res = ctx.res;
    return res.json[0].id;
  });
});
```

#### ** other.spec.js **

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const postID = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .returns('#first post id');
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .expectStatus(200);
});
```

<!-- tabs:end -->

### stores

Use `stores` method to save response data under [Data Management](data-management) which can be referenced later in specs. This method accepts two arguments.

* *FirstArgument*: Name used to refer it later in specs.
* *SecondArgument*: **json-query** that will fetch custom response data or it can be a capture handler.

To later refer the stored value, you need to use `$S{<name>}` or `$S{<name><json-query>}` as a place holder in the requests.

#### json-query

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .stores('FirstPostId', '[0].id');
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
    .withPathParams('id', '$S{FirstPostId}')
    .expectStatus(200);
});
```

We can also store complex parts of the response & later use them using `json-query`

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .stores('FirstPost', '[0]'); // store entire first item from the response array
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
    .withPathParams('id', '$S{FirstPost.id}') // access parts of the stored response
    .expectStatus(200);
});
```

#### Common Handler

We can also use a custom common handler function to return data & use it across tests. It accepts two arguments.

* *Fist Argument*: Name of the handler function used to refer it later in specs.
* *Second Argument*: A function that receives context object with request & response details. The returned value will be the output of `await pactum.spec()`. The function should be synchronous.

While using the common handlers, the name should be prefixed with `#`. It can be customized using `settings.setCaptureHandlerStrategy()`.

<!-- tabs:start -->

#### ** base.spec.js **

```js
const { addCaptureHandler } = require('pactum').handler;

before(() => {
  addCaptureHandler('GetFirstPostId', (ctx) => {
    const res = ctx.res;
    return res.json[0].id;
  });
});
```

#### ** other.spec.js **

```js
const pactum = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const postID = await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .stores('FirstPostId', '#GetFirstPostId');
  await pactum.spec()
    .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
    .withPathParams('id', '$S{FirstPostId}')
    .expectStatus(200);
});
```

<!-- tabs:end -->

## Retry Mechanism

Not all APIs perform simple CRUD operations. Some operations take time & for such scenarios **pactum** allows us to add custom retry handlers that will wait for specific conditions to happen before attempting to make assertions on the response. (*Make sure to update test runners default timeout*) 

Use `retry` to specify your retry strategy. It accepts options object as an argument. If the strategy function returns `false`, it will perform the request again.

### retryOptions

| Property  | Type       | Description                                |
| --------- | ---------- | ------------------------------------------ |
| count     | `number`   | number of times to retry - defaults to 3   |
| delay     | `number`   | delay between retries - defaults to 1000ms |
| strategy  | `function` | retry strategy function - returns boolean  |
| strategy  | `string`   | retry strategy handler name                | 

### AdHoc Handler

We can use a custom handler function to return a boolean. A *context* object is passed to the handler function which contains *req* (request) & *res* (response) objects. 

```js
await pactum.spec()
  .get('/some/async/operation')
  .retry({
    count: 2,
    delay: 2000,
    strategy: ({res}) => { return res.statusCode === 200 }
  })
  .expectStatus(200);
```

### Common Handler

We can also use a custom common handler function to return data & use it at different places.

```js
const pactum = require('pactum');
const handler = pactum.handler;

before(() => {
  handler.addRetryHandler('on 404', (ctx) => {
    const res = ctx.res;
    if (res.statusCode === 404) {
      return false;
    } else {
      return true;
    }
  });
});

it('should get posts', async () => {
  await pactum.spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .retry({
      strategy: 'on 404'
    })
    .expectStatus(200);
});
```


----

<a href="#/api-testing" >
  <img src="https://img.shields.io/badge/PREV-API%20Testing-orange" alt="API Testing" align="left" style="display: inline;" />
</a>
<a href="#/mock-server" >
  <img src="https://img.shields.io/badge/NEXT-Mock%20Server-blue" alt="Mock Server" align="right" style="display: inline;" />
</a>