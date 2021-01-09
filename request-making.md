# Request Making

## spec

`pactum.spec()` will return an instance of *spec* which can be used to build the request and expectations.

```javascript
const pactum = require('pactum');

it('<test-name>', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/200');
});
```

To pass additional parameters to the request, we can chain or use the following methods individually to build our request.

| Method                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `withPathParams`          | request path parameters                   |
| `withQueryParams`         | request query parameters                  |
| `withHeaders`             | request headers                           |
| `withBody`                | request body                              |
| `withJson`                | request json object                       |
| `withGraphQLQuery`        | graphQL query                             |
| `withGraphQLVariables`    | graphQL variables                         |
| `withForm`                | object to send as form data               |
| `withMultiPartFormData`   | object to send as multi part form data    |
| `withRequestTimeout`      | sets request timeout                      |
| `withCore`                | http request options                      |
| `withAuth`                | basic auth details                        |
| `withFollowRedirects`     | sets follow redirect boolean property     |
| `inspect`                 | prints request & response details         |
| `__setLogLevel`           | sets log level for troubleshooting        |
| `toss` (optional)         | runs the spec & returns a promise         |

## Request Method

The request method indicates the method to be performed on the resource identified by the given Request-URI.

```javascript
const pactum = require('pactum');

it('GET /user', async () => {
  await pactum.spec()
    .get('http://domain.com/user');
});

it('POST /user', async () => {
  await pactum.spec()
    .post('http://domain.com/user');
});

it('PUT /user', async () => {
  await pactum.spec()
    .put('http://domain.com/user');
});

it('PATCH /user', async () => {
  await pactum.spec()
    .patch('http://domain.com/user');
});

it('DELETE /user', async () => {
  await pactum.spec()
    .delete('http://domain.com/user');
});
```

It is a general practice in API Testing, where we set the base url to a constant value.

<!-- tabs:start -->

## ** base.test.js **

```javascript
const pactum = require('pactum');
const request = pactum.request;

before(() => {
  request.setBaseUrl('http://localhost:3000');
});
```

## ** projects.test.js **

```javascript
const pactum = require('pactum');

it('should have a post with id 5', async () => {
  // request will be sent to http://localhost:3000/api/projects
  await pactum.spec()
    .get('/api/projects');
});
```

<!-- tabs:end -->

## Path Params

Use `withPathParams` to pass path parameters to the request. We can either pass key & value or object as an argument.

```javascript
it('get random male user from India', async () => {
  await pactum.spec()
    .get('/api/project/{project}/repo/{repo}')
    .withPathParams('project', 'project-name')
    .withPathParams({
      'repo': 'repo-name'
    })
    .expectStatus(200);
});
```

## Query Params

Use `withQueryParams` to pass query parameters to the request. We can either pass key & value or object as an argument.

```javascript
it('get random male user from India', async () => {
  await pactum.spec()
    .get('https://randomuser.me/api')
    .withQueryParams('gender', 'male')
    .withQueryParams({
      'country': 'IND',
      'age': 17
    })
    .expectStatus(200);
});
```

## Headers

Use `withHeaders` to pass headers to the request. We can either pass key & value or object as an argument.

```javascript
it('get all comments', async () => {
  await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/comments')
    .withHeaders('Authorization', 'Basic abc')
    .withHeaders({
      'Content-Type': 'application/json'
    })
    .expectStatus(200);
});
```

It is a general practice in API Testing, where we set the default headers.

<!-- tabs:start -->

## ** base.test.js **

```javascript
const pactum = require('pactum');
const request = pactum.request;

before(() => {
  request.setBaseUrl('http://localhost:3000');
  request.setDefaultHeaders('Authorization', 'Basic xxxxx');
});
```

## ** projects.test.js **

```javascript
const pactum = require('pactum');

it('should have a post with id 5', async () => {
  // request will be sent to http://localhost:3000/api/projects
  await pactum.spec()
    .get('/api/projects');
});
```

<!-- tabs:end -->

## Body

Use `withBody` or `withJson` methods to pass the body to the request.

```javascript
it('post body', async () => {
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/posts')
    .withBody('{ "title": "foo", "content": "bar"}')
    .expectStatus(201);
});
```

```javascript
it('post json object', async () => {
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/posts')
    .withJson({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .expectStatus(201);
});
```

## Form Data

Use `withForm` or `withMultiPartFormData` to pass form data to the request.

## withForm

* Under the hood, pactum uses `phin.form`
* `content-type` header will be auto updated to `application/x-www-form-urlencoded`

```javascript 
it('post with form', async () => {
  await pactum.spec()
    .post('https://httpbin.org/forms/posts')
    .withForm({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .expectStatus(201);
});
```

## withMultiPartFormData

* Under the hood it uses [form-data](https://www.npmjs.com/package/form-data)
* `content-type` header will be auto updated to `multipart/form-data`

```javascript
it('post with multipart form data', async () => {
  await pactum.spec()
    .post('https://httpbin.org/forms/posts')
    .withMultiPartFormData('file', fs.readFileSync('a.txt'), { contentType: 'application/js', filename: 'a.txt' })
    .expectStatus(201);
});
```

We can also directly use the form-data object.

```javascript
const form = new pactum.request.FormData();
form.append(/* form data */);

it('post with multipart form data', async () => {
  await pactum.spec()
    .post('https://httpbin.org/forms/posts')
    .withMultiPartFormData(form)
    .expectStatus(201);
});
```

## GraphQL

Use `withGraphQLQuery` or `withGraphQLVariables` to pass GraphQL data to the request. *Works for only POST requests.*

```javascript
it('post graphql query & variables', async () => {
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/posts')
    .withGraphQLQuery(
      `
        query HeroNameAndFriends($episode: Episode) {
          hero(episode: $episode) {
            name
            friends {
              name
            }
          }
        }
      `
    )
    .withGraphQLVariables({
      "episode": "JEDI"
    })
    .expectStatus(201);
});
```

## Request Timeout

By default, pactum's request will timeout after 3000 ms. To increase the timeout for the current request use the `withRequestTimeout` method. **Make Sure To Increase The Test Runners Timeout As Well**


```javascript
it('some action that will take more time to complete', async () => {
  // increase mocha timeout here
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/posts')
    .withJson({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .withRequestTimeout(5000)
    .expectStatus(201);
});
```

# Request Settings

This library also offers us to set default options for all the requests that are sent through it.

## setBaseUrl

Sets the base URL for all the HTTP requests.

```javascript
const pactum = require('pactum');
const request = pactum.request;

before(() => {
  request.setBaseUrl('http://localhost:3000');
});

it('should have a post with id 5', async () => {
  // request will be sent to http://localhost:3000/api/projects
  await pactum.spec()
    .get('/api/projects');
});
```

## setDefaultTimeout

Sets the default timeout for all the HTTP requests.
The default value is **3000 ms**

```javascript
pactum.request.setDefaultTimeout(5000);
```

## setDefaultHeaders

Sets default headers for all the HTTP requests.

```javascript
pactum.request.setDefaultHeaders('Authorization', 'Basic xxxxx');
pactum.request.setDefaultHeaders({ 'content-type': 'application/json'});
```

## setDefaultFollowRedirects

Sets default follow redirect option for HTTP requests.

```javascript
pactum.request.setDefaultFollowRedirects(true);
```

----

<a href="#/api-testing" >
  <img src="https://img.shields.io/badge/PREV-API%20Testing-orange" alt="API Testing" align="left" style="display: inline;" />
</a>
<a href="#/response-validation" >
  <img src="https://img.shields.io/badge/NEXT-Response%20Validation-blue" alt="Response Validation" align="right" style="display: inline;" />
</a>