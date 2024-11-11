<template>
  <div class="converter-container">
    <div class="input-section">
      <label for="curlInput">Curl Command</label>
      <textarea
        id="curlInput"
        v-model="curlInput"
        placeholder="Enter your curl command here..."
        rows="5"
      ></textarea>

      <div class="test-runner-select">
        <label for="testRunner">Test Runner</label>
        <select id="testRunner" v-model="selectedRunner">
          <option value="mocha">Mocha</option>
          <option value="jest">Jest</option>
          <option value="cucumber">Cucumber.js</option>
        </select>
      </div>

      <button class="convert-button" @click="convertCurl">
        Convert
      </button>
      <button class="convert-button" @click="clearOutput">
        Clear
      </button>
    </div>

    <div class="output-section" v-if="generatedCode">
      <div class="output-header">
        <h3>Generated Test Code</h3>
        <button class="copy-button" @click="copyToClipboard">
          Copy Code
        </button>
      </div>
      <pre><code>{{ generatedCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const curlInput = ref('')
const selectedRunner = ref('mocha')
const generatedCode = ref('')

const clearOutput = () => {
  generatedCode.value = ''
}
  
const parseCurl = (curlCommand) => {
  if (!curlCommand) {
    clearOutput()
    return ""
  }
  const urlMatch = curlCommand.match(/https?:\/\/[^\s"']+/);
  const methodMatch = curlCommand.match(/-X\s+(\w+)/);
  const headerMatches = curlCommand.match(/-H\s+['"]([^'"]+)['"]/g);
  const dataMatch = curlCommand.match(/--data\s+(['"])(.*?)\1/);

  const headers = {};
  if (headerMatches) {
    headerMatches.forEach(header => {
      const [key, value] = header.match(/-H\s+['"]([^'"]+)['"]/)[1].split(': ');
      headers[key] = value;
    });
  }
  return {
    url: urlMatch?.[0] || '',
    method: methodMatch?.[1] || 'GET',
    headers,
    data: dataMatch?.[2] || null
  };
}

const generateMochaTest = (curlData) => {
  return `const { spec } = require('pactum');

describe('API Test', () => {
    it('should make the API call successfully', async () => {
        await spec()
            .${curlData.method.toLowerCase()}('${curlData.url}')
            ${Object.keys(curlData.headers).length > 0 ? 
              `.withHeaders(${JSON.stringify(curlData.headers, null, 8)})` : ''}
            ${curlData.data ? `.withJson(${curlData.data})` : ''}
            .expectStatus(200);
    });
});`
}

const generateJestTest = (curlData) => {
  return `const { spec } = require('pactum');

describe('API Test', () => {
    test('should make the API call successfully', async () => {
        await spec()
            .${curlData.method.toLowerCase()}('${curlData.url}')
            ${Object.keys(curlData.headers).length > 0 ? 
              `.withHeaders(${JSON.stringify(curlData.headers, null, 8)})` : ''}
            ${curlData.data ? `.withJson(${curlData.data})` : ''}
            .expectStatus(200);
    });
});`
}

const generateCucumberTest = (curlData) => {
  return `// features/api.feature
Feature: API Testing
    Scenario: Make API call
        When I make an API call
        Then I should receive a successful response

// step_definitions/api_steps.js
const { spec } = require('pactum');

When('I make an API call', async function () {
    this.response = await spec()
        .${curlData.method.toLowerCase()}('${curlData.url}')
        ${Object.keys(curlData.headers).length > 0 ? 
          `.withHeaders(${JSON.stringify(curlData.headers, null, 8)})` : ''}
        ${curlData.data ? `.withJson(${curlData.data})` : ''}
});

Then('I should receive a successful response', async function () {
    await this.response.expectStatus(200);
});`
}

const convertCurl = () => {
  try {
    const curlData = parseCurl(curlInput.value)
    if (!curlData.url) {
      return
    }
    let code = ''

    switch (selectedRunner.value) {
      case 'mocha':
        code = generateMochaTest(curlData)
        break
      case 'jest':
        code = generateJestTest(curlData)
        break
      case 'cucumber':
        code = generateCucumberTest(curlData)
        break
    }

    generatedCode.value = code
  } catch (error) {
    generatedCode.value = `Error parsing curl command: ${error.message}`
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedCode.value)
    alert('Code copied to clipboard!')
  } catch (err) {
    alert('Failed to copy code to clipboard')
  }
}
</script>

<style scoped>
.converter-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input-section {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-family: monospace;
  margin-bottom: 16px;
}

.test-runner-select {
  margin-bottom: 16px;
}

select {
  width: 200px;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
}

.convert-button {
  background-color: var(--vp-c-brand);
  color: white;
  padding: 2px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  margin: 5px;
}

.convert-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.convert-button.clear {
  background-color: var(--vp-c-bg-mute);
}


.output-section {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.copy-button {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.copy-button:hover {
  background-color: var(--vp-c-brand-soft-hover);
}

pre {
  margin: 0;
  padding: 16px;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  overflow-x: auto;
}

code {
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
}
</style>