import{_ as s,o as a,c as n,a as e}from"./app.4d6751e0.js";const C=JSON.parse('{"title":"addCaptureHandler","description":"","frontmatter":{"tags":["capture","handler"]},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"✅  Correct Usage","slug":"✅-correct-usage","link":"#✅-correct-usage","children":[]}]},{"level":2,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"returns","slug":"returns","link":"#returns","children":[]}]}],"relativePath":"api/handlers/addCaptureHandler.md","lastUpdated":1657124511000}'),l={name:"api/handlers/addCaptureHandler.md"},p=e(`<h1 id="addcapturehandler" tabindex="-1">addCaptureHandler <a class="header-anchor" href="#addcapturehandler" aria-hidden="true">#</a></h1><p><strong>Capture Handlers</strong> helps us to capture data from the response. Use this inside <a href="/api/requests/returns.html">returns</a> or <a href="/api/requests/stores.html">stores</a> or <a href="/api/requests/records.html">records</a></p><ul><li>Handler name will be prefixed with <code>#</code> while using in json.</li></ul><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>Strings starting with <code>#</code> will be automatically treated as a Capture Handler.</p></div><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">addCaptureHandler</span><span style="color:#A6ACCD;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cb)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="✅-correct-usage" tabindex="-1">✅ Correct Usage <a class="header-anchor" href="#✅-correct-usage" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">addCaptureHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firstPostId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><h4 id="name-string" tabindex="-1">&gt; name <em>(string)</em> <a class="header-anchor" href="#name-string" aria-hidden="true">#</a></h4><p>Name of the capture handler</p><h4 id="cb-function" tabindex="-1">&gt; cb <em>(function)</em> <a class="header-anchor" href="#cb-function" aria-hidden="true">#</a></h4><p>Callback function. It will receive a <code>context</code> object that has request <strong>(req)</strong> and response <strong>(res)</strong> as properties.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="returns" tabindex="-1">returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spec </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pactum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addCaptureHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firstPostId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> postID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> pactum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">spec</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://jsonplaceholder.typicode.com/posts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">expectStatus</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">returns</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#firstPostId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> pactum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">spec</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">http://jsonplaceholder.typicode.com/posts/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">postID</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/comments</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">expectStatus</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,17),o=[p];function r(t,c,i,D,d,y){return a(),n("div",null,o)}const A=s(l,[["render",r]]);export{C as __pageData,A as default};
