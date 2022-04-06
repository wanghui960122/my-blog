import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const f='{"title":"\u539F\u2F63 JS \u7684 window.onload \u4E0E Jquery \u7684$(document).ready(function(){})\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u5982\u4F55\u2F64\u539F\u2F63 JS \u5B9E\u73B0 Jq \u7684 ready \u2F45\u6CD5\uFF1F","description":"","frontmatter":"title JS \u539F\u2F63JS\u7684window.onload\u4E0EJquery\u7684$(document).ready(function(){})\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u5982\u4F55\u2F64\u539F\u2F63JS \u5B9E\u73B0Jq\u7684ready\u2F45\u6CD5\uFF1F","headers":[],"relativePath":"Technology/JS/80.md","lastUpdated":1649161723941}',p={},o=t(`<h1 id="\u539F\u2F63-js-\u7684-window-onload-\u4E0E-jquery-\u7684-document-ready-function-\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u5982\u4F55\u2F64\u539F\u2F63-js-\u5B9E\u73B0-jq-\u7684-ready-\u2F45\u6CD5\uFF1F" tabindex="-1">\u539F\u2F63 JS \u7684 window.onload \u4E0E Jquery \u7684$(document).ready(function(){})\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u5982\u4F55\u2F64\u539F\u2F63 JS \u5B9E\u73B0 Jq \u7684 ready \u2F45\u6CD5\uFF1F <a class="header-anchor" href="#\u539F\u2F63-js-\u7684-window-onload-\u4E0E-jquery-\u7684-document-ready-function-\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u5982\u4F55\u2F64\u539F\u2F63-js-\u5B9E\u73B0-jq-\u7684-ready-\u2F45\u6CD5\uFF1F" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// window.onload()\u2F45\u6CD5\u662F\u5FC5\u987B\u7B49\u5230\u2EDA\u2FAF\u5185\u5305\u62EC\u56FE\u2F5A\u7684\u6240\u6709\u5143\u7D20\u52A0\u8F7D\u5B8C\u6BD5\u540E\u624D\u80FD\u6267\u2F8F\u3002</span>
<span class="token comment">// $(document).ready()\u662FDOM\u7ED3\u6784\u7ED8\u5236\u5B8C\u6BD5\u540E\u5C31\u6267\u2F8F\uFF0C\u4E0D\u5FC5\u7B49\u5230\u52A0\u8F7D\u5B8C\u6BD5\u3002</span>
<span class="token comment">/*
 * \u4F20\u9012\u51FD\u6570\u7ED9whenReady()
 * \u5F53\u2F42\u6863\u89E3\u6790\u5B8C\u6BD5\u4E14\u4E3A\u64CD\u4F5C\u51C6\u5907\u5C31\u7EEA\u65F6\uFF0C\u51FD\u6570\u4F5C\u4E3Adocument\u7684\u2F45\u6CD5\u8C03\u2F64
 */</span>
<span class="token keyword">var</span> whenReady <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DEwhenReady()\u51FD\u6570</span>
  <span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u83B7\u5F97\u4E8B\u4EF6\u65F6\uFF0C\u8981\u8FD0\u2F8F\u7684\u51FD\u6570</span>
  <span class="token keyword">var</span> ready <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u89E6\u53D1\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u65F6,\u5207\u6362\u4E3Atrue</span>
  <span class="token comment">//\u5F53\u2F42\u6863\u5C31\u7EEA\u65F6,\u8C03\u2F64\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
  <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ready<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">//\u786E\u4FDD\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u53EA\u5B8C\u6574\u8FD0\u2F8F\u2F00\u6B21</span>
    <span class="token comment">//\u5982\u679C\u53D1\u2F63onreadystatechange\u4E8B\u4EF6\uFF0C\u4F46\u5176\u72B6\u6001\u4E0D\u662Fcomplete\u7684\u8BDD,\u90A3\u4E48\u2F42\u6863\u5C1A\u672A\u51C6\u5907\u597D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;onreadystatechange&quot;</span> <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token string">&quot;complete&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u8FD0\u2F8F\u6240\u6709\u6CE8\u518C\u51FD\u6570</span>
    <span class="token comment">//\u6CE8\u610F\u6BCF\u6B21\u90FD\u8981\u8BA1\u7B97funcs.length</span>
    <span class="token comment">//\u4EE5\u9632\u8FD9\u4E9B\u51FD\u6570\u7684\u8C03\u2F64\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6CE8\u518C\u66F4\u591A\u7684\u51FD\u6570</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> funcs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5B8C\u6574\u6267\u2F8F,\u5207\u6362ready\u72B6\u6001, \u5E76\u79FB\u9664\u6240\u6709\u51FD\u6570</span>
    ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    funcs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u4E3A\u63A5\u6536\u5230\u7684\u4EFB\u4F55\u4E8B\u4EF6\u6CE8\u518C\u5904\u7406\u7A0B\u5E8F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;readystatechange&quot;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//IE9+</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onreadystatechange&quot;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onload&quot;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u8FD4\u56DEwhenReady()\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ready<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      funcs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4E0A\u8FF0\u4EE3\u7801\u2F17\u5206\u96BE\u61C2\uFF0C\u4E0B\u2FAF\u8FD9\u4E2A\u7B80\u5316\u7248\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6807\u51C6\u6D4F\u89C8\u5668</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
      <span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6CE8\u9500\u4E8B\u4EF6, \u907F\u514D\u53CD\u590D\u89E6\u53D1</span>
        document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>
          <span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span>
          arguments<span class="token punctuation">.</span>callee<span class="token punctuation">,</span>
          <span class="token boolean">false</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6267\u2F8F\u51FD\u6570</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">false</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//IE</span>
    document<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onreadystatechange&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token string">&quot;complete&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onreadystatechange&quot;</span><span class="token punctuation">,</span> arguments<span class="token punctuation">.</span>callee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u51FD\u6570\u6267\u2F8F</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var y=n(p,[["render",e]]);export{f as __pageData,y as default};
