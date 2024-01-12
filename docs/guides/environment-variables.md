# Environment Variables

PactumJS supports setting default values to configuration parameters via Environment variables. 


## List of Environment Variables

| Variable Name                    | Defaults           | Description                               |
| -------------------------------- | ------------------ | ----------------------------------------- |
| `PACTUM_MOCK_HOST`               | `0.0.0.0`          | Mock Server Hostname/Interface to run on  |
| `PACTUM_MOCK_PORT`               | `9393`             | Mock server port                          |
| `PACTUM_REQUEST_BASE_URL`        | `Empty string`     | Sets request base url for all requests    |
| `PACTUM_REQUEST_TIMEOUT`         | `3000` ms          | Sets default timeout of requests          |
| `PACTUM_RESPONSE_TIME`           | `null`             | Sets default expected response time       |
| `PACTUM_RESPONSE_STATUS`         | `null`             | Sets default expected response status code|
| `PACTUM_DISABLE_USE_INTERACTION` | `null`             | Disable use interactions                  |

## Usage

### ✅  Correct Usage

Setting ENV variables from shell or CI/CD.
```sh
# Set the environment variable from shell as shown in example below
export PACTUM_MOCK_HOST=localhost
export PACTUM_MOCK_PORT=9001
export PACTUM_REQUEST_BASE_URL=https://example.com
```

Adding to .env file

```sh
# contents in .env file
PACTUM_MOCK_HOST=localhost
PACTUM_MOCK_PORT=9001
PACTUM_REQUEST_BASE_URL=https://example.com
```

## See Also

- [API](/api/requests/spec)
- [setDefaultTimeout](/api/settings/setDefaultTimeout)
- [setBaseUrl](/api/settings/setBaseUrl)