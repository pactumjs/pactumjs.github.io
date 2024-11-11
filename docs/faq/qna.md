# Frequently Asked Questions (FAQs)

<!-- Table of Contents -->
- [What is the http client used by PactumJS](#what-is-the-http-client-used-by-pactumjs)
- [Can PactumJS conditionally proxy or pass through requests sent to mock server to external servers?](#can-pactumjs-conditionally-proxy-or-pass-through-requests-sent-to-mock-server-to-external-servers)
- [How disable or ignore SSL certificate errors in PactumJS?](#how-disable-or-ignore-ssl-certificate-errors-in-pactumjs)
- [What kinds of API testing does PactumJS?](#what-kinds-of-api-testing-does-pactumjs)

---

## What is the http client used by PactumJS

PactumJS under the hood uses [phin.js](https://github.com/ethanent/phin) for http/https requests. 

## Can PactumJS conditionally proxy or pass through requests sent to mock server to external servers?

PactumJS currently cannot conditionally proxy or pass-through requests, be it in full or partial sent to mock server to external servers.

## How disable or ignore SSL certificate errors in PactumJS?

Yes, it is possible to disable SSL certificate checks/erros similar to "" in NodeJS. Set the `rejectUnauthorized` flag to `false` in the `agent` configuration before firing the request.

```js
const https = require('https');
const pactum = require('pactum');

// If you have the cert/key pair
const key = fs.readFileSync("server.key")
const cert = fs.readFileSync("server.crt")

const agent = new https.Agent({
  cert: cert, // Optional - add if cert available 
  key: key, // Optional - add if key is available 
  rejectUnauthorized: false // Ignore  certificate errors
});

pactum.spec()
    .get('https://api.example.com')
    .withCore({agent: agent })
    .expectStatus(200)
```

## What kinds of API testing does PactumJS?
PactumJS currently only support REST/GraphQL API testing over http(s).

