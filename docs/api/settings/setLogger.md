# setLogger

Updates the builtin logger.

## Syntax

```js
setLogger(logger)
```

## Usage

### ✅  Correct Usage

```js
setLogger({
  trace(messages) {   /* custom code */   },
  debug(messages) {   /* custom code */   },
  info(messages) {    /* custom code */   },
  warn(messages) {    /* custom code */   },
  error(messages) {   /* custom code */   }
})
```

## Arguments

#### > logger (object)

logger object 

## Examples

```js
const { settings } = require('pactum');

const myCustomLogger = {
  trace(messages) {   /* custom code */   },
  debug(messages) {   /* custom code */   },
  info(messages) {    /* custom code */   },
  warn(messages) {    /* custom code */   },
  error(messages) {   /* custom code */   }
};

settings.setLogger(myCustomLogger);
```