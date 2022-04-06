import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const f='{"title":"\u77E5\u9053css\u6709\u4E2Acontent\u5C5E\u6027\u5417\uFF1F\u6709\u4EC0\u4E48\u4F5C\u2F64\uFF1F\u6709\u4EC0\u4E48\u5E94\u2F64\uFF1F","description":"","frontmatter":"title css \u77E5\u9053css\u6709\u4E2Acontent\u5C5E\u6027\u5417\uFF1F\u6709\u4EC0\u4E48\u4F5C\u2F64\uFF1F\u6709\u4EC0\u4E48\u5E94\u2F64\uFF1F","headers":[],"relativePath":"Technology/CSS/48.md","lastUpdated":1649138781562}',e={},p=t(`<h1 id="\u77E5\u9053css\u6709\u4E2Acontent\u5C5E\u6027\u5417\uFF1F\u6709\u4EC0\u4E48\u4F5C\u2F64\uFF1F\u6709\u4EC0\u4E48\u5E94\u2F64\uFF1F" tabindex="-1">\u77E5\u9053css\u6709\u4E2Acontent\u5C5E\u6027\u5417\uFF1F\u6709\u4EC0\u4E48\u4F5C\u2F64\uFF1F\u6709\u4EC0\u4E48\u5E94\u2F64\uFF1F <a class="header-anchor" href="#\u77E5\u9053css\u6709\u4E2Acontent\u5C5E\u6027\u5417\uFF1F\u6709\u4EC0\u4E48\u4F5C\u2F64\uFF1F\u6709\u4EC0\u4E48\u5E94\u2F64\uFF1F" aria-hidden="true">#</a></h1><div class="language-css"><pre><code><span class="token selector">css\u7684content\u5C5E\u6027\u4E13\u2ED4\u5E94\u2F64\u5728 before/after \u4F2A\u5143\u7D20\u4E0A\uFF0C\u2F64\u6765\u63D2\u2F0A\u2F63\u6210\u5185\u5BB9\u3002\u6700\u5E38\u2EC5\u7684\u5E94\u2F64\u662F\u5229
\u2F64\u4F2A\u7C7B\u6E05\u9664\u6D6E\u52A8\u3002
//\u2F00\u79CD\u5E38\u2EC5\u5229\u2F64\u4F2A\u7C7B\u6E05\u9664\u6D6E\u52A8\u7684\u4EE3\u7801
.clearfix:after</span> <span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span> //\u8FD9\u2FA5\u5229\u2F64\u5230\u4E86content\u5C5E\u6027
<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
*<span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

after\u4F2A\u5143\u7D20\u901A\u8FC7 content <span class="token property">\u5728\u5143\u7D20\u7684\u540E\u2FAF\u2F63\u6210\u4E86\u5185\u5BB9\u4E3A\u2F00\u4E2A\u70B9\u7684\u5757\u7EA7\u7D20\uFF0C\u518D\u5229\u2F64clear</span><span class="token punctuation">:</span>both\u6E05\u9664\u6D6E\u52A8\u3002
\u90A3\u4E48\u95EE\u9898\u7EE7\u7EED\u8FD8\u6709\uFF0C\u77E5\u9053css\u8BA1\u6570\u5668\uFF08\u5E8F\u5217\u6570\u5B57\u5B57\u7B26\u2F83\u52A8\u9012\u589E\uFF09\u5417\uFF1F\u5982\u4F55\u901A\u8FC7css content\u5C5E\u6027\u5B9E\u73B0css\u8BA1\u6570\u5668\uFF1F

\u7B54\u6848\uFF1Acss\u8BA1\u6570\u5668\u662F\u901A\u8FC7\u8BBE\u7F6Ecounter-reset \u3001counter-increment \u4E24\u4E2A\u5C5E\u6027 \u3001\u53CA
<span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>/<span class="token function">counters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u2F00\u4E2A\u2F45\u6CD5\u914D\u5408after / before \u4F2A\u7C7B\u5B9E\u73B0\u3002
</code></pre></div>`,2),c=[p];function o(r,u,l,i,k,_){return a(),s("div",null,c)}var h=n(e,[["render",o]]);export{f as __pageData,h as default};
