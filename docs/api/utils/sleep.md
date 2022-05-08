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

## Arguments

#### > milliseconds (number)

Number of milliseconds to sleep.


## Examples

```js
const { sleep } = require('pactum');

await sleep(100);
```

## Yields

Returns a promise that resolves after a given number of milliseconds.