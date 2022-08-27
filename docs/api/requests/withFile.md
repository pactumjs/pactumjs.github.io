---
tags:
  - file
  - upload files
---

# withFile

Uploads a file. *Internally it uses [withMultiPartFormData](/api/requests/withMultiPartFormData)*

> `content-type` header will be auto updated to `multipart/form-data`

## Syntax

```js
withFile(file-path)
withFile(file-path, file-options)
withFile(key, file-path)
withFile(key, file-path, file-options)
```

- `key` (**string**) - key of a FormData object. Defaults to `file`.
- `file-path` (**string**) - path of the file to upload.
- `file-options` ([**object**](https://github.com/pactumjs/form-data-lite/blob/main/src/index.d.ts#L51-L57)) - key/value pairs of a FormData object.

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