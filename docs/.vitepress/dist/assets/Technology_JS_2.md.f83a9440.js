import{_ as n,c as s,o as a,d as e}from"./app.912614e9.js";const y='{"title":"null\uFF0Cundefined \u7684\u533A\u522B\uFF1F","description":"","frontmatter":"title JS null\uFF0Cundefined \u7684\u533A\u522B\uFF1F","headers":[],"relativePath":"Technology/JS/2.md","lastUpdated":1649155335398}',o={},t=e(`<h1 id="null\uFF0Cundefined-\u7684\u533A\u522B\uFF1F" tabindex="-1">null\uFF0Cundefined \u7684\u533A\u522B\uFF1F <a class="header-anchor" href="#null\uFF0Cundefined-\u7684\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">null</span> \u8868\u2F70\u2F00\u4E2A\u5BF9\u8C61\u662F\u201C\u6CA1\u6709\u503C\u201D\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u503C\u4E3A\u201C\u7A7A\u201D\uFF1B
<span class="token keyword">undefined</span> <span class="token function">\u8868\u2F70\u2F00\u4E2A\u53D8\u91CF\u58F0\u660E\u4E86\u6CA1\u6709\u521D\u59CB\u5316</span><span class="token punctuation">(</span>\u8D4B\u503C<span class="token punctuation">)</span>\uFF1B
<span class="token keyword">undefined</span>\u4E0D\u662F\u2F00\u4E2A\u6709\u6548\u7684<span class="token constant">JSON</span>\uFF0C\u2F7D<span class="token keyword">null</span>\u662F\uFF1B
<span class="token keyword">undefined</span><span class="token function">\u7684\u7C7B\u578B</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">)</span>\u662F<span class="token keyword">undefined</span>\uFF1B
<span class="token keyword">null</span><span class="token function">\u7684\u7C7B\u578B</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">)</span>\u662Fobject\uFF1B
Javascript\u5C06\u672A\u8D4B\u503C\u7684\u53D8\u91CF\u9ED8\u8BA4\u503C\u8BBE\u4E3A<span class="token keyword">undefined</span>\uFF1B
Javascript\u4ECE\u6765\u4E0D\u4F1A\u5C06\u53D8\u91CF\u8BBE\u4E3A<span class="token keyword">null</span>\u3002\u5B83\u662F\u2F64\u6765\u8BA9\u7A0B\u5E8F\u5458\u8868\u660E\u67D0\u4E2A\u2F64<span class="token keyword">var</span>\u58F0\u660E\u7684\u53D8\u91CF\u65F6\u6CA1\u6709\u503C\u7684\u3002
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span>
<span class="token comment">//&quot;undefined&quot;</span>

<span class="token keyword">undefined</span> <span class="token operator">:</span>\u662F\u2F00\u4E2A\u8868\u2F70<span class="token string">&quot;\u2F46&quot;</span>\u7684\u539F\u59CB\u503C\u6216\u8005\u8BF4\u8868\u2F70<span class="token string">&quot;\u7F3A\u5C11\u503C&quot;</span>\uFF0C\u5C31\u662F\u6B64\u5904\u5E94\u8BE5\u6709\u2F00\u4E2A\u503C\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u5B9A
\u4E49\u3002\u5F53\u5C1D\u8BD5\u8BFB\u53D6\u65F6\u4F1A\u8FD4\u56DE <span class="token keyword">undefined</span>\uFF1B
\u4F8B\u5982\u53D8\u91CF\u88AB\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\uFF0C\u5C31\u7B49\u4E8E<span class="token keyword">undefined</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>
<span class="token comment">//&quot;object&quot;</span>

<span class="token keyword">null</span> <span class="token operator">:</span> <span class="token function">\u662F\u2F00\u4E2A\u5BF9\u8C61</span><span class="token punctuation">(</span>\u7A7A\u5BF9\u8C61<span class="token punctuation">,</span> \u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u548C\u2F45\u6CD5<span class="token punctuation">)</span>\uFF1B
\u4F8B\u5982\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8868\u2F70\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\uFF1B
\u6CE8\u610F\uFF1A
\u5728\u9A8C\u8BC1<span class="token keyword">null</span>\u65F6\uFF0C\u2F00\u5B9A\u8981\u4F7F\u2F64 <span class="token operator">===</span> \uFF0C\u56E0\u4E3A <span class="token operator">==</span> \u2F46\u6CD5\u5206\u522B <span class="token keyword">null</span> \u548C <span class="token keyword">undefined</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">// false</span>
\u518D\u6765\u2F00\u4E2A\u4F8B\u2F26\uFF1A
<span class="token keyword">null</span>
<span class="token constant">Q</span>\uFF1A\u6709\u5F20\u4E09\u8FD9\u4E2A\u2F08\u4E48\uFF1F
<span class="token constant">A</span>\uFF1A\u6709\uFF01
<span class="token constant">Q</span>\uFF1A\u5F20\u4E09\u6709\u623F\u2F26\u4E48\uFF1F
<span class="token constant">A</span>\uFF1A\u6CA1\u6709\uFF01
<span class="token keyword">undefined</span>
<span class="token constant">Q</span>\uFF1A\u6709\u5F20\u4E09\u8FD9\u4E2A\u2F08\u4E48\uFF1F
<span class="token constant">A</span>\uFF1A\u6709\uFF01
<span class="token constant">Q</span><span class="token operator">:</span> \u5F20\u4E09\u6709\u591A\u5C11\u5C81\uFF1F
<span class="token constant">A</span><span class="token operator">:</span> \u4E0D\u77E5\u9053\uFF08\u6CA1\u6709\u88AB\u544A\u8BC9\uFF09

</code></pre></div>`,2),p=[t];function c(l,k,d,r,u,i){return a(),s("div",null,p)}var w=n(o,[["render",c]]);export{y as __pageData,w as default};
