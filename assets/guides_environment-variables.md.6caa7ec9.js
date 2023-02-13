import{_ as e,o as s,c as a,a as t}from"./app.4d6751e0.js";const b=JSON.parse('{"title":"Environment Variables","description":"","frontmatter":{},"headers":[{"level":2,"title":"List of Environment Variables","slug":"list-of-environment-variables","link":"#list-of-environment-variables","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"✅  Correct Usage","slug":"✅-correct-usage","link":"#✅-correct-usage","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"guides/environment-variables.md","lastUpdated":1676230115000}'),n={name:"guides/environment-variables.md"},l=t(`<h1 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h1><p>PactumJS supports setting default values to configuration parameters via Envrionment variables.</p><h2 id="list-of-environment-variables" tabindex="-1">List of Environment Variables <a class="header-anchor" href="#list-of-environment-variables" aria-hidden="true">#</a></h2><table><thead><tr><th>Variable Name</th><th>Defaults</th><th>Description</th></tr></thead><tbody><tr><td><code>PACTUM_MOCK_HOST</code></td><td><code>0.0.0.0</code></td><td>Mock Server Hostname/Interface to run on</td></tr><tr><td><code>PACTUM_MOCK_PORT</code></td><td><code>9393</code></td><td>Mock server port</td></tr><tr><td><code>PACTUM_REQUEST_BASE_URL</code></td><td><code>Empty string</code></td><td>Sets request base url for all requests</td></tr><tr><td><code>PACTUM_REQUEST_TIMEOUT</code></td><td><code>3000</code> ms</td><td>Sets default timeout of requests</td></tr><tr><td><code>PACTUM_RESPONSE_TIME</code></td><td><code>null</code></td><td>Sets default expected response time</td></tr><tr><td><code>PACTUM_RESPONSE_STATUS</code></td><td><code>null</code></td><td>Sets default expected response status code</td></tr></tbody></table><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="✅-correct-usage" tabindex="-1">✅ Correct Usage <a class="header-anchor" href="#✅-correct-usage" aria-hidden="true">#</a></h3><p>Setting ENV variables from shell or CI/CD.</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Set the environment variable from shell as shown in example below</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PACTUM_MOCK_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PACTUM_MOCK_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">9001</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PACTUM_REQUEST_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://example.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Adding to .env file</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># contents in .env file</span></span>
<span class="line"><span style="color:#A6ACCD;">PACTUM_MOCK_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">PACTUM_MOCK_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">9001</span></span>
<span class="line"><span style="color:#A6ACCD;">PACTUM_REQUEST_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://example.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2><ul><li><a href="/api/requests/spec.html">API</a></li><li><a href="/api/settings/setDefaultTimeout.html">setDefaultTimeout</a></li><li><a href="/api/settings/setBaseUrl.html">setBaseUrl</a></li></ul>`,12),r=[l];function o(i,c,d,p,h,u){return s(),a("div",null,r)}const _=e(n,[["render",o]]);export{b as __pageData,_ as default};
