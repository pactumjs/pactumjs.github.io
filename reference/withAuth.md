# withAuth

Basic authentication.

## Syntax

```js
withAuth(username, password)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withAuth('my-username', 'super-secret-password')
  .expectStatus(200);
```

## Arguments

#### > username (string)

#### > password (string)