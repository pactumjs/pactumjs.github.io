import{_ as w,r as p,o as u,c as d,d as s,w as C,v as I,e as x,t as E,f as F,p as P,g as $,b as q,a as v}from"./app.86052317.js";const o=r=>(P("data-v-cdb2364c"),r=r(),$(),r),R={class:"converter-container"},J={class:"input-section"},U=o(()=>s("label",{for:"curlInput"},"Curl Command",-1)),j={class:"test-runner-select"},L=o(()=>s("label",{for:"testRunner"},"Test Runner",-1)),N=o(()=>s("option",{value:"mocha"},"Mocha",-1)),O=o(()=>s("option",{value:"jest"},"Jest",-1)),V=o(()=>s("option",{value:"cucumber"},"Cucumber.js",-1)),H=[N,O,V],B={key:0,class:"output-section"},M=o(()=>s("h3",null,"Generated Test Code",-1)),G={__name:"Converter",setup(r){const l=p(""),c=p("mocha"),n=p(""),h=()=>{n.value=""},y=e=>{if(!e)return h(),"";const t=e.match(/https?:\/\/[^\s"']+/),a=e.match(/-X\s+(\w+)/),m=e.match(/-H\s+['"]([^'"]+)['"]/g),i=e.match(/--data\s+(['"])(.*?)\1/),_={};return m&&m.forEach(k=>{const[D,S]=k.match(/-H\s+['"]([^'"]+)['"]/)[1].split(": ");_[D]=S}),{url:(t==null?void 0:t[0])||"",method:(a==null?void 0:a[1])||"GET",headers:_,data:(i==null?void 0:i[2])||null}},b=e=>`const { spec } = require('pactum');

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
});`,A=()=>{try{const e=y(l.value);if(!e.url)return;let t="";switch(c.value){case"mocha":t=b(e);break;case"jest":t=f(e);break;case"cucumber":t=g(e);break}n.value=t}catch(e){n.value=`Error parsing curl command: ${e.message}`}},T=async()=>{try{await navigator.clipboard.writeText(n.value),alert("Code copied to clipboard!")}catch{alert("Failed to copy code to clipboard")}};return(e,t)=>(u(),d("div",R,[s("div",J,[U,C(s("textarea",{id:"curlInput","onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),placeholder:"Enter your curl command here...",rows:"5"},null,512),[[I,l.value]]),s("div",j,[L,C(s("select",{id:"testRunner","onUpdate:modelValue":t[1]||(t[1]=a=>c.value=a)},H,512),[[x,c.value]])]),s("button",{class:"convert-button",onClick:A}," Convert "),s("button",{class:"convert-button",onClick:h}," Clear ")]),n.value?(u(),d("div",B,[s("div",{class:"output-header"},[M,s("button",{class:"copy-button",onClick:T}," Copy Code ")]),s("pre",null,[s("code",null,E(n.value),1)])])):F("",!0)]))}},W=w(G,[["__scopeId","data-v-cdb2364c"]]),X=v("",6),z=v("",4),Y=JSON.parse('{"title":"cURL to PactumJS Converter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage Instructions","slug":"usage-instructions","link":"#usage-instructions","children":[]},{"level":2,"title":"cURL Converter","slug":"curl-converter","link":"#curl-converter","children":[]},{"level":2,"title":"Supported Features","slug":"supported-features","link":"#supported-features","children":[]},{"level":2,"title":"Example cURL Command","slug":"example-curl-command","link":"#example-curl-command","children":[]}],"relativePath":"tools/converter.md","lastUpdated":1731322233000}'),K={name:"tools/converter.md"},Z=Object.assign(K,{setup(r){return(l,c)=>(u(),d("div",null,[X,q(W),z]))}});export{Y as __pageData,Z as default};
