# Fuzz Testing

Fuzz testing is still in experimental phase. At the core, pactum uses [openapi-fuzzer-core](https://github.com/ASaiAnudeep/openapi-fuzzer-core) to generate requests & it partially supports swagger v2 open-api specification.

## Running Fuzz Tests

Running fuzz tests on a swagger endpoint.

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json');
```

> By default, a batch of 10 requests are sent in parallel.

> It expects every request responds with client error code. *( 400 >= statusCode < 500)*

### API

| Method                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `onSwagger`               | swagger json url                          |
| `withHeaders`             | additional headers to be passed           |
| `withBatchSize`           | no. of requests to be sent in parallel    |
| `useInteraction`          | mock interactions to be added             |
| `inspect`                 | prints request & response details         |
| `toss` (optional)         | runs all specs & returns a promise        |

#### onSwagger

It accepts a swagger JSON url.

> Swagger JSON url is usually mentioned under the title of a swagger page. For [PetStore](https://petstore.swagger.io/), the swagger JSON url is https://petstore.swagger.io/v2/swagger.json

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json');
```

#### withHeaders

Headers to be attached to each request.

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json')
  .withHeaders('Authorization', 'Basic abc');
```

#### withBatchSize

Controls the batch size of requests.

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json')
  .withBatchSize(20);
```

#### useInteraction

Adds mock interactions to the mock server. This is similar to `spec().useInteraction` used in [Component Testing](component-testing).

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json')
  .useInteraction('get users');
```

#### inspect

Prints request & response in terminal.

```js
await pactum.fuzz()
  .onSwagger('/api/swagger.json')
  .inspect();
```