# getDataMap

Gets the data map.

## Syntax

```js
getDataMap(maps)
```

## Usage

### ✅  Correct Usage

```js
stash.getDataMap();
```

## Examples

```js
const { stash } = require('pactum');

stash.addDataMap({
  'User': {
    "name": "morpheus",
    "job": "leader"
  }
});

const data_map = stash.getDataMap();
```