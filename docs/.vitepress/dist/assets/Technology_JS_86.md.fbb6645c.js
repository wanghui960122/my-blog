import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const m='{"title":"\u5199\u2F00\u4E2A\u901A\u2F64\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570","description":"","frontmatter":"title JS \u5199\u2F00\u4E2A\u901A\u2F64\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570","headers":[],"relativePath":"Technology/JS/86.md","lastUpdated":1649161972953}',p={},o=t(`<h1 id="\u5199\u2F00\u4E2A\u901A\u2F64\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570" tabindex="-1">\u5199\u2F00\u4E2A\u901A\u2F64\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570 <a class="header-anchor" href="#\u5199\u2F00\u4E2A\u901A\u2F64\u7684\u4E8B\u4EF6\u4FA6\u542C\u5668\u51FD\u6570" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// event(\u4E8B\u4EF6)\u2F2F\u5177\u96C6\uFF0C\u6765\u6E90\uFF1Ahttps://github.com/markyun</span>
markyun<span class="token punctuation">.</span>Event <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u2EDA\u2FAF\u52A0\u8F7D\u5B8C\u6210\u540E</span>
  <span class="token function-variable function">readyEvent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fn <span class="token operator">=</span> document<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> oldonload <span class="token operator">=</span> window<span class="token punctuation">.</span>onload<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>onload <span class="token operator">!=</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>onload <span class="token operator">=</span> fn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">oldonload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u89C6\u80FD\u2F12\u5206\u522B\u4F7F\u2F64dom0||dom2||IE\u2F45\u5F0F \u6765\u7ED1\u5B9A\u4E8B\u4EF6</span>
  <span class="token comment">// \u53C2\u6570\uFF1A \u64CD\u4F5C\u7684\u5143\u7D20,\u4E8B\u4EF6\u540D\u79F0 ,\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
  <span class="token function-variable function">addEvent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u4E8B\u4EF6\u7C7B\u578B\u3001\u9700\u8981\u6267\u2F8F\u7684\u51FD\u6570\u3001\u662F\u5426\u6355\u6349</span>
      element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u79FB\u9664\u4E8B\u4EF6</span>
  <span class="token function-variable function">removeEvent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>removeEnentListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">removeEnentListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>datachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u963B\u2F4C\u4E8B\u4EF6 (\u4E3B\u8981\u662F\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u56E0\u4E3AIE\u4E0D\u2F40\u6301\u4E8B\u4EF6\u6355\u83B7)</span>
  <span class="token function-variable function">stopPropagation</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ev<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ev<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u53D6\u6D88\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u2F8F\u4E3A</span>
  <span class="token function-variable function">preventDefault</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83B7\u53D6\u4E8B\u4EF6\u2F6C\u6807</span>
  <span class="token function-variable function">getTarget</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83B7\u53D6event\u5BF9\u8C61\u7684\u5F15\u2F64\uFF0C\u53D6\u5230\u4E8B\u4EF6\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u786E\u4FDD\u968F\u65F6\u80FD\u4F7F\u2F64event\uFF1B</span>
  <span class="token function-variable function">getEvent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ev <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getEvent<span class="token punctuation">.</span>caller<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ev <span class="token operator">=</span> c<span class="token punctuation">.</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ev <span class="token operator">&amp;&amp;</span> Event <span class="token operator">==</span> ev<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        c <span class="token operator">=</span> c<span class="token punctuation">.</span>caller<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ev<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
