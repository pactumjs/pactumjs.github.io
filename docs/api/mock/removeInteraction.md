# removeInteraction

Remove interactions from the mock server. 

## Syntax

```js
removeInteraction(id)
```

## Usage

### ✅  Correct Usage

```js
mock.removeInteraction('id');
```

```js
// using multiple interaction ids
mock.removeInteraction(['id1', 'id2']);
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

mock.removeInteraction(id);
```