# Data Management

Data Management is one of the most powerful features of **PactumJS**. It allows us to logically group, reuse common date across all tests.

## Introduction

Test data managements plays a critical role in maintaining you automation tests suites healthy. As the functionality of the application grows, the scope of the testing grows with it. At one point, managing data becomes complex especially in API Testing.

### Example

Assume you have numerous test cases around adding a new user to your system. To add a new user, you make a HTTP **POST** request with the following JSON to `/api/users` endpoint.

```json
{
  "FirstName": "Jon",
  "LastName": "Snow",
  "Age": 26
}
```

Now let's assume, your application no longer accepts the above JSON. It needs a new field `Gender` in the JSON. It will be tedious to update all your existing test cases to add the new field.

```json
{
  "FirstName": "Jon",
  "LastName": "Snow",
  "Age": 26,
  "Gender": "male"
}
```

To solve these kind of problems, **pactum** comes with a concept of **Data Templates**, **Data Maps**, **Data Functions** and **Data Stores**  to manage your test data. It helps us to re-use data across tests.

## Data Template

A **Data Template** is a standard format for a particular resource. Once a template is defined, it can be used across all the tests to perform a request.

Use `stash.addDataTemplate` to add a data template. To use the template in the tests, use `@DATA:TEMPLATE@` as key & the name of the template as value.

```js
const { stash, spec } = require('pactum');

stash.addDataTemplate({
  'User': {
    "name": "morpheus",
    "job": "leader"
  }
});

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  });
```

This library internally replaces the json payload with the data template value.

The exact resource is not going to be used across every test. Every test might need specific values. This library supports extending the data templates by overriding specific values. This allows tests to be customized as much as you'd like when using templates.

Use `@OVERRIDES@` to override or add new fields into an existing template.

```js {20-22}
const { stash, spec } = require('pactum');

stash.addDataTemplate({
  'User': {
    "name": "morpheus",
    "job": "leader"
  }
});

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  });

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
    '@OVERRIDES@': {
      'job': 'member'
    }
  });
```

::: danger
Templates can also reference other templates. Be cautious not to create circular dependencies.
:::

An example of usage of data templates inside other data templates.

```js
const { stash, spec } = require('pactum');

stash.addDataTemplate({
  'Address': {
    "street": "society road",
    "pin": 500500
  }
});

stash.addDataTemplate({
  'User': {
    "name": "morpheus",
    "job": "leader",
    "address": {
      "@DATA:TEMPLATE@": "Address"
    }
  }
});

await spec()
  .post('https://httpbin.org/anything')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  });
```

## Data Map

A Data Map is a collection of data that can be referenced in data templates or tests. The major differences between a data template & a data map are

- When a data template is used, the current object will be replaced.
- When a data map is used, the current object's property value will be replaced.

Use `stash.addDataMap` to add a data map. To use the map in the tests or in the template, use `$M{<json-query>}` as the value.

```js
const { stash } = require('pactum');

stash.addDataMap({
  'User': {
    'FirstName': 'Jon',
    'LastName': 'Snow',
    'Country': 'North'
  }
});
stash.addDataTemplate({
  'User:New': {
    "FirstName": "$M{User.FirstName}",
    "LastName": "$M{User.LastName}",
    "FullName": "$M{User.FirstName} $M{User.LastName}",
    "Age": 26,
    "Gender": "male",
    "House": "Castle Black"
  }
});
```

::: danger
It's perfectly legal to refer other data maps from a data map. Be cautious not to create circular dependencies
:::

An example of usage of data maps inside other data maps.

```js
const { stash } = require('pactum');

stash.addDataMap({
  'User': {
    'Default': {
      'FirstName': '$M{User.FirstNames[0]}',
      'LastName': '$M{User.LastNames[0]}',
      'Country': 'North'
    },
    'FirstNames': [ 'Jon', 'Ned', 'Ary' ],
    'LastNames': [ 'Stark', 'Sand', 'Snow' ]
  }
});
```

## Data Function

Data Functions can ease up your life when working with dynamic values. A Data Function is a custom data handler function that returns some sort of data that can be referenced later.

Use `handler.addDataFuncHandler` to add a custom data function handler. To use the data function in the tests or in the template, use `$F{<handler-name>}`.

```js
const { handler, spec } = require('pactum');

handler.addDataFuncHandler('GetTimeStamp', () => {
  return Date.now();
});
handler.addDataFuncHandler('GetAuthToken', () => {
  return 'Basic some-token';
});

await spec()
  .post('/api/order')
  .withHeaders('Authorization', '$F{GetAuthToken}')
  .withJson({
    'Item': 'Sword',
    'CreatedAt': '$F{GetTimeStamp}'
  });
```

Data functions also accepts custom data as arguments in the form of array. To pass data use comma separated values after handler name `$F{<handler-name>:<arg1>,<arg2>}`.

```js
const { handler, spec } = require('pactum');

handler.addDataFuncHandler('GetFormattedDate', (ctx) => {
  const fmt = ctx.args[0];
  return moment.format(fmt);
});

handler.addDataFuncHandler('GetSum', (ctx) => {
  const a = parseInt(ctx.args[0]);
  const b = parseInt(ctx.args[1]);
  return a + b;
});

await spec()
  .post('/api/order')
  .withJson({
    'Item': 'Sword',
    'CreatedAt': '$F{GetFormattedDate:dddd}',
    'Qty': '$F{GetSum:5,10}'
  });
```

## Data Store

A data store helps us save custom response data that is received while running API tests. This comes in handy while running integration or e2e API testing to pass data between tests.

This method accepts `name` and `json-query` as arguments.

```js
const { spec } = require('pactum');

it('should return all posts and first post should have comments', async () => {
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .stores('FirstPostId', '[0].id')
    .stores('SecondPostId', '[1].id');
  
  await spec()
    .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
    .withPathParams('id', '$S{FirstPostId}')
    .expectStatus(200);
});
```

If the `json-query` starts with one of the value, it has a special meaning

| path              | description                       |
|-------------------|-----------------------------------|
| `req.pathParams`  | Request path params               |
| `req.queryParams` | Request query params              |
| `req.headers`     | Request headers                   |
| `res.body`        | Response body *(this is default)* |
| `res.headers`     | Request headers                   |

## Loading Data

Load **Data Templates** & **Data Maps** directly from file system using `loadData` function. You can either group your templates & maps inside **templates** & **maps** folders or place them in the root dir by adding suffix **.template** or **.map** to the json files.

```stylus
- data/
  - maps/
    - User.json
  - templates/
    - Address.json
  - Bank.template.json
  - Army.map.json
```

Loading data

```js
const { stash } = require('pactum');

stash.loadData(); // by default it looks for a directory `./data`
// or
stash.loadData('/path/to/data/folder');
```

## See Also

- [parse](/api/utils/parse)
- [stores](/api/requests/stores)
- [Data Function Handler](/api/handlers/addDataFuncHandler)