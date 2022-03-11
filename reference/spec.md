# spec

Builds a single request and respective expectations. In general, it represents a single API call.

## Syntax

```js
spec()
spec(handler-name)
spec(handler-name, handler-options)
```

## Usage

##### ✅  Correct Usage

```js
// always use 'await' statement 
await spec()
  .get('<url>')
  .expectStatus(200);

// or invoke the 'toss' method at the end to return a promise 
spec()
  .get('<url>')
  .expectStatus(200)
  .toss().then().catch();

// use without chaining method calls
const sp = spec();
sp.get('<url>');
sp.expectStatus(200);
await sp.toss(); // runs the test

// using handler
await spec('get user')
  .expectJson('data.first_name', 'George');

// using handler and custom handler-options
await spec('get user', 2)
  .expectJson('data.first_name', 'Janet');
```

##### ❗ Incorrect Usage

```js
const { spec } = require('pactum');

// will not make an api call as there is no 'await' statement or 'toss' method
spec().get('url').expectStatus(200);
```

## Arguments

#### > handler-name (string)

Name of the spec handler to use. 

!> Handlers should be defined before the usage. Else it will throw an error.

#### > handler-options (any)

Handler options could be anything. With the help of this options, we can make the spec handler dynamic.

## Examples

### Normal

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectStatus(200);
```

### Handlers

```js
const { spec, handler } = require('pactum');

handler.addSpecHandler('get user', () => {
  const { spec, data } = ctx;
  spec.get('https://reqres.in/api/users/{id}');
  spec.withPathParams('id', data || 1)
  spec.expectStatus(200);
});

await spec('get user').expectJson('data.first_name', 'George');
await spec('get user', 2).expectJson('data.first_name', 'Janet');
```