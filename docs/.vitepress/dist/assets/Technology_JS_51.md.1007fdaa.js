import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const m='{"title":"\u9636\u4E58\u51FD\u6570","description":"","frontmatter":"title JS \u9636\u4E58\u51FD\u6570","headers":[],"relativePath":"Technology/JS/51.md","lastUpdated":1649160286081}',p={},o=t(`<h1 id="\u9636\u4E58\u51FD\u6570" tabindex="-1">\u9636\u4E58\u51FD\u6570 <a class="header-anchor" href="#\u9636\u4E58\u51FD\u6570" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">//\u539F\u578B\u2F45\u6CD5</span>
<span class="token class-name">Number</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">N</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    re <span class="token operator">*=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> re<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token constant">N</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
