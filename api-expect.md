# Expect

Expectations.

## List of Expectations

| Method                  | Description                                           |
| ----------------------- | ---------------------------------------------------   |
| `status`                | expects status code                                   |
| `header`                | expects header                                        |
| `headerContains`        | expects header contains given value                   |
| `cookies`               | expects cookies                                       |
| `cookiesLike`           | expects cookies contains given value                  |
| `body`                  | expects body                                          |
| `bodyContains`          | expects body contains given value                     |
| `json`                  | expects a exact json                                  |
| `jsonLike`              | expects a partial json                                |
| `jsonSchema`            | expects a json schema                                 |
| `jsonMatch`             | expects a partial json                                |
| `jsonMatchStrict`       | expects a exact json match                            |
| `jsonLength`            | expects json contains an array with length            |
| `responseTimeLessThan`  | expects request completes within a specified duration |
| `_`                     | runs custom expect handler                            |