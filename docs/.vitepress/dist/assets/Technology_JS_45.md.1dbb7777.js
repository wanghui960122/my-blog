import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const f='{"title":"\u5224\u65AD\u2F00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u7EDF\u8BA1\u8FD9\u4E2A\u6B21\u6570","description":"","frontmatter":"title JS \u5224\u65AD\u2F00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u7EDF\u8BA1\u8FD9\u4E2A\u6B21\u6570","headers":[],"relativePath":"Technology/JS/45.md","lastUpdated":1649159946715}',p={},o=t(`<h1 id="\u5224\u65AD\u2F00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u7EDF\u8BA1\u8FD9\u4E2A\u6B21\u6570" tabindex="-1">\u5224\u65AD\u2F00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u7EDF\u8BA1\u8FD9\u4E2A\u6B21\u6570 <a class="header-anchor" href="#\u5224\u65AD\u2F00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u7EDF\u8BA1\u8FD9\u4E2A\u6B21\u6570" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;asdfssaaasasasasaa&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>json<span class="token punctuation">[</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    json<span class="token punctuation">[</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    json<span class="token punctuation">[</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> iMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> iIndex <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>json<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> iMax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    iMax <span class="token operator">=</span> json<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    iIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u662F:&quot;</span> <span class="token operator">+</span> iIndex <span class="token operator">+</span> <span class="token string">&quot;\u51FA\u73B0&quot;</span> <span class="token operator">+</span> iMax <span class="token operator">+</span> <span class="token string">&quot;\u6B21&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{f as __pageData,h as default};
