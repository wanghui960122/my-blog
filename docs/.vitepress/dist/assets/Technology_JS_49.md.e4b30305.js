import{_ as n,c as a,o as s,d as t}from"./app.912614e9.js";const m='{"title":"\u2F63\u6210 5 \u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570","description":"","frontmatter":"title JS \u2F63\u62105\u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570","headers":[],"relativePath":"Technology/JS/49.md","lastUpdated":1649160122562}',p={},o=t(`<h1 id="\u2F63\u6210-5-\u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570" tabindex="-1">\u2F63\u6210 5 \u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570 <a class="header-anchor" href="#\u2F63\u6210-5-\u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">//\u601D\u8DEF\uFF1A5\u4E2A\u4E0D\u540C\u7684\u6570\uFF0C\u6BCF\u2F63\u6210\u2F00\u6B21\u5C31\u548C\u524D\u2FAF\u7684\u6240\u6709\u6570\u5B57\u76F8\u2F50\u8F83\uFF0C\u5982\u679C\u6709\u76F8\u540C\u7684\uFF0C\u5219\u653E\u5F03\u5F53\u524D\u2F63\u6210\u7684\u6570\u5B57\uFF01</span>
<span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u8303\u56F4\u662F [1, 10]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> num1<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,r,i,d){return s(),a("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};