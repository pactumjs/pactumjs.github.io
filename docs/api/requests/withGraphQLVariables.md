# withGraphQLVariables

Represents GraphQL variables.

## Syntax

```js
withGraphQLVariables(variables)
```

## Usage

### ✅  Correct Usage

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