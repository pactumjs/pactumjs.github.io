# retry

Retry an HTTP request until certain conditions are met.

## Syntax

```js
retry()
retry(count)
retry(count, delay)
retry(options)
```

## Usage

#### ✅  Correct Usage

```js
// retry on expectations
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry();

// retry with custom count
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry(1);

// retry with custom count and delay
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry(1, 500);

// retry with options
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry({
    count: 2,
    delay: 2000,
    strategy: ({res}) => { return res.statusCode === 200 }
  });

// retry with retry-handler
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry({
    strategy: 'on 404'
  });

// retry with status code
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry({
    status: 500
  });

// retry with multiple status codes
await spec()
  .get('/api/users')
  .expectStatus(200)
  .retry({
    status: [502, 503]
  });
```

## Arguments

#### > count (number)

Max retry attempts.


#### > delay (number)

Delay between retry attempts in milliseconds.

#### > options (number)

Retry options.

| Property  | Type       | Description                                |
| --------- | ---------- | ------------------------------------------ |
| count     | `number`   | number of times to retry - defaults to 1   |
| delay     | `number`   | delay between retries - defaults to 1000ms |
| strategy  | `function` | retry strategy function - returns boolean  |
| strategy  | `string`   | retry strategy handler name                |
| status    | `number`   | retry for the given status code            |
| status    | `number[]` | retry for the given status codes           |


## Examples

### Using Retry Handlers

```js
const { spec, handler } = require('pactum');

handler.addRetryHandler('on 404', (ctx) => {
  const res = ctx.res;
  if (res.statusCode === 404) {
    return false;
  } else {
    return true;
  }
});

await spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .retry({
    strategy: 'on 404'
  })
  .expectStatus(200);
```