# Response Validation

**pactum** allows us to validate the received response. Received response is validated through expectation methods. All expectation methods start with `expect`.

| Method                  | Description                               |
| ----------------------- | ----------------------------------------- |
| `expect`                | runs custom expect handler                |
| `expectStatus`          | check HTTP status                         |
| `expectHeader`          | check HTTP header key + value             |
| `expectHeaderContains`  | check HTTP header key + partial value     |
| `expectBody`            | check exact match of body                 |
| `expectBodyContains`    | check body contains the value             |
| `expectJson`            | check exact match of json                 |
| `expectJsonAt`          | check json using **json-query**           |
| `expectJsonLike`        | check loose match of json                 |
| `expectJsonLikeAt`      | check json like using **json-query**      |
| `expectJsonSchema`      | check json schema                         |
| `expectJsonSchemaAt`    | check json schema using **json-query**    |
| `expectJsonMatch`       | check json to match                       |
| `expectJsonMatchAt`     | check json to match using **json-query**  |
| `expectJsonSnapshot`    | check json to match with a snapshot       |
| `expectResponseTime`    | check response time                       |

## Status & Headers & Response Time

Expecting Status Code & Headers & response time from the response.

```javascript
const expect = pactum.expect;

it('get post with id 1', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectHeader('content-type', 'application/json; charset=utf-8')
    .expectHeader('connection', /\w+/)
    .expectHeaderContains('content-type', 'application/json')
    .expectResponseTime(100);

  expect(response).to.have.status(200);
  expect(response).to.have.header('connection', 'close');
});
```

## JSON

Most REST APIs will return a JSON response. This library has few methods to validate a JSON response in many aspects.

## expectJson

Performs deep equal.

```javascript
it('get post with id 1', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectJson({
      "userId": 1,
      "id": 1,
      "title": "some title",
      "body": "some body"
    });
  
  // Chai Style Assertions
  // pactum.expect(response).should.have.json({});
});
```

## expectJsonAt

Allows validation of specific part in a JSON. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

* Performs deep equal or strict equal.
* Order of items in an array does matter.

```javascript
it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJson({
      people: [
        { name: 'Matt', country: 'NZ' },
        { name: 'Pete', country: 'AU' },
        { name: 'Mike', country: 'NZ' }
      ]
    })
    .expectJsonAt('people[country=NZ].name', 'Matt')
    .expectJsonAt('people[*].name', ['Matt', 'Pete', 'Mike']);
});
```

## expectJsonLike

Performs partial deep equal. 

* Allows Regular Expressions.
* Allows Assert Expressions.
* Allows Assert Handlers.
* Order of items in an array doesn't matter.

```javascript
it('posts should have a item with title -"some title"', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts')
    .expectStatus(200)
    .expectJsonLike([
      {
        "userId": /\d+/,
        "title": "some title"
      }
    ]);
  
  // Chai Style Assertions
  // pactum.expect(response).should.have.jsonLike();
  // spec.response().should.have.jsonLike();
});
```

### Assert Expressions

Assert Expressions helps to run custom JavaScript code on a JSON that performs user defined assertions. 

 * Expression should contain `$V` to represent current value.
 * Expression should be a valid JavaScript code.
 * Expression should return a *boolean*.

!> String containing **$V** will be automatically treated as a Assert Expression.

```javascript
it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike('$V.length === 10'); // api should return an array with length 10
    .expectJsonLike([
      {
        id: 'typeof $V === "string"',
        name: 'jon',
        age: '$V > 30' // age should be greater than 30 
      }
    ]);
});
```

You are also allowed to change the default value `$V` to some other string based on your usage. *Be cautious that all the strings containing the new value will be treated as assert expressions and pactum will try to evaluate it as a javascript code*.

```javascript
pactum.settings.setAssertExpressionStrategy({ includes: '$' });

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        name: 'jon',
        age: '$ > 30' // age should be greater than 30 
      }
    ]);
});
```

### Assert Handlers

Assert Handlers helps us to reuse the custom JavaScript assertion code on a JSON. With this we can easily extend the capabilities of `expectJsonLike` to solve complex assertions.

 * Handler name will be prefixed with `#`.
 * Handler function should return a *boolean*.

!> String starting with **#** will be automatically treated as a Assert Handler. 

Handlers is a powerful concept in pactum that helps to reuse different things. To add a assert handler use `handler.addAssertHandler` function.

* First param will be the name of the assert handler which will be used in `expectJsonLike` to refer it.
* Second param will be a function that accepts a context object as an argument. Context object will have `data` property that will represent the current value in JSON. It also includes optional `args` property that includes custom arguments. 

```javascript
pactum.handler.addAssertHandler('number', (ctx) => {
  return typeof ctx.data === 'number';
});

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        id: '#number',
        name: 'jon'
      }
    ]);
});
```

Custom arguments can be passed to the handler function by using comma separated values after `:`.

```javascript
pactum.handler.addAssertHandler('type', (ctx) => {
  return typeof ctx.data === ctx.args[0];
});

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        id: '#type:number',
        name: 'jon'
      }
    ]);
});
```

You are also allowed to change the default value `#` to some other string based on your usage. *Be cautious that all the strings starting with the new value will be treated as assert handlers*.

```javascript
pactum.settings.setAssertHandlerStrategy({ starts: '#' });

it('get users', async () => {
  await pactum.spec()
    .get('/api/users')
    .expectJsonLike([
      {
        id: '#handlerName:arg1,arg2',
        name: 'jon'
      }
    ]);
});
```

## expectJsonLikeAt

Allows validation of specific part in a JSON. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

* Performs partial deep equal.
* Allows Regular Expressions.
* Allows Assert Expressions.
* Allows Assert Handlers.
* Order of items in an array doesn't matter.

```javascript
it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJson({
      people: [
        { name: 'Matt', country: 'NZ' },
        { name: 'Pete', country: 'AU' },
        { name: 'Mike', country: 'NZ' }
      ]
    })
    .expectJsonAt('people[*].name', ['Matt', 'Pete', 'Mike']);
    .expectJsonLikeAt('people[*].name', ['Mike', 'Matt']);
});
```

## expectJsonSchema

Allows validation of the schema of a JSON. See [json-schema](https://json-schema.org/learn/) for more usage details.

```javascript
it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJson({
      people: [
        { name: 'Matt', country: 'NZ' },
        { name: 'Pete', country: 'AU' },
        { name: 'Mike', country: 'NZ' }
      ]
    })
    .expectJsonSchema({
      "type": "object",
      "properties": {
        "people": {
          "type": "array"
        }
      }
    });
});
```

## expectJsonSchemaAt

Allows validation of the schema of a JSON at a specific place. See [json-schema](https://json-schema.org/learn/) for more usage details.

```javascript
it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJson({
      people: [
        { name: 'Matt', country: 'NZ' },
        { name: 'Pete', country: 'AU' },
        { name: 'Mike', country: 'NZ' }
      ]
    })
    .expectJsonSchemaAt('people', {
      "type": "array"
    });
});
```

## expectJsonMatch

Allows validation of JSON with a set of matchers. See [Matching](matching) for more usage details.

```javascript
const { like } = require('pactum-matchers');

it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJsonMatch({
      id: like(1),
      name: 'jon'
    });
});
```

## expectJsonMatchAt

Allows validation of specific part in a JSON with a set of matchers. See [Matching](matching) for more usage details. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

```javascript
const { like } = require('pactum-matchers');

it('get people', async () => {
  const response = await pactum.spec()
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJsonMatchAt('people[0]', {
      id: like(1),
      name: 'jon'
    });
});
```

## expectJsonSnapshot

Snapshot testing is a type of **output comparison** which will be very useful whenever we want to make sure our API does not change unexpectedly.

A typical snapshot test in pactum will fetch the api response, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the API response.

If you are running the test for the first time, pactum will save the api response body at `./pactum/snapshots` directory. For the next test runs, pactum will compare the actual response with the local reference file. 

A snapshot needs a name & it can be defined through `pactum.spec().name("<some name>")`.

!> It is mandatory to commit the snapshot files to the version control system. 

```js
it('get people', async () => {
  const response = await pactum.spec()
    .name('GET_People')
    .get('https://some-api/people')
    .expectStatus(200)
    .expectJsonSnapshot();
});
```

There are high chances that our server will return response containing dynamic data like `ids` or `dates`. Not to fail the snapshot at every run, pactum provides matchers for any property in the JSON. See [Matching](matching) for more usage details.

```js
const { like } = require('pactum-matchers');

it('get user mark', async () => {
  const response = await pactum.spec()
    .name('GET_User_Mark')
    .get('https://some-api/user/{username}')
    .withPathParams('username', 'Mark')
    .expectStatus(200)
    .expectJsonSnapshot({
      id: like(123)
    });
});
```

When there is an intentional change in the API response, our snapshot test fails because the snapshot for our updated API no longer matches the snapshot artifact for this test case. To resolve this, we will need to update our snapshot artifacts. Use `updateSnapshot` method in the test case & run the test to update the snapshot.

!> Remove `updateSnapshot` method from the test case after the snapshot is updated.

```js
const { like } = require('pactum-matchers');

it('get user mark', async () => {
  const response = await pactum.spec()
    .name('GET_User_Mark')
    .get('https://some-api/user/{username}')
    .withPathParams('username', 'Mark')
    .expectStatus(200)
    .expectJsonSnapshot({
      id: like(123)
    })
    .updateSnapshot();
});
```

To change file location of snapshots, use `settings.setSnapshotDirectoryPath` method.

## Custom Validations

You can also add custom expect handlers to this library for making much more complicated assertions that are ideal to your requirement. You can bring your own assertion library or take advantage of popular libraries like [chai](https://www.npmjs.com/package/chai).

## AdHoc

You can simply pass a function as a parameter to `expect` & then write your logic that performs assertions. A *context* object is passed to the handler function which contains *req* (request) & *res* (response) objects.

```javascript
const chai = require('chai');
const expect = chai.expect;

const pactum = require('pactum');
const _expect = pactum.expect;

it('post should have a item with title -"some title"', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/5')
    .expect((ctx) => {
      const res = ctx.res;
      _expect(res).to.have.status(200);
      expect(res.json.title).equals('some title');
    });
});
```

## Common

There might be a use case where you wanted to perform the same set of assertions. For such scenarios, you can add custom expect handlers that can be used at different places. A *context* object is passed to the handler function which contains *req* (request) & *res* (response) objects & *data* (custom data).

```javascript
const chai = require('chai');
const expect = chai.expect;

const pactum = require('pactum');
const _expect = pactum.expect;
const handler = pactum.handler;

before(() => {
  handler.addExpectHandler('user details', (ctx) => {
    const res = ctx.res;
    const user = res.json;
    expect(user).deep.equals({ id: 1 });
    _expect(res).to.have.status(200);
    _expect(res).to.have.responseTimeLessThan(500);
    _expect(res).to.have.jsonSchema({ /* some schema */ });
  });
});

it('should have a post with id 5', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/5')
    .expect('user details');
  
  // Chai Style Assertions
  // pactum.expect(response).should.have._('user details');
});

it('should have a post with id 5', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/6')
    .expect('to have user details');
});
```

You are also allowed to pass custom data to common expect handlers.

```javascript
before(() => {
  handler.addExpectHandler('to have user details', (ctx) => {
    const res = ctx.res;
    const req = ctx.req;
    const data = ctx.data;
    /*
     Add custom logic to perform based on req (request) & data (custom data passed)
     */
  });
});

it('should have a post with id 5', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/5')
    .expect('to have user details', 5); // data = 5
});

it('should have a post with id 5', async () => {
  const response = await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/6')
    .expect('to have user details', { id: 6 }); // data = { id: 6 }
});
```

----

<a href="#/request-making" >
  <img src="https://img.shields.io/badge/PREV-Request%20Making-orange" alt="Request Making" align="left" style="display: inline;" />
</a>
<a href="#/integration-testing" >
  <img src="https://img.shields.io/badge/NEXT-Integration%20Testing-blue" alt="Integration Testing" align="right" style="display: inline;" />
</a>