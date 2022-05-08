# withGraphQLQuery

Represents GraphQL query.

## Syntax

```js
withGraphQLQuery(query)
```

## Usage

### ✅  Correct Usage

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