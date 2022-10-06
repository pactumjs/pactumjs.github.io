# withBatchSize

Controls the batch size of requests.

## Syntax

```js
withBatchSize(count)
```

- `count?` (**number**) - no. of requests to send on a single batch. Defaults to `10`.

## Usage

### ✅  Correct Usage

```js
await fuzz()
  .onSwagger('/api/swagger.json')
  .withBatchSize(20);
```

## See Also

- [Fuzz Testing](/guides/fuzz-testing)