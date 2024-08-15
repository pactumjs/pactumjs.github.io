# events

The events module provides the `on` methods to listen to events from `pactum`.

Supported Events

- BEFORE_REQUEST
- AFTER_RESPONSE

## Syntax

```js
pactumEvents.on(event-type, callback);
```


## Usage

### ✅  Correct Usage

```js
pactumEvents.on(EVENT_TYPES.BEFORE_REQUEST, (ctx) => {
  console.log(ctx);
});
```

## Arguments

#### > event-type (string)

Event type to listen to.

#### > callback (function)

Callback function to call when the event is triggered.

## Examples

### Listening to events

```js
const { pactumEvents, EVENT_TYPES } = require('pactum').events;

pactumEvents.on(EVENT_TYPES.BEFORE_REQUEST, (cxt) => {
  console.log(cxt);
});
pactumEvents.on(EVENT_TYPES.AFTER_RESPONSE, (cxt) => {
  console.log(cxt.response.body);
});
```