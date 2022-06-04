# wait

Waits after performing a request & before response validation mostly used in component testing.

## Syntax

```js
wait()
wait(spec)
wait(duration)
wait(duration, pollingInterval)
wait(handler)
wait(handler, handler-data)
```

## Usage

### ✅  Correct Usage

```js
// defaults duration to 1000ms with a polling interval of 100ms
await spec()
  .get('/api/users')
  .wait()
  .expectStatus(200)
```

```js
// duration to 3000ms with a polling interval of 100ms
await spec()
  .get('/api/users')
  .wait(3000)
  .expectStatus(200)
```

```js
// duration to 3000ms with a polling interval of 500ms
await spec()
  .get('/api/users')
  .wait(3000, 500)
  .expectStatus(200)
```

```js
// don't add await
const progress_spec = spec().get('/api/progress').expectStatus(200).retry();

// wait for spec to complete
await spec()
  .get('/api/users')
  .wait(progress_spec)
  .expectStatus(200)
```

```js
// using wait handler
await spec()
  .get('/api/users')
  .wait('handler-name')
  .expectStatus(200)
```

```js
// using wait handler and custom data
await spec()
  .get('/api/users')
  .wait('handler-name', { data: 'value' })
  .expectStatus(200)
```

## Examples

```js
const { spec } = require('pactum');

// waits for background interaction to be exercised
await spec()
  .useInteraction({
    background: true,
    request: {
      method: 'GET',
      path: '/api/progress'
    },
    response: {
      status: 200
    }
  })
  .get('/api/upload')
  .wait()
  .expectStatus(200)
```