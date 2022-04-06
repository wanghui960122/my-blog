import{_ as n,c as a,o as s,d as t}from"./app.912614e9.js";const k='{"title":"html\u5E38\u2EC5\u517C\u5BB9\u6027\u95EE\u9898\uFF1F","description":"","frontmatter":"title css html\u5E38\u2EC5\u517C\u5BB9\u6027\u95EE\u9898\uFF1F","headers":[],"relativePath":"Technology/CSS/45.md","lastUpdated":1649138781560}',e={},o=t(`<h1 id="html\u5E38\u2EC5\u517C\u5BB9\u6027\u95EE\u9898\uFF1F" tabindex="-1">html\u5E38\u2EC5\u517C\u5BB9\u6027\u95EE\u9898\uFF1F <a class="header-anchor" href="#html\u5E38\u2EC5\u517C\u5BB9\u6027\u95EE\u9898\uFF1F" aria-hidden="true">#</a></h1><div class="language-css"><pre><code><span class="token selector">1.\u53CC\u8FB9\u8DDDBUG float\u5F15\u8D77\u7684 \u4F7F\u2F64display
2.3\u50CF\u7D20\u95EE\u9898 \u4F7F\u2F64float\u5F15\u8D77\u7684 \u4F7F\u2F64dislpay:inline -3px
3.\u8D85\u94FE\u63A5hover \u70B9\u51FB\u540E\u5931\u6548 \u4F7F\u2F64\u6B63\u786E\u7684\u4E66\u5199\u987A\u5E8F link visited hover active
4.IE z-index\u95EE\u9898 \u7ED9\u2F57\u7EA7\u6DFB\u52A0position:relative
5.Png \u900F\u660E \u4F7F\u2F64js\u4EE3\u7801 \u6539
6.Min-height \u6700\u2F29\u2FBC\u5EA6 \uFF01Important \u89E3\u51B3\u2019
7.select \u5728ie6\u4E0B\u906E\u76D6 \u4F7F\u2F64iframe\u5D4C\u5957
8.\u4E3A\u4EC0\u4E48\u6CA1\u6709\u529E\u6CD5\u5B9A\u4E491px\u5DE6\u53F3\u7684\u5BBD\u5EA6\u5BB9\u5668\uFF08IE6\u9ED8\u8BA4\u7684\u2F8F\u2FBC\u9020\u6210\u7684\uFF0C\u4F7F\u2F64over:hidden,zoom:0.08
line-height:1px\uFF09
9.IE5-8\u4E0D\u2F40\u6301opacity\uFF0C\u89E3\u51B3\u529E\u6CD5\uFF1A
.opacity</span> <span class="token punctuation">{</span>
<span class="token property">opacity</span><span class="token punctuation">:</span> 0.4
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">alpha</span><span class="token punctuation">(</span>opacity=60<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* for IE5-7 */</span>
<span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token string">&quot;progid:DXImageTransform.Microsoft.Alpha(Opacity=60)&quot;</span><span class="token punctuation">;</span> <span class="token comment">/* for IE 8*/</span>
<span class="token punctuation">}</span>
10. <span class="token property">IE6\u4E0D\u2F40\u6301PNG\u900F\u660E\u80CC\u666F\uFF0C\u89E3\u51B3\u529E\u6CD5</span><span class="token punctuation">:</span> IE6\u4E0B\u4F7F\u2F64gif\u56FE\u2F5A
</code></pre></div>`,2),p=[o];function c(i,l,r,d,u,_){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{k as __pageData,m as default};
