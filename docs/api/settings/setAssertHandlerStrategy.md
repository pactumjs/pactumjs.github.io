# setAssertHandlerStrategy

Changes the way assert handlers are identified.

## Syntax

```js
setAssertHandlerStrategy(strategy)
```

## Usage

### ✅  Correct Usage

```js 
setAssertHandlerStrategy({ starts: '##' });
```

## Arguments

#### > strategy (object)

strategy object.

## Examples

```js
const { handler, spec, settings } = require('pactum');

settings.setAssertHandlerStrategy({ starts: '##' });

handler.addAssertHandler('number', (ctx) => {
  return typeof ctx.data === 'number';
});

await spec()
  .get('https://randomuser.me/api')
  .expectJsonLike({
    "results": [
      {
        "dob": {
          "age": '##number'
        }
      }
    ]
  });
```

## See Also

- [Assert Handlers](/api/handlers/addAssertHandler)
- [expectJsonLike](/api/assertions/expectJsonLike)