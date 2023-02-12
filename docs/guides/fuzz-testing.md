# Fuzz Testing

Fuzz testing or fuzzing is an automated software testing method that injects invalid, malformed, or unexpected inputs into a system to reveal software defects and vulnerabilities.

::: danger NOTE
It is still in experimental phase.
:::

At the core, pactum uses [openapi-fuzzer-core](https://github.com/ASaiAnudeep/openapi-fuzzer-core) to generate requests & it partially supports swagger v2 open-api specification.


## Running Fuzz Tests

Running fuzz tests on a swagger endpoint.

```js
const { fuzz } = require('pactum');

await fuzz()
  .onSwagger('/api/swagger.json');
```

## See Also

- [fuzz](/api/fuzz/fuzz)