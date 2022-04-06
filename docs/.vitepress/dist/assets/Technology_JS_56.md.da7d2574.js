import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const m='{"title":"\u8BA1\u7B97\u5B57\u7B26\u4E32\u5B57\u8282\u6570","description":"","frontmatter":"title JS \u8BA1\u7B97\u5B57\u7B26\u4E32\u5B57\u8282\u6570","headers":[],"relativePath":"Technology/JS/56.md","lastUpdated":1649160536114}',p={},o=t(`<h1 id="\u8BA1\u7B97\u5B57\u7B26\u4E32\u5B57\u8282\u6570" tabindex="-1">\u8BA1\u7B97\u5B57\u7B26\u4E32\u5B57\u8282\u6570 <a class="header-anchor" href="#\u8BA1\u7B97\u5B57\u7B26\u4E32\u5B57\u8282\u6570" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arguments<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">==</span> s<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> l <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> l <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//charCodeAt()\u5F97\u5230\u7684\u662FunCode\u7801</span>
  <span class="token punctuation">}</span> <span class="token comment">//\u6C49\u5B57\u7684unCode\u7801\u2F24\u4E8E 255bit \u5C31\u662F\u4E24\u4E2A\u5B57\u8282</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};