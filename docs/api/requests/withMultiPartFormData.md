---
tags:
  - multipart
  - form data
  - files
---

# withMultiPartFormData

multipart/form-data is one of the value of enctype attribute, which is used in form element that have a file upload. multi-part means form data divides into multiple parts and send to server.

> `content-type` header will be auto updated to `multipart/form-data`

## Syntax

```js
withMultiPartFormData(form-data)
withMultiPartFormData(key, value)
withMultiPartFormData(key, value, form-options)
```

## Usage

### ✅  Correct Usage

```js
// using form-data
const FormData = require('form-data-lite');
const form = new FormData();
form.append('file', fs.readFileSync('a.txt'), { filename: 'a.txt' });

await spec()
  .post('/forms/posts')
  .withMultiPartFormData(form)
  .expectStatus(201);
```

```js
// pass key value pairs which uses 'form-data-lite' in the background
await spec()
  .post('/forms/posts')
  .withMultiPartFormData('file', fs.readFileSync('a.txt'), { filename: 'a.txt' })
  .expectStatus(201);
```

## Arguments

#### > form-data (object)

Instance of [form-data-lite](https://www.npmjs.com/package/form-data-lite) object.

#### > key (string)

Key of the form field.

#### > value (any)

Value of the form field.

#### > form-options (object)

Custom form options - [see](https://github.com/form-data/form-data/blob/master/index.d.ts#L51)

## Examples

### Using Form Data object

```js 
const { spec } = require('pactum');

const FormData = require('form-data-lite');
const form = new FormData();
form.append('file', fs.readFileSync('a.txt'), { filename: 'a.txt' });

await spec()
  .post('https://httpbin.org/forms/posts')
  .withMultiPartFormData(form)
  .expectStatus(201);
```

### Using Key Value Pairs

```js 
const { spec } = require('pactum');

await spec()
  .post('https://httpbin.org/forms/posts')
  .withMultiPartFormData('file', fs.readFileSync('a.txt'), { filename: 'a.txt' })
  .expectStatus(201);
```

## Notes

- Under the hood, PactumJS uses [form-data-lite](https://www.npmjs.com/package/form-data-lite)

::: danger
From **v3.1.0**, pactum uses [form-data-lite](https://www.npmjs.com/package/form-data-lite) that has just the standard mime-types. (*which reduces the overall package size*). If you have a custom file type to be uploaded, you need to mention the content-type of the file explicitly.
:::