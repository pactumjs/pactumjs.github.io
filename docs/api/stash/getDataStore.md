# getDataStore

Gets data store.

## Syntax

```js
getDataStore()
```

## Usage

### ✅  Correct Usage

```js
stash.getDataStore();
```

## Examples

```js
const { stash, spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .stores('Email', 'data.email');

const data_store = stash.getDataStore();
```