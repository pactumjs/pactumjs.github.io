# setAssertExpressionStrategy

Changes the way assert expressions are identified.

## Syntax

```js
setAssertExpressionStrategy(strategy)
```

## Usage

### ✅  Correct Usage

```js 
setAssertExpressionStrategy({ includes: '$$' });
```

## Arguments

#### > strategy (object)

strategy object.

## Examples

```js
const { spec, settings } = require('pactum');

settings.setAssertExpressionStrategy({ includes: '$$' });

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "id": "typeof $$ === 'string'",
      "first_name": "George",
      "last_name": "Bluth"
    }
  });
```

## See Also

- [expectJsonLike](/api/assertions/expectJsonLike)