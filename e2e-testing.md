# E2E Testing

End-To-End testing is a software testing method that validates entire software from starting to end along with its integration with external interfaces.

During e2e testing, most likely we will be running our tests against a real application in an actual environment. We might need features like initialization or running clean up functions to keep the environment healthy.

**pactum** packs with features that helps us to write better e2e tests.

## Pre Requisite

* [API Testing](api-testing)
* [Integration Testing](integration-testing)

## API

### e2e

- It creates a new instance of End-To-End test case.
- It accepts a string as param which defines the name of the test case.
- Use this instance to create test steps.

```js
const e2e = pactum.e2e('Add User');
const step1 = e2e.step('Post User');
```

### step

- It creates a new instance of End-To-End test step.
- It accepts a string as param which defines the name of the test step.
- Use this instance to send API requests and perform response validations.
- Can optionally register cleanup methods to run at the end using `clean()` method.
- If a step fails, the remaining steps will be skipped.

```js
const step1 = e2e.step('Post User');
await step1.spec()
  .post('/api/users')
  .withJson({
    "name": "snow"
  })
  .expectStatus(200);
```

### cleanup

- It is used for running the cleanup steps.
- It also notifies the pactum that the current test case has finished it execution.
- It is **mandatory** to invoke this function at the end.
- Runs all registered cleanup methods for successful steps in LIFO order.

```js
const e2e = pactum.e2e('Add User');
const step1 = e2e.step('Post User');
await step1.spec()
  .post('/api/users')
  .withJson({
    "name": "snow"
  })
  .expectStatus(200)
await e2e.cleanup();
```

## Examples

### Simple Test

- Create a new user.
- Validate the newly created user.
- Delete the user at the end.

```js
describe('AddUser_ReadUser', () => {

  let e2e = pactum.e2e('Add User');

  it('create user', async () => {
    await e2e.step('Post User')
      .spec()
      .post('/api/users')
      .withJson({
        "name": "snow"
      })
      .expectStatus(200)
      .clean()
      .delete('/api/users/snow')
      .expectStatus(200);
  });

  it('get user', async () => {
    await e2e.step('Get User')
      .spec()
      .get('/api/users/snow')
      .expectStatus(200)
      .expectJson({
        "name": "snow"
      });
  });

  it('clean up', async () => {
    // runs all registered cleanup methods in LIFO order
    await e2e.cleanup();
  });

});
```

#### Scenarios

Lets look at some scenarios to understand how **pactum** will run e2e tests.

**Scenario 1**

All steps are passed.

- Post User ✔️
- Get User ✔️
- Clean Up ✔️

**Scenario 2**

Get User Fails.

- Post User ✔️
- Get User ❌
- Clean Up ✔️ - *Clean up will delete the created user "snow"*

**Scenario 3**

Post User Fails.

- Post User ❌
- Get User ⚠️ - *This step will be skipped as one of the previous step is failed*
- Clean Up ✔️ - *Clean up will try to run the registered clean up specs for successful steps (0)*