# setDefaults

Set default configurations for the mock server.

## Syntax

```js
setDefaults(mockOptions)
```

## Usage

### ✅  Correct Usage

```js
// set port
mock.setDefaults({port: 3000});
```

```js
// set port and hostname
mock.setDefaults({port: 3000, host: '127.0.0.1'});
```

```js
// set port, hostname and https options - runs https mock server
await mock.setDefaults({port: 3001, host: '127.0.0.1', httpsOpts: {key: "key-path", cert: "cert-path"}})
```

::: tip NOTE
If the `httpsOpts` are provided, then mock server will run on https else it will run on http (default).
:::



## Arguments

`mockOptions` object

| Property                  | Description                                                                      |
| ------------------------  | -------------------------------------------------------------------------------  |
| port                      | mock server port [`number`] , default: `9393`                                    |
| host                      | host name (`localhost`, `127.0.0.1` etc) [`string`] default: `0.0.0.0`           |
| httsOpts                  | https key and certs [`object`], pass this parameter to run https mock server     |
| httsOpts.key              | path to `.key` file                                                              |
| httsOpts.cert             | path to `.crt` file                                                              |

## Examples

### Normal

```js
const pactum = require('pactum');
const mock = pactum.mock;

const mockOpts = {port: 3001, host: '127.0.0.1', httpsOpts: {key: "server.key", cert: "server.crt"}};
await mock.setDefaults(mockOpts)
await mock.start();
```

## See Also

- [Mock server](/guides/mock-server)
- [Mock server start](/api/mock/start)