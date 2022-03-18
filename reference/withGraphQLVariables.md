# withGraphQLVariables

Represents GraphQL variables.

## Syntax

```js
withGraphQLVariables(variables)
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .post('/api/users')
  .withGraphQLQuery(`
    query HeroNameAndFriends($episode: Episode) {
      hero(episode: $episode) {
        name
        friends {
          name
        }
      }
    }
  `)
  .withGraphQLVariables({
    "episode": "JEDI"
  })
  .expectStatus(201);
```

## Arguments

#### > variables (object)

GraphQL variables.

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [withGraphQLQuery](reference/withGraphQLQuery)