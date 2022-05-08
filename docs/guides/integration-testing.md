# Integration Testing

Integration Testing is defined as a type of testing where software modules or components are logically integrated & tested.

When it comes to API Integration Testing, essentially it involves testing how multiple APIs work together. These tests doesn't necessarily build business workflows but tests integration points between single or multiple API endpoints.

## Dependent HTTP Calls

API testing is naturally asynchronous, which can make tests complex when these tests need to be chained. Passing data between tests is relatively very easy with pactum. 

### Default

By default, entire response body is returned by `await spec()` or `await spec().toss()`.

```js
const { spec } = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const response = await spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200);
  
  const postID = response.json[0].id;
  
  await spec()
    .get(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .expectStatus(200);
});
```

### Returns

Use `returns` method to return custom response from the received response JSON. It accepts a [json-query](https://www.npmjs.com/package/json-query) expression as the first argument.

```js
const { spec } = require('pactum');

it('should return all posts and first post should have comments', async () => {
  const postID = await spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .returns('[0].id');
    
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts/{id}/comments')
    .withPathParams('id', postID)
    .expectStatus(200);
});
```

### Stores

`stores` method lets use save response data under [Data Management](/guides/data-management) which allows to refer the saved data anywhere in the tests using special syntax - `$S{<variable>}`. This method accepts the `name` and [json-query](https://www.npmjs.com/package/json-query) as arguments.

```js
const { spec } = require('pactum');

it('should return all posts and first post should have comments', async () => {
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .stores('FirstPostId', '[0].id');
  
  await spec()
    .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
    .withPathParams('id', '$S{FirstPostId}')
    .expectStatus(200);
});
```

## Retry Mechanism

PactumJS has a built-in support for re-trying requests until the test passes or certain conditions has been met.

By default, `retry()` method will retry the request if the expectations fail. The default setting for the max retry-attempts is `1` with a poll interval of `1000 milliseconds`.

```js
const { spec } = require('pactum');

it('should return all posts', async () => {
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .retry();
});
```

## See Also

- [returns](/api/requests/returns)
- [stores](/api/requests/stores)
- [retry](/api/requests/retry)