# setFormDataAdapter

Set custom form-data library

> Defaults to [form-data-lite](https://www.npmjs.com/package/form-data-lite)

## Usage

### ✅  Correct Usage

```js
setFormDataAdapter(form)
```

## Arguments

#### > form (object)

form-data library.

## Examples

### Normal

```js
const { settings } = require('pactum');
const FormData = require('form-data')

settings.setFormDataAdapter(FormData);
```