# Expect

Expectations.

## List of Expectations

| Method                  | Description                                           |
| ----------------------- | ---------------------------------------------------   |
| `status`                | expects status code                                   |
| `header`                | expects header                                        |
| `headerContains`        | expects header contains given value                   |
| `body`                  | expects body                                          |
| `bodyContains`          | expects body contains given value                     |
| `json`                  | expects a exact json                                  |
| `jsonAt`                | expects a exact json at given path                    |
| `jsonLike`              | expects a partial json                                |
| `jsonLikeAt`            | expects a partial json at given path                  |
| `jsonSchema`            | expects a json schema                                 |
| `jsonSchemaAt`          | expects a json schema at given path                   |
| `jsonMatch`             | expects a partial json                                |
| `jsonMatchAt`           | expects a partial json at given path                  |
| `jsonMatchStrict`       | expects a exact json match                            |
| `jsonMatchStrictAt`     | expects a exact json match at given path              |
| `responseTimeLessThan`  | expects request completes within a specified duration |
| `_`                     | runs custom expect handler                            |