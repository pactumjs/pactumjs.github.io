import{_ as w,r as p,o as u,c as d,d as s,w as C,v as I,e as x,t as E,f as F,p as P,g as $,b as q,a as v}from"./app.6dbb7ef3.js";const o=r=>(P("data-v-20936d1e"),r=r(),$(),r),R={class:"converter-container"},J={class:"input-section"},U=o(()=>s("label",{for:"curlInput"},"Curl Command",-1)),j={class:"test-runner-select"},L=o(()=>s("label",{for:"testRunner"},"Test Runner",-1)),N=o(()=>s("option",{value:"mocha"},"Mocha",-1)),O=o(()=>s("option",{value:"jest"},"Jest",-1)),V=o(()=>s("option",{value:"cucumber"},"Cucumber.js",-1)),H=[N,O,V],B={key:0,class:"output-section"},M=o(()=>s("h3",null,"Generated Test Code",-1)),G={__name:"Converter",setup(r){const l=p(""),c=p("mocha"),n=p(""),h=()=>{n.value=""},y=e=>{if(!e)return h(),"";const t=e.match(/https?:\/\/[^\s"']+/),a=e.match(/-X\s+(\w+)/),m=e.match(/-H\s+['"]([^'"]+)['"]/g),i=e.match(/--data\s+(['"])(.*?)\1/),_={};return m&&m.forEach(k=>{const[D,S]=k.match(/-H\s+['"]([^'"]+)['"]/)[1].split(": ");_[D]=S}),{url:(t==null?void 0:t[0])||"",method:(a==null?void 0:a[1])||"GET",headers:_,data:(i==null?void 0:i[2])||null}},b=e=>`const { spec } = require('pactum');

describe('API Test', () => {
    it('should make the API call successfully', async () => {
        await spec()
            .${e.method.toLowerCase()}('${e.url}')
            ${Object.keys(e.headers).length>0?`.withHeaders(${JSON.stringify(e.headers,null,8)})`:""}
            ${e.data?`.withJson(${e.data})`:""}
            .expectStatus(200);
    });
});`,f=e=>`const { spec } = require('pactum');

describe('API Test', () => {
    test('should make the API call successfully', async () => {
        await spec()
            .${e.method.toLowerCase()}('${e.url}')
            ${Object.keys(e.headers).length>0?`.withHeaders(${JSON.stringify(e.headers,null,8)})`:""}
            ${e.data?`.withJson(${e.data})`:""}
            .expectStatus(200);
    });
});`,g=e=>`// features/api.feature
Feature: API Testing
    Scenario: Make API call
        When I make an API call
        Then I should receive a successful response

// step_definitions/api_steps.js
const { spec } = require('pactum');

When('I make an API call', async function () {
    this.response = await spec()
        .${e.method.toLowerCase()}('${e.url}')
        ${Object.keys(e.headers).length>0?`.withHeaders(${JSON.stringify(e.headers,null,8)})`:""}
        ${e.data?`.withJson(${e.data})`:""}
});

Then('I should receive a successful response', async function () {
    await this.response.expectStatus(200);
});`,A=()=>{try{const e=y(l.value);if(!e.url)return;let t="";switch(c.value){case"mocha":t=b(e);break;case"jest":t=f(e);break;case"cucumber":t=g(e);break}n.value=t}catch(e){n.value=`Error parsing curl command: ${e.message}`}},T=async()=>{try{await navigator.clipboard.writeText(n.value),alert("Code copied to clipboard!")}catch{alert("Failed to copy code to clipboard")}};return(e,t)=>(u(),d("div",R,[s("div",J,[U,C(s("textarea",{id:"curlInput","onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),placeholder:"Enter your curl command here...",rows:"5"},null,512),[[I,l.value]]),s("div",j,[L,C(s("select",{id:"testRunner","onUpdate:modelValue":t[1]||(t[1]=a=>c.value=a)},H,512),[[x,c.value]])]),s("button",{class:"convert-button",onClick:A}," Convert "),s("button",{class:"convert-button clear",onClick:h}," Clear ")]),n.value?(u(),d("div",B,[s("div",{class:"output-header"},[M,s("button",{class:"copy-button",onClick:T}," Copy Code ")]),s("pre",null,[s("code",null,E(n.value),1)])])):F("",!0)]))}},W=w(G,[["__scopeId","data-v-20936d1e"]]),X=v('<h1 id="curl-to-pactumjs-converter" tabindex="-1">cURL to PactumJS Converter <a class="header-anchor" href="#curl-to-pactumjs-converter" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>cURL to PactumJS converter is still in Beta/experimental mode. Not all features might work as expected. If you see any issues, please start a discussion <a href="https://github.com/pactumjs/pactum/discussions/new/choose" target="_blank" rel="noreferrer">here</a></p></div><p>Convert your simple cURL commands to PactumJS tests with support for multiple test runners.</p><h2 id="usage-instructions" tabindex="-1">Usage Instructions <a class="header-anchor" href="#usage-instructions" aria-hidden="true">#</a></h2><ol><li>Paste your cURL command in the input field</li><li>Select your preferred test runner (Mocha, Jest, or Cucumber.js)</li><li>Click &quot;Convert&quot; to generate the test code</li><li>Copy the generated code using the &quot;Copy Code&quot; button</li></ol><h2 id="curl-converter" tabindex="-1">cURL Converter <a class="header-anchor" href="#curl-converter" aria-hidden="true">#</a></h2>',6),z=v(`<h2 id="supported-features" tabindex="-1">Supported Features <a class="header-anchor" href="#supported-features" aria-hidden="true">#</a></h2><ul><li>HTTP Methods (GET, POST, PUT, DELETE, etc.)</li><li>Headers</li><li>Request Body</li><li>Multiple test runner support: <ul><li>Mocha with Chai assertions</li><li>Jest</li><li>Cucumber.js</li></ul></li></ul><h2 id="example-curl-command" tabindex="-1">Example cURL Command <a class="header-anchor" href="#example-curl-command" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://api.example.com/data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization: Bearer token123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;key&quot;: &quot;value&quot;}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,4),Y=JSON.parse('{"title":"cURL to PactumJS Converter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage Instructions","slug":"usage-instructions","link":"#usage-instructions","children":[]},{"level":2,"title":"cURL Converter","slug":"curl-converter","link":"#curl-converter","children":[]},{"level":2,"title":"Supported Features","slug":"supported-features","link":"#supported-features","children":[]},{"level":2,"title":"Example cURL Command","slug":"example-curl-command","link":"#example-curl-command","children":[]}],"relativePath":"tools/converter.md","lastUpdated":1731322233000}'),K={name:"tools/converter.md"},Z=Object.assign(K,{setup(r){return(l,c)=>(u(),d("div",null,[X,q(W),z]))}});export{Y as __pageData,Z as default};
