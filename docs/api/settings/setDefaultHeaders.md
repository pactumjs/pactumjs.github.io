# setDefaultHeaders

set default headers for all the requests.

## Syntax

```js
setDefaultHeaders(key, value)
setDefaultHeaders(pair)
```

## Usage

### ✅  Correct Usage

```js
// key-value pair
request.setDefaultHeaders('Authorization', 'Basic xAfk')
```

```js
// key-value pair object
request.setDefaultHeaders({ 'Authorization': 'Basic xAfk' })
```

## Arguments

#### > key (string)

header key

#### > value (string)

header value

#### > pair (object)

header key-value pair object

## Examples

### Normal

```js
const { spec, request } = require('pactum');

request.setDefaultHeaders({ 'key': 'value' });

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```