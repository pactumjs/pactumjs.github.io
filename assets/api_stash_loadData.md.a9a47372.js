import{_ as s,o as a,c as n,a as e}from"./app.4d6751e0.js";const F=JSON.parse('{"title":"loadData","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"✅  Correct Usage","slug":"✅-correct-usage","link":"#✅-correct-usage","children":[]}]},{"level":2,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"api/stash/loadData.md","lastUpdated":1659254614000}'),l={name:"api/stash/loadData.md"},p=e(`<h1 id="loaddata" tabindex="-1">loadData <a class="header-anchor" href="#loaddata" aria-hidden="true">#</a></h1><p>Loads data templates and data maps from file system.</p><ul><li>Group your templates &amp; maps inside <code>templates</code> &amp; <code>maps</code> folders.</li><li>If not placed under above mentioned folders, add <code>.template</code> or <code>.map</code> as a suffix to the json files based on their type.</li></ul><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">maps</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">User.json</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">templates</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">Address.json</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">Bank.template.json</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">Army.map.json</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">(folder_path)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="✅-correct-usage" tabindex="-1">✅ Correct Usage <a class="header-anchor" href="#✅-correct-usage" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// use default path \`./data\`</span></span>
<span class="line"><span style="color:#A6ACCD;">stash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">stash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./templates</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><h4 id="folder-path-string" tabindex="-1">&gt; folder_path <em>(string)</em> <a class="header-anchor" href="#folder-path-string" aria-hidden="true">#</a></h4><p>Path of the folder to load templates and maps.</p><blockquote><p>Defaults to <code>./data</code></p></blockquote><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> stash</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spec </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pactum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">stash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">spec</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://reqres.in/api/users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">withJson</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$M{User.name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">job</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$M{User.job}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,16),o=[p];function t(r,c,i,d,D,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
