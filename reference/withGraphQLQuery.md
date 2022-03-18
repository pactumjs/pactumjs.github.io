# withGraphQLQuery

Represents GraphQL query.

## Syntax

```js
withGraphQLQuery(query)
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .post('/api/users')
  .withGraphQLQuery(`
    {
      hero {
        name
      }
    }
  `)
  .expectStatus(201);
```

## Arguments

#### > query (string)

GraphQL query.

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [withGraphQLVariables](reference/withGraphQLVariables)