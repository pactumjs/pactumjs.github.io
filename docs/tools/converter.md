# cURL to PactumJS Converter

::: warning WARNING
cURL to PactumJS converter is still in Beta/experimental mode. Not all features might work as expected. If you see any issues, please start a discussion [here](https://github.com/pactumjs/pactum/discussions/new/choose)
:::


Convert your simple cURL commands to PactumJS tests with support for multiple test runners.

## Usage Instructions

1. Paste your cURL command in the input field
2. Select your preferred test runner (Mocha, Jest, or Cucumber.js)
3. Click "Convert" to generate the test code
4. Copy the generated code using the "Copy Code" button

## cURL Converter

<script setup>
import Converter from '../.vitepress/components/Converter.vue'
</script>
<Converter />

## Supported Features

- HTTP Methods (GET, POST, PUT, DELETE, etc.)
- Headers
- Request Body
- Multiple test runner support:
  - Mocha with Chai assertions
  - Jest
  - Cucumber.js

## Example cURL Command

```bash
curl -X POST "https://api.example.com/data" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token123" \
  --data '{"key": "value"}'
```