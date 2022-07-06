# Interaction

An **interaction** adds behavior to the mock server.

## Options

| Property                  | Description                                 |
| ------------------------  | ------------------------------------------  |
| id                        | id of the interaction                       |
| strict                    | enable/disable strict matching              |
| provider                  | name of the provider                        |
| flow                      | name of the flow                            |
| background                | is a background call                        |
| request                   | request details                             |
| request.method            | HTTP method                                 |
| request.path              | api path                                    |
| request.pathParams        | api path params                             |
| request.headers           | request headers                             |
| request.queryParams       | query parameters                            |
| request.body              | request body                                |
| request.graphQL           | graphQL details                             |
| request.graphQL.query     | graphQL query                               |
| request.graphQL.variables | graphQL variables                           |
| response                  | response details                            |
| response.status           | response status code                        |
| response.headers          | response headers                            |
| response.body             | response body                               |
| response.file             | file path to return                         |
| response.fixedDelay       | delays the response by ms                   |
| response.randomDelay      | random delay details                        |
| response.randomDelay.min  | delay the response by min ms                |
| response.randomDelay.max  | delay the response by max ms                |
| response.onCall           | response on consecutive calls               |
| response(req, res)        | response with custom function               |
| expects                   | expectations are used in component testing  |
| expects.disable           | disable checks                              |
| expects.exercised         | check exercised (default: `true`)           |
| expects.callCount         | check call count (default: `> 0`)           |
| stores                    | stores data from the request                |