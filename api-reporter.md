# Reporter

PactumJS is just a test library that can be integrated with most of the test runners. Tha means any reporter built for them can be used for PactumJS. Even though pactum is test a test library, it comes with a capability of reporting. It can record HTTP requests and responses. By default, pactum comes with zero reporters. We need to manually add & enable required reporters.

## List of Reporter Options

| Method      | Description               |
| ----------  | ------------------------  |
| `add`       | adds a reporter           |
| `end`       | ends reporter execution   |

!> As pactum is not tightly coupled with any of the test runners, it is required to run the `reporter.end()` method at the end of your test execution to let pactum reports to generate the reports.

## Adding a Reporter

Pre built reporters are available as npm packages. Install the required reporter as your dependency.

```shell
npm install --save-dev pactum-json-reporter
```

We can add *n* number of reporters to the pactum tests. Use `reporter.add()` method to add reporters at the beginning of your execution. Run `reporter.end()` method at the end of your test execution.

```js
const pjr = require('pactum-json-reporter');
const { reporter } = require('pactum');

// global before block
before(() => {
  reporter.add(pjr);
});

// global after block
after(async () => {
  await reporter.end();
});
```

### Reporting for BDD

The reporting structure for [Breaking](api-testing?id=testing-style) testing style differs as the `spec` runs in multiple steps. To have a proper reporting, we need to run additional methods.

- Run `settings.setReporterAutoRun(false)` before test execution.
- Run `spec.end()` after each test case to let pactum know that test case has completed.
- Use `spec.response()` for assertions to manage the test case status.

<!-- tabs:start -->

### ** base.spec.js **

```js
const pjr = require('pactum-json-reporter');
const { settings, reporter } = require('pactum');

// global hook
before(() => {
  settings.setReporterAutoRun(false);
  reporter.add(pjr);
});

// global after block
after(async () => {
  await reporter.end();
});
```

### ** user.spec.js **

```js
const pactum = require('pactum');

describe('should have a user with name bolt', () => {

  before(() => {
    this.spec = pactum.spec();
  });

  it('given a user is requested', () => {
    this.spec.get('http://localhost:9393/api/users');
  });

  it('should return a response', async () => {
    await this.spec.toss();
  });

  it('should return a status 200', () => {
    this.spec.response().to.have.status(200);
  });

  after(() => {
    this.spec.end();
  });

});
```

<!-- tabs:end -->

## Available Reporters

* [pactum-json-reporter](https://www.npmjs.com/package/pactum-json-reporter)
* [pactum-swagger-coverage](https://www.npmjs.com/package/pactum-swagger-coverage)
* [pactum-influxdb-reporter](https://www.npmjs.com/package/pactum-influxdb-reporter)
* [pactum-flow-plugin](https://www.npmjs.com/package/pactum-flow-plugin)

?> More reporters are on the way. If you have created a custom reporter, create a PR to add it here.

## Writing a Custom Reporter

A reporter should have the following methods in it.

* `afterSpec` - will be called after each spec.
* `afterStep` - will be called after each step in e2e testing.
* `afterTest` - will be called after each test in e2e testing.
* `end` - will be called at the end. It can return a promise.

See the above reporters source code for usage examples.