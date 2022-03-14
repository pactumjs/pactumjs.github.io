# withBody

Request body.

## Syntax

```js
withBody(payload)
withBody(options)
```

## Usage

#### ✅  Correct Usage

```js
// string (json)
await spec()
  .post('/api/users')
  .withBody(`
    {
      "name": "morpheus",
      "job": "leader"
    }
  `)
  .expectStatus(201);

// string (xml)
await spec()
  .post('/api/users')
  .withBody(`
    <?xml version="1.0" encoding="utf-8"?>
    <Request>
      <Login>login</Login>
      <Password>password</Password>
    </Request>
  `)
  .expectStatus(201);

// upload files without using form-data
await spec()
  .post('/anything')
  .withBody({
    file: "path/to/file"
  })
  .expectStatus(201);
```

#### ❗ Incorrect Usage

```js
// prefer using 'withJson' method for json payloads
await spec()
  .post('/api/users')
  .withBody({
    "name": "morpheus",
    "job": "leader"
  })
  .expectStatus(201);
```

## Arguments

#### > payload (any)

Payload could be anything.

#### > options (object)

| property | type   | description                |
|----------|--------|----------------------------|
| file     | string | path to the file to upload |

## Examples

#### JSON 

```js
const { spec } = require('pactum');

await spec()
  .post('https://reqres.in/api/users')
  .withBody(`
    {
      "name": "morpheus",
      "job": "leader"
    }
  `)
  .expectStatus(201);
```

#### XML 

```js
const { spec } = require('pactum');

await spec()
  .post('https://reqbin.com/echo/post/xml')
  .withBody(`
    <?xml version="1.0" encoding="utf-8"?>
    <Request>
      <Login>login</Login>
      <Password>password</Password>
    </Request>
  `)
  .expectStatus(200);
```

#### File 

```js
const { spec } = require('pactum');

await spec()
  .post('https://httpbin.org/anything')
  .withBody({
    file: "path/to/file"
  })
  .expectStatus(200);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [withJson](reference/withJson)