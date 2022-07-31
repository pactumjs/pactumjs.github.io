# getDataTemplate

Gets the data template.

## Syntax

```js
getDataTemplate(maps)
```

## Usage

### ✅  Correct Usage

```js
stash.getDataTemplate();
```

## Examples

```js
const { stash } = require('pactum');

stash.addDataTemplate({
  'User': {
    "name": "morpheus",
    "job": "leader"
  },
  'Address': {
    "street": "554",
    "city": "NY"
  }
});

const data_templates = stash.getDataTemplate();
```