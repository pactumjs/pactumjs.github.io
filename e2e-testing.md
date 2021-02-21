# E2E Testing

End-To-End testing is a software testing method that validates entire software from starting to end along with its integration with external interfaces.

During e2e testing, most likely we will be running our tests on the entire application in an actual environment. We might need features like initialization or running clean up functions to keep the environment healthy.

**pactum** packs with features that helps us to write better e2e tests.

## Pre Requisite

* [API Testing](api-testing)
* [Integration Testing](integration-testing)

### Sample Test

Use `pactum.e2e()` to create a End-To-End test case. To add test steps, use `e2e.step()` method. Each step function can make an API request using `spec()` method & can register a cleanup method using `clean()`. 

```js
describe('Add User', () => {

  before(() => {
    this.e2e = pactum.e2e('Add User');
  });

  it('create user', async () => {
    await this.e2e.step('Create User')
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
    await this.e2e.step('Get User')
      .spec()
      .get('/api/users/snow')
      .expectStatus(200);
  });

  it('clean up', async () => {
    // runs all registered cleanup methods in LIFO order
    await this.e2e.cleanup();
  });

});
```