import{_ as t,o as e,c as d,a as r}from"./app.8cee0e61.js";const _=JSON.parse('{"title":"Interaction","description":"","frontmatter":{},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]}],"relativePath":"api/mock/interaction.md","lastUpdated":1688137409000}'),s={name:"api/mock/interaction.md"},a=r('<h1 id="interaction" tabindex="-1">Interaction <a class="header-anchor" href="#interaction" aria-hidden="true">#</a></h1><p>An <strong>interaction</strong> adds behavior to the mock server.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>id of the interaction</td></tr><tr><td>strict</td><td>enable/disable strict matching</td></tr><tr><td>provider</td><td>name of the provider</td></tr><tr><td>flow</td><td>name of the flow</td></tr><tr><td>background</td><td>is a background call</td></tr><tr><td>request</td><td>request details</td></tr><tr><td>request.method</td><td>HTTP method</td></tr><tr><td>request.path</td><td>api path</td></tr><tr><td>request.pathParams</td><td>api path params</td></tr><tr><td>request.headers</td><td>request headers</td></tr><tr><td>request.cookies</td><td>request cookies</td></tr><tr><td>request.queryParams</td><td>query parameters</td></tr><tr><td>request.body</td><td>request body</td></tr><tr><td>request.graphQL</td><td>graphQL details</td></tr><tr><td>request.graphQL.query</td><td>graphQL query</td></tr><tr><td>request.graphQL.variables</td><td>graphQL variables</td></tr><tr><td>response</td><td>response details</td></tr><tr><td>response.status</td><td>response status code</td></tr><tr><td>response.headers</td><td>response headers</td></tr><tr><td>response.cookies</td><td>response cookies</td></tr><tr><td>response.body</td><td>response body</td></tr><tr><td>response.file</td><td>path of the file to return</td></tr><tr><td>response.fixedDelay</td><td>delays the response by ms</td></tr><tr><td>response.randomDelay</td><td>random delay details</td></tr><tr><td>response.randomDelay.min</td><td>delay the response by min ms</td></tr><tr><td>response.randomDelay.max</td><td>delay the response by max ms</td></tr><tr><td>response.onCall</td><td>response on consecutive calls</td></tr><tr><td>response(req, res)</td><td>response with custom function</td></tr><tr><td>expects</td><td>expectations are used in component testing</td></tr><tr><td>expects.disable</td><td>disable checks</td></tr><tr><td>expects.exercised</td><td>check exercised (default: <code>true</code>)</td></tr><tr><td>expects.callCount</td><td>check call count (default: <code>&gt; 0</code>)</td></tr><tr><td>stores</td><td>stores data from the request</td></tr></tbody></table>',4),o=[a];function n(i,c,p,h,l,u){return e(),d("div",null,o)}const b=t(s,[["render",n]]);export{_ as __pageData,b as default};
