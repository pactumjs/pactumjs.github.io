# stores

`stores` method lets use save response data under [Data Management]() which allows to refer the saved data anywhere in the tests using special syntax - `$S{<variable>}`.

## Syntax

```js
stores(name, path);
stores(name, handler_name);
```

## Usage

### ✅  Correct Usage

```js
// stores single item
await spec()
  .get('/posts')
  .stores('FirstPostId', '[0].id');
```

```js
// stores multiple items in an array
const ids = await spec()
  .get('/posts')
  .stores('FirstPostId', '[0].id')
  .stores('SecondPostId', '[1].id');
```

```js
// using handlers
const postID = await spec()
  .get('/posts')
  .stores('FirstPostId', '#GetFirstPostId');
```

## Arguments

#### > name (string)

Name of the variable.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

If the `path` starts with one of the value, it has a special meaning

| path              | description                       |
|-------------------|-----------------------------------|
| `req.pathParams`  | Request path params               |
| `req.queryParams` | Request query params              |
| `req.headers`     | Request headers                   |
| `res.body`        | Response body *(this is default)* |
| `res.headers`     | Response headers                   |

#### > handler_name (string)

Name of the capture handler to use.

## Examples

### Store single value

```js
const { spec } = require('pactum');

await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .stores('FirstPostId', '[0].id');

await spec()
  .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
  .withPathParams('id', '$S{FirstPostId}')
  .expectStatus(200);
```

### Using Capture Handlers

```js
const { spec, handler } = require('pactum');

handler.addCaptureHandler('first post id', (ctx) => {
  return ctx.res.json[0].id;
});

await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .stores('FirstPostId', '#first post id');

await spec()
  .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
  .withPathParams('id', '$S{FirstPostId}')
  .expectStatus(200);
```

## See Also

- [Integration Testing](/guides/integration-testing)
- [Capture Handlers](/api/handlers/addCaptureHandler)