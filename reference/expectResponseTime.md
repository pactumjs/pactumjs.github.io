# expectResponseTime

Assert response time less than the specified milliseconds

## Syntax

```js
expectResponseTime(milliseconds)
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .get('api/health')
  .expectResponseTime(100);
```

## Arguments

#### > milliseconds (number)

Expected response time.