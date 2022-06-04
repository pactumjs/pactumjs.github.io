# getInteraction

Get interactions from the mock server. 

## Syntax

```js
getInteraction(id)
```

## Usage

### ✅  Correct Usage

```js
mock.getInteraction('id');
```

```js
// using multiple interaction ids
mock.getInteraction(['id1', 'id2']);
```

## Arguments

#### > id (string|string[])

Interaction ids

## Examples

### Normal

```js
const { mock } = require('pactum');

const id = mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/hello'
  },
  response: {
    status: 200,
    body: 'Hello, 👋'
  }
});

const interaction = mock.getInteraction(id);
```