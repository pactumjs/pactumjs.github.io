# Quick Start

**PactumJS** is a Node.js project & available as an `npm` package under the name [pactum](https://www.npmjs.com/package/pactum).

## System Requirements

- Node.js 10 and above - <a href="https://nodejs.org/en/download/" target="_blank">Download NodeJS</a>

Before getting started, one needs to have a basic understanding of Node.js & any testing framework in it.

- Learn [Node.js](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- Learn [Mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s), [Jest](https://www.youtube.com/watch?v=7r4xVDI2vho) or [Cucumber](https://cucumber.io/docs/cucumber/)

## Installation

Install **pactum** via `npm`.

<!-- tabs:start -->

#### ** Basic **

```shell
# install pactum
npm install --save-dev pactum
```

#### ** New Project **

```shell
# create new folder
mkdir pactum-api-testing
cd pactum-api-testing

# initialize npm
npm init -y

# install pactum as a dev dependency
npm install --save-dev pactum
```

#### ** Existing Project **

```shell
# move to project folder
cd <existing-project-folder>

# install pactum as a dev dependency
npm install --save-dev pactum
```

<!-- tabs:end -->

This will install **pactum** locally as a dependency for your project.

## Running Tests

!> **pactum** is not a test runner. It needs to be used alongside with a test runner like **mocha**, **jest**, **jasmine** or **cucumber**.

Install a test runner that supports *promises*.

<!-- tabs:start -->

#### **Mocha**

```shell
# install a test runner
npm install --save-dev mocha

# or globally
npm install -g mocha
```

Create a JS file & copy the below code.

```js
// test.js
const pactum = require('pactum');

it('should be a teapot', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
});
```

Running the test.

```shell
# mocha is a test framework to execute test cases
mocha test.js

# or if installed as a dev dependency
# update 'test' script in package.json to include 'mocha test.js' as value
npm run test
```

#### **Cucumber**

```shell
# install a test runner 
npm install --save-dev @cucumber/cucumber

# or globally
npm install -g @cucumber/cucumber
```

Create a feature file & copy the below code.

```gherkin
Scenario: Check Tea Pot
  Given I make a GET request to "http://httpbin.org/status/418"
  When I receive a response
  Then response should have a status 418
```

Create a JS file & copy the below code.

```js
// steps.js
const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

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

Running the test.

```shell
# if installed globally
cucumber-js

# or if installed as a dev dependency
# update 'test' script in package.json to include 'cucumber-js' as value
npm run test
```

<!-- tabs:end -->

## Running Mock Server

**pactum** can also be used as a standalone mock server or a service virtualization tool to mock external dependencies.

<!-- tabs:start -->

#### ** server.js **

```js
const { mock } = require('pactum');   // import mock

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/health'
  },
  response: {
    status: 200,
    body: 'OK'
  }
});

mock.start(3000);                     // start mock server on port 3000
```

<!-- tabs:end -->

Running the mock server.

```shell
node server.js
```

Interacting with mock server.

```shell
curl http://localhost:3000/api/health
```
