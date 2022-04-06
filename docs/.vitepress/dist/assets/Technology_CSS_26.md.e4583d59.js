import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const h='{"title":"\u8BF7\u89E3\u91CA\u2F00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u2F45\u5F0F","description":"","frontmatter":"title css \u8BF7\u89E3\u91CA\u2F00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u2F45\u5F0F","headers":[],"relativePath":"Technology/CSS/26.md","lastUpdated":1649138781545}',p={},o=t(`<h1 id="\u8BF7\u89E3\u91CA\u2F00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u2F45\u5F0F" tabindex="-1">\u8BF7\u89E3\u91CA\u2F00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u2F45\u5F0F <a class="header-anchor" href="#\u8BF7\u89E3\u91CA\u2F00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u2F45\u5F0F" aria-hidden="true">#</a></h1><div class="language-css"><pre><code><span class="token selector">\u6E05\u9664\u6D6E\u52A8\u662F\u4E3A\u4E86\u6E05\u9664\u4F7F\u2F64\u6D6E\u52A8\u5143\u7D20\u4EA7\u2F63\u7684\u5F71\u54CD\u3002\u6D6E\u52A8\u7684\u5143\u7D20\uFF0C\u2FBC\u5EA6\u4F1A\u584C\u9677\uFF0C\u2F7D\u2FBC\u5EA6\u7684\u584C\u9677\u4F7F\u6211\u4EEC\u2EDA\u2FAF
\u540E\u2FAF\u7684\u5E03\u5C40\u4E0D\u80FD\u6B63\u5E38\u663E\u2F70\u3002

1\u3001\u2F57\u7EA7div\u5B9A\u4E49height\uFF1B

2\u3001\u2F57\u7EA7div \u4E5F\u2F00\u8D77\u6D6E\u52A8\uFF1B

3\u3001\u5E38\u89C4\u7684\u4F7F\u2F64\u2F00\u4E2Aclass\uFF1B
.clearfix::before, .clearfix::after</span> <span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
*<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">4\u3001SASS\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u6D6E\u52A8\u5143\u7D20\u7684\u2F57\u7EA7div\u5B9A\u4E49\u4F2A\u7C7B:after
&amp;::after,&amp;::before</span><span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

\u89E3\u6790\u539F\u7406\uFF1A
1<span class="token punctuation">)</span> <span class="token property">display</span><span class="token punctuation">:</span>block \u4F7F\u2F63\u6210\u7684\u5143\u7D20\u4EE5\u5757\u7EA7\u5143\u7D20\u663E\u2F70<span class="token punctuation">,</span>\u5360\u6EE1\u5269\u4F59\u7A7A\u95F4<span class="token punctuation">;</span>
2<span class="token punctuation">)</span> <span class="token property">height</span><span class="token punctuation">:</span>0 \u907F\u514D\u2F63\u6210\u5185\u5BB9\u7834\u574F\u539F\u6709\u5E03\u5C40\u7684\u2FBC\u5EA6\u3002
3<span class="token punctuation">)</span> <span class="token property">visibility</span><span class="token punctuation">:</span>hidden \u4F7F\u2F63\u6210\u7684\u5185\u5BB9\u4E0D\u53EF\u2EC5\uFF0C\u5E76\u5141\u8BB8\u53EF\u80FD\u88AB\u2F63\u6210\u5185\u5BB9\u76D6\u4F4F\u7684\u5185\u5BB9\u53EF\u4EE5\u8FDB\u2F8F\u70B9\u51FB\u548C\u4EA4\u4E92<span class="token punctuation">;</span>
4\uFF09\u901A\u8FC7 <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;.&quot;</span>\u2F63\u6210\u5185\u5BB9\u4F5C\u4E3A\u6700\u540E\u2F00\u4E2A\u5143\u7D20\uFF0C\u2F84\u4E8Econtent\u2FA5\u2FAF\u662F\u70B9\u8FD8\u662F\u5176\u4ED6\u90FD\u662F\u53EF\u4EE5\u7684\uFF0C\u4F8B\u5982
oocss\u2FA5\u2FAF\u5C31\u6709\u7ECF\u5178\u7684 <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\u6709\u4E9B\u7248\u672C\u53EF\u80FDcontent \u2FA5\u2FAF\u5185\u5BB9\u4E3A\u7A7A<span class="token punctuation">,</span>\u2F00\u4E1D\u51B0\u51C9\u662F\u4E0D\u63A8\u8350\u8FD9\u6837\u505A
\u7684<span class="token punctuation">,</span>firefox\u76F4\u52307.0 <span class="token property">content</span><span class="token punctuation">:</span>\u201D&quot; \u4ECD\u7136\u4F1A\u4EA7\u2F63\u989D\u5916\u7684\u7A7A\u9699\uFF1B
5\uFF09zoom\uFF1A1 \u89E6\u53D1IE hasLayout\u3002\uFFFD
\u901A\u8FC7\u5206\u6790\u53D1\u73B0\uFF0C\u9664\u4E86clear\uFF1Aboth\u2F64\u6765\u95ED\u5408\u6D6E\u52A8\u7684\uFF0C\u5176\u4ED6\u4EE3\u7801\u2F46\u2FAE\u90FD\u662F\u4E3A\u4E86\u9690\u85CF\u6389content\u2F63\u6210\u7684\u5185
\u5BB9\uFF0C\u8FD9\u4E5F\u5C31\u662F\u5176\u4ED6\u7248\u672C\u7684\u95ED\u5408\u6D6E\u52A8\u4E3A\u4EC0\u4E48\u4F1A\u6709font-size\uFF1A0\uFF0Cline-height\uFF1A0\u3002
</code></pre></div>`,2),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{h as __pageData,y as default};
