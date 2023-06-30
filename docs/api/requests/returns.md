# returns

Returns custom response from the received response.

## Syntax

```js
returns(path);
returns(custom_function);
returns(handler_name);
```

## Usage

### ✅  Correct Usage

```js
// returns single item
const postID = await spec()
  .get('/posts')
  .returns('[0].id');
```

```js
// returns multiple items in an array
const ids = await spec()
  .get('/posts')
  .returns('[0].id')
  .returns('[1].id');
```

```js
// custom callback function
const postID = await spec()
  .get('/posts')
  .returns((ctx) => { return ctx.res.json[0].id });
```

```js
// using handlers
const postID = await spec()
  .get('/posts')
  .returns('#first post id');
```

## Arguments

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

If the `path` starts with one of the value, it has a special meaning

| path              | description                       |
|-------------------|-----------------------------------|
| `req.pathParams`  | Request path params               |
| `req.queryParams` | Request query params              |
| `req.headers`     | Request headers                   |
| `req.cookies`     | Request cookies                   |
| `res.body`        | Response body *(this is default)* |
| `res.headers`     | Response headers                  |
| `res.cookies`     | Response cookies                  |

#### > custom_function (function)

A callback function to return a custom reply. A context object is passed as an argument that has `req` *(request)*, `res` *(response)* and `data` properties.

#### > handler_name (string)

Name of the capture handler to use.

## Examples

### Return single value

```js
const { spec } = require('pactum');

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('[0].id');

await spec()
  .get('http://jsonplaceholder.typicode.com/posts/{id}/comments')
  .withPathParams('id', postID)
  .expectStatus(200);
```

### Return multiple values

```js
const { spec } = require('pactum');

const ids = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('[0].id')
  .returns('[1].id');

await spec()
  .get(`http://jsonplaceholder.typicode.com/posts/${ids[0]}/comments`)
  .expectStatus(200);

await spec()
  .get(`http://jsonplaceholder.typicode.com/posts/${ids[1]}/comments`)
  .expectStatus(200);
```

### Return response headers

By default, the json path targets the response body. `res.headers` is a special syntax to fetch response headers.

```js
const { spec } = require('pactum');

const headers = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('res.headers');
```

### Custom Function

```js
const { spec } = require('pactum');

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns((ctx) => { return ctx.res.json[0].id });
```

### Using Capture Handlers

```js
const { spec, handler } = require('pactum');

handler.addCaptureHandler('first post id', (ctx) => {
  return ctx.res.json[0].id;
});

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('#first post id');
```

## See Also

- [Integration Testing](/guides/integration-testing)
- [Capture Handlers](/api/handlers/addCaptureHandler)