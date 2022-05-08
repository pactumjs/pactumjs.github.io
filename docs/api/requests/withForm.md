---
tags:
  - form data
---

# withForm

It provides a easy way to construct a set of key/value pairs representing form fields and their values.

> `content-type` header will be auto updated to `application/x-www-form-urlencoded`

## Syntax

```js
withForm(form-data)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .post('/forms/posts')
  .withForm({
    "user": 'jon',
    "password": 'abc'
  })
  .expectStatus(201);
```

## Arguments

#### > form-data (object)

Key value form fields.

## Examples

```js 
const { spec } = require('pactum');

await spec()
  .post('https://httpbin.org/forms/posts')
  .withForm({
    "user": 'jon',
    "password": 'abc'
  })
  .expectStatus(201);
```

## Notes

- Under the hood, PactumJS uses [phin.form](https://ethanent.github.io/phin/global.html)

## See Also

- [withFile](/api/requests/withFile)
- [withMultiPartFormData](/api/requests/withMultiPartFormData)