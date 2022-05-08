# records

Records custom data for each spec. The recorded values will be available in `recorded` property of the context that is passed to `afterSpec` method.

## Syntax

```js
records(name, path)
records(name, handler_name)
records(name, data)
```

## Usage

### ✅  Correct Usage

```js
// record first post id from response
const postID = await spec()
  .get('/posts')
  .records('first_id', '[0].id');
```

```js
// using handlers
const postID = await spec()
  .get('/posts')
  .records('first_id', '#first post id');
```

```js
// some custom data
const postID = await spec()
  .get('/posts')
  .records('first_id', { id: 'a123' });
```

## Arguments

#### > name (string)

Unique name for the recorded data.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

If the `path` starts with one of the value, it has a special meaning

| path              | description                       |
|-------------------|-----------------------------------|
| `req.pathParams`  | Request path params               |
| `req.queryParams` | Request query params              |
| `req.headers`     | Request headers                   |
| `res.body`        | Response body *(this is default)* |
| `res.headers`     | Request headers                   |

#### > handler_name (string)

Name of the capture handler to use.

#### > data (string)

Custom data to be recorded.

## Examples

### Record a value

```js
const { spec, reporter } = require('pactum');

const custom_reporter = {
  afterSpec(spec) {
    // prints - { first_id: 1 }
    console.log(spec.recorded);
  }
}

reporter.add(custom_reporter);

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .records('first_id', '[0].id');
```

### Record custom object

```js
const { spec, reporter } = require('pactum');

const custom_reporter = {
  afterSpec(spec) {
    // prints - { message: { value: 'hi mom' } }
    console.log(spec.recorded);
  }
}

reporter.add(custom_reporter);

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .records('message', { value: 'hi mom' });
```

### Using Capture Handlers

```js
const { spec, handler, reporter } = require('pactum');

const custom_reporter = {
  afterSpec(spec) {
    // prints - { first_id: 1 }
    console.log(spec.recorded);
  }
}

reporter.add(custom_reporter);

handler.addCaptureHandler('first post id', (ctx) => {
  return ctx.res.json[0].id;
});

const postID = await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .records('first_id', '#first post id');
```

## See Also

- [Reporting](/guides/reporting)
- [Capture Handlers](/api/handlers/addCaptureHandler)