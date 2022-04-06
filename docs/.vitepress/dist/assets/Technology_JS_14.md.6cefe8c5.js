import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const f='{"title":"\u4E8B\u4EF6\u7ED1\u5B9A\u548C\u666E\u901A\u4E8B\u4EF6\u6709\u4EC0\u4E48\u533A\u522B","description":"","frontmatter":"title JS \u4E8B\u4EF6\u7ED1\u5B9A\u548C\u666E\u901A\u4E8B\u4EF6\u6709\u4EC0\u4E48\u533A\u522B","headers":[],"relativePath":"Technology/JS/14.md","lastUpdated":1649156211262}',p={},o=t(`<h1 id="\u4E8B\u4EF6\u7ED1\u5B9A\u548C\u666E\u901A\u4E8B\u4EF6\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1">\u4E8B\u4EF6\u7ED1\u5B9A\u548C\u666E\u901A\u4E8B\u4EF6\u6709\u4EC0\u4E48\u533A\u522B <a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A\u548C\u666E\u901A\u4E8B\u4EF6\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>\u666E\u901A\u6DFB\u52A0\u4E8B\u4EF6\u7684\u2F45\u6CD5\uFF1A
<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u6267\u2F8F\u4E0A\u2FAF\u7684\u4EE3\u7801\u53EA\u4F1Aalert <span class="token number">2</span>

\u4E8B\u4EF6\u7ED1\u5B9A\u2F45\u5F0F\u6DFB\u52A0\u4E8B\u4EF6\uFF1A
<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u6267\u2F8F\u4E0A\u2FAF\u7684\u4EE3\u7801\u4F1A\u5148alert <span class="token number">1</span> \u518D alert <span class="token number">2</span>

\u666E\u901A\u6DFB\u52A0\u4E8B\u4EF6\u7684\u2F45\u6CD5\u4E0D\u2F40\u6301\u6DFB\u52A0\u591A\u4E2A\u4E8B\u4EF6\uFF0C\u6700\u4E0B\u2FAF\u7684\u4E8B\u4EF6\u4F1A\u8986\u76D6\u4E0A\u2FAF\u7684\uFF0C\u2F7D\u4E8B\u4EF6\u7ED1\u5B9A
\uFF08addEventListener\uFF09\u2F45\u5F0F\u6DFB\u52A0\u4E8B\u4EF6\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\u3002
addEventListener\u4E0D\u517C\u5BB9\u4F4E\u7248\u672C<span class="token constant">IE</span>
\u666E\u901A\u4E8B\u4EF6\u2F46\u6CD5\u53D6\u6D88
addEventLisntener\u8FD8\u2F40\u6301\u4E8B\u4EF6\u5192\u6CE1<span class="token operator">+</span>\u4E8B\u4EF6\u6355\u83B7

</code></pre></div>`,2),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var b=n(p,[["render",e]]);export{f as __pageData,b as default};
