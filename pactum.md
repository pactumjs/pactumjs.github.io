<span align="center">

![logo](_media/logo-icon-small.svg)

# **PactumJS**

![----------](https://raw.githubusercontent.com/pactumjs/pactum/master/assets/rainbow.png)

<h3>REST API Testing Tool for all levels in a Test Pyramid</h3>
<h5> E2E - Integration - Contract - Component </h5>

![Build](https://github.com/pactumjs/pactum/workflows/Build/badge.svg?branch=master)
![Coverage](https://img.shields.io/codeclimate/coverage/ASaiAnudeep/pactum)
![Downloads](https://img.shields.io/npm/dt/pactum)
![Size](https://img.shields.io/bundlephobia/minzip/pactum)
![Platform](https://img.shields.io/node/v/pactum)

![Stars](https://img.shields.io/github/stars/pactumjs/pactum?style=social)
![Twitter](https://img.shields.io/twitter/follow/pactumjs?label=Follow&style=social)

![Demo](_media/demo.gif)

</span>

## Tutorials

- [Quick Start](quick-start) - *Installation & Setup*
- [API Testing](api-testing) - *Testing Styles*
  - [Request Making](request-making)
  - [Response Validation](response-validation)
- [Integration Testing](integration-testing) - *Retry Mechanism & Passing Data b/w tests*
- [E2E Testing](e2e-testing) - *Initialization & Cleanup*
- [Fuzz Testing](fuzz-testing) - *Fuzzing*
- [Mock Server](mock-server) - *Interactions*  
- [Component Testing](component-testing) - *Testing CRUD & Non-CRUD operations in isolation* 
- [Contract Testing](contract-testing) - *Compatibility b/w consumers & providers*
- [Data Management](data-management) - *Data Templates, Maps, Functions & Stores*
- [Matching](matching) - *Request & Response Matchers*
- [Reporting](reporting) - *JSON, InfluxDB, Swagger*

## Usage

**PactumJS** can be used for API automation tests across all levels in a test pyramid. It can also act as an standalone **mock server** to generate contracts for contract testing.

### API Testing

Tests in **pactum** are clear and comprehensive. It uses numerous descriptive methods to build your requests and expectations.

<!-- tabs:start -->

#### ** Mocha **

```js
const pactum = require('pactum');

it('should be a teapot', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
});

it('should save a new user', async () => {
  await pactum.spec()
    .post('https://jsonplaceholder.typicode.com/users')
    .withHeaders('Authorization', 'Basic xxxx')
    .withJson({
      name: 'bolt',
      email: 'bolt@swift.run'
    })
    .expectStatus(200);
});
```

#### ** Cucumber **

```gherkin
Scenario: Check Tea Pot
  Given I make a GET request to "http://httpbin.org/status/418"
  When I receive a response
  Then response should have a status 418
```

```js
// steps.js
const pactum = require('pactum');
const { Given, When, Then, Before } = require('cucumber');

let spec = pactum.spec();

Before(() => { spec = pactum.spec(); });

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});
```

<!-- tabs:end -->

### Mock Server

**PactumJS** can act as a standalone *mock server* that allows us to mock any server via HTTP or HTTPS, such as a REST endpoint. Simply it is a simulator for HTTP-based APIs.

Running **pactum** as a standalone *mock server*.

```js
const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/projects'
  },
  response: {
    status: 200,
    body: [
      {
        id: 'project-id',
        name: 'project-name'
      }
    ]
  }
});

mock.start(3000);
```

## Need Help

We use Github [Discussions](https://github.com/pactumjs/pactum/discussions) to receive feedback, discuss ideas & answer questions.

## Support

Like this project! Star it on [Github](https://github.com/pactumjs/pactum/stargazers). Your support means a lot to us.

## Under Development

- Contract Testing

## Experimental

- E2E Testing
- Fuzz Testing
- Snapshot Testing

## Notes

- Inspired from [frisby](https://docs.frisbyjs.com/) & [pact](https://docs.pact.io).

## Contributors

If you've ever wanted to contribute to open source, and a great cause, now is your chance!

See the [contributing docs](https://github.com/pactumjs/pactum/blob/master/CONTRIBUTING.md) for more information

<a href="https://github.com/pactumjs/pactum/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pactumjs/pactum" />
</a>
<br />

----

<a href="#/quick-start" >
  <img src="https://img.shields.io/badge/NEXT-Quick%20Start-blue" alt="Quick Start" align="right" style="display: inline;" />
</a>
