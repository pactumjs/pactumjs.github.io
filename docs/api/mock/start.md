# start

Starts the mock server.

## Syntax

```js
start()
start(port)
start(port, host)
```

## Usage

### ✅  Correct Usage

```js
// starts on default port 9393
await mock.start();
```

```js
// starts on specified port
await mock.start(3000);
```

## Arguments

#### > port (number)

port number

#### > host (string)

host. defaults to localhost.

## Examples

```js
const { mock } = require('pactum');

await mock.start(3000);
```