# Settings

Customize PactumJS behavior.

## List of Settings

| Method                        | Description                           |
| ----------------------------  | ------------------------------------  |
| `setLogLevel`                 | set log level                         |
| `setLogger`                   | set custom logger                     |
| `setJsonLikeAdapter`          | set custom json like validator        |
| `setJsonMatchAdapter`         | set custom json match validator       |
| `setJsonSchemaAdapter`        | set custom json schema validator      |
| `setFormDataAdapter`          | set custom form data                  |
| `setAssertHandlerStrategy`    | set custom assert handler strategy    |
| `setAssertExpressionStrategy` | set custom assert expression strategy |
| `setCaptureHandlerStrategy`   | set custom capture handler strategy   |
| `setSnapshotDirectoryPath`    | set custom snapshot directory path    |
| `setReporterAutoRun`          | enable/disable reporter auto run      |
| `setRequestDefaultRetryCount` | set default retry count               |
| `setRequestDefaultRetryDelay` | set default retry delay               |

## API

### setLogLevel

Sets the log level of PactumJS. The default log level is `INFO`.

Available Log Levels - `VERBOSE`, `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `SILENT`

```js
const { settings } = require('pactum');

settings.setLogLevel('ERROR');
```

### setLogger

By default PactumJS uses a custom inbuilt logger. PactumJS uses a plugin system which makes it easily customizable and extendable. Use this method to update the inbuilt logger.

```js
const { settings } = require('pactum');

const myCustomLogger = {
  trace(messages) {   /* custom code */   },
  debug(messages) {   /* custom code */   },
  info(messages) {    /* custom code */   },
  warn(messages) {    /* custom code */   },
  error(messages) {   /* custom code */   }
};

settings.setLogger(myCustomLogger);
```

### setAssertHandlerStrategy

Assert Handlers helps us to reuse the custom JavaScript assertion code on a JSON. With this we can easily extend the capabilities of `expectJsonLike` to solve complex assertions.

!> String starting with **#** will be automatically treated as a Assert Handler. 

We can change the default value `#` to some other string based on your usage. *Be cautious that all the strings starting with the new value will be treated as assert handlers*.

```js
const pactum = require('pactum');
const { settings } = pactum;

settings.setAssertHandlerStrategy({ starts: '$#' });

await pactum.spec()
  .get('/api/users')
    .expectJsonLike([
    {
      id: '$#handlerName:arg1,arg2',
      name: 'jon'
    }
  ]);
```

### setAssertExpressionStrategy

Assert Expressions helps to run custom JavaScript code on a JSON that performs user defined assertions. 

!> String containing **$V** will be automatically treated as a Assert Expression.

We can change the default value `$V` to some other string based on your usage. *Be cautious that all the strings containing the new value will be treated as assert expressions and pactum will try to evaluate it as a javascript code*.

```js
const pactum = require('pactum');
const { settings } = pactum;
settings.setAssertExpressionStrategy({ includes: '$Z' });

await pactum.spec()
  .get('/api/users')
  .expectJsonLike([
    {
      name: 'jon',
      age: '$Z > 30' // age should be greater than 30 
    }
  ]);
```

### setCaptureHandlerStrategy

Capture handlers helps us to capture custom data from the HTTP response and helps us to act upon it.

```js
const pactum = require('pactum');
const { settings, handler } = pactum;

settings.setCaptureHandlerStrategy({ starts: '$#' });

handler.addCaptureHandler('first post id', (ctx) => {
  const res = ctx.res;
  return res.json[0].id;
});

const postID = await pactum.spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('$#first post id');
```

### setSnapshotDirectoryPath

Snapshot testing is a type of **output comparison** which will be very useful whenever we want to make sure our API does not change unexpectedly.

Using the feature, will result in saving outputs in a local file system. By default it will save in `./pactum/snapshots` directory. `setSnapshotDirectoryPath` function helps us to customize the location.

### setReporterAutoRun

The reporting structure for [Breaking](api-testing?id=testing-style) testing style differs as the `spec` runs in multiple steps. To have a proper reporting, we need to run additional methods.

- Run `settings.setReporterAutoRun(false)` before test execution.
- Run `spec.end()` after each test case.
- Use `spec.response()` for assertions.

### setRequestDefaultRetryCount

Updates default request retry count for retry mechanism. Default retry count is `1`.

```js
const { settings } = require('pactum');

settings.setRequestDefaultRetryCount(3);
```

### setRequestDefaultRetryDelay

Updates default request retry delay for retry mechanism. Default retry delay is `1000` milliseconds.

```js
const { settings } = require('pactum');

settings.setRequestDefaultRetryDelay(2000);
```

### setFormDataAdapter

This method helps to use custom form-data library.

From **v3.1.0**, pactum uses [form-data-lite](https://www.npmjs.com/package/form-data-lite) that has just the standard mime-types. (*this reduces the overall package size*).

If you have a custom file type to be uploaded, you need to mention the content-type of the file explicitly.

```js
await pactum.spec()
  .post('https://httpbin.org/forms/posts')
  .withFile('./path/to/the/file'), { contentType: 'text/plain' })
  .expectStatus(201);
```

To avoid mentioning content type, you can update the default **form-data-lite** package to the previous **form-data** package.

```js
const { settings } = require('pactum');
const FormData = require('form-data');

settings.setFormDataAdapter({
  get() {
    return FormData;
  }
});
```