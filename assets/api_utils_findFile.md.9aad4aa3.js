import{_ as s,o as a,c as e,a as n}from"./app.c6d99118.js";const y=JSON.parse('{"title":"findFile","description":"","frontmatter":{"tags":["file","find file","search file"]},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"✅  Correct Usage","slug":"✅-correct-usage","link":"#✅-correct-usage","children":[]}]},{"level":2,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"Reading a JSON File","slug":"reading-a-json-file","link":"#reading-a-json-file","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"api/utils/findFile.md","lastUpdated":1722659877000}'),l={name:"api/utils/findFile.md"},t=n(`<h1 id="findfile" tabindex="-1">findFile <a class="header-anchor" href="#findfile" aria-hidden="true">#</a></h1><p>Finds a file recursively in a given path.</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">findFile</span><span style="color:#A6ACCD;">(name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">findFile</span><span style="color:#A6ACCD;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> path)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="✅-correct-usage" tabindex="-1">✅ Correct Usage <a class="header-anchor" href="#✅-correct-usage" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">findFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">findFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path/to/the/dir</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><h4 id="name-string" tabindex="-1">&gt; name (string) <a class="header-anchor" href="#name-string" aria-hidden="true">#</a></h4><p>Name of the file to find.</p><h4 id="path-string" tabindex="-1">&gt; path (string) <a class="header-anchor" href="#path-string" aria-hidden="true">#</a></h4><p>Path to the directory to search in. Defaults to data directory - <code>data</code>.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="reading-a-json-file" tabindex="-1">Reading a JSON File <a class="header-anchor" href="#reading-a-json-file" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> utils </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pactum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2><ul><li><a href="/api/settings/setDataDirectory.html">setDataDirectory</a></li></ul>`,17),r=[t];function p(i,o,c,d,h,D){return a(),e("div",null,r)}const u=s(l,[["render",p]]);export{y as __pageData,u as default};
