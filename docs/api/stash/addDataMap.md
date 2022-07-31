# addDataMap

Adds a data map which can be used across pactum tests and mock server.

## Syntax

```js
addDataMap(maps)
```

## Usage

### ✅  Correct Usage

```js
stash.addDataMap({
  'User': {
    "name": "morpheus",
    "job": "leader"
  }
});
```

## Arguments

#### > maps *(object)*

A maps object.

## Examples

```js
const { stash, spec } = require('pactum');

stash.addDataMap({
  'User': {
    "name": "morpheus",
    "job": "leader"
  }
});

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    "name": "$M{User.name}",
    "job": "$M{User.job}"
  });
```