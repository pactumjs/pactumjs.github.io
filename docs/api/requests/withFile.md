---
tags:
  - file
  - upload files
---

# withFile

Upload files.

> `content-type` header will be auto updated to `multipart/form-data`

## Syntax

```js
withFile(file-path)
withFile(file-path, file-options)
withFile(key, file-path)
withFile(key, file-path, file-options)
```

## Usage

### ✅  Correct Usage

```js
// just path to the file
await spec()
  .post('/forms/posts')
  .withFile('./path/to/the/file')
  .expectStatus(201);
```

```js
// file options
await spec()
  .post('/forms/posts')
  .withFile('./path/to/the/file', { contentType: 'image/png' })
  .expectStatus(201);
```

```js
// file options with custom key
await spec()
  .post('/forms/posts')
  .withFile('custom-key', './path/to/the/file', { contentType: 'image/png' })
  .expectStatus(201);
```

## Arguments

#### > file-path (string)

Path of the file to upload.

#### > key (string)

key of a FormData object. It defaults to `file`.

#### > file-options (object)

key/value pairs of a FormData object.

## Examples

#### Normal File Upload

```js
const { spec } = require('pactum');

await spec()
  .post('https://httpbin.org/forms/posts')
  .withFile('./path/to/the/file')
  .expectStatus(201);
```

#### Custom File Options

```js
const { spec } = require('pactum');

await spec()
  .post('https://httpbin.org/forms/posts')
  .withFile('file-image', './path/to/the/file', { contentType: 'image/png' })
  .expectStatus(201);
```

## Notes

Under the hood, it uses multi-part [form-data-lite](https://www.npmjs.com/package/form-data-lite).

::: danger
From **v3.1.0**, pactum uses [form-data-lite](https://www.npmjs.com/package/form-data-lite) that has just the standard mime-types. (*which reduces the overall package size*). If you have a custom file type to be uploaded, you need to mention the content-type of the file explicitly.
:::