---
tags:
  - wait
  - delay
---

# sleep

Sleep for a number of milliseconds.

## Syntax

```js
sleep(milliseconds)
```

## Usage

### ✅  Correct Usage

```js
await sleep(1000); // sleeps for 1 second
```

```js
// sleeps for 1 second after running a spec 
await spec()
  .get('/path')
  .expectStatus(200)
  .sleep(1000); 
```

```js
// Using handler
await spec('get users')
    .expectStatus(200)
    .sleep(1000);
```

## Arguments

#### > milliseconds (number)

Number of milliseconds to sleep.


## Examples

```js
const { sleep } = require('pactum');

await sleep(100);
```

## Using Spec

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/path')
  .expectStatus(200)
  .sleep(1000); 
```

## Using Handler

```js
const { spec , handler} = require('pactum');

handler.addSpecHandler('get users', (ctx) => {
  const { spec } = ctx;
  spec.get('https://reqres.in/api/users');
});

await spec('get users')
    .expectStatus(200)
    .sleep(1000); 
```

## Yields

Returns a promise that resolves after a given number of milliseconds.