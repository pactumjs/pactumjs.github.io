# removeDefaultHeaders

use to remove default headers for all the requests.

## Syntax

```js
removeDefaultHeaders()
removeDefaultHeaders(key)
```

## Usage

### ✅  Correct Usage

```js
// without specifying any 'key' will remove all the default headers
request.removeDefaultHeaders()
```

```js
// by specifying 'key' will remove only the specific default header
request.removeDefaultHeaders('Authorization')
```

## Arguments

#### > key (string)

header key


## Examples

### Normal

```js
const { spec, request } = require('pactum');

request.setDefaultHeaders({ 'key': 'value', 'key1': 'value1' });
request.removeDefaultHeaders('key');

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```