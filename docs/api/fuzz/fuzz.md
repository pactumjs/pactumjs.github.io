# fuzz

Creates an instance to fuzz object that supports to build invalid requests.

## Syntax

```js
fuzz()
```

## API

| Method                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `onSwagger`               | swagger json url                          |
| `withHeaders`             | additional headers to be passed           |
| `withBatchSize`           | no. of requests to be sent in parallel    |
| `useInteraction`          | mock interactions to be added             |
| `inspect`                 | prints request & response details         |
| `toss` (optional)         | runs all specs & returns a promise        |

## Usage

### ✅  Correct Usage

```js
// url to the swagger json
await fuzz()
  .onSwagger('/api/swagger.json');
```

```js
// with authentication
await fuzz()
  .onSwagger('/api/swagger.json')
  .withHeaders('Authorization', 'Basic abc');
```

## Notes

Under the hood, it uses [openapi-fuzzer-core](https://github.com/ASaiAnudeep/openapi-fuzzer-core) to generate requests & it partially supports swagger v2 open-api specification.

## See Also

- [Fuzz Testing](/guides/fuzz-testing)