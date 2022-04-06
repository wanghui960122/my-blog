import{_ as n,c as s,o as a,d as e}from"./app.912614e9.js";const _='{"title":"\u8BF4\u8BF4 typeof \u4E0E instanceof \u533A\u522B?","description":"","frontmatter":"title JS \u8BF4\u8BF4 typeof \u4E0E instanceof \u533A\u522B?","headers":[],"relativePath":"Technology/JS/88.md","lastUpdated":1649162053168}',t={},o=e(`<h1 id="\u8BF4\u8BF4-typeof-\u4E0E-instanceof-\u533A\u522B" tabindex="-1">\u8BF4\u8BF4 typeof \u4E0E instanceof \u533A\u522B? <a class="header-anchor" href="#\u8BF4\u8BF4-typeof-\u4E0E-instanceof-\u533A\u522B" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>\u2F00\u3001<span class="token keyword">typeof</span>
<span class="token keyword">typeof</span>\u64CD\u4F5C\u7B26\u8FD4\u56DE\u2F00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u2F70\u672A\u7ECF\u8BA1\u7B97\u7684\u64CD\u4F5C\u6570\u7684\u7C7B\u578B<span class="token punctuation">.</span>
\u867D\u7136<span class="token keyword">typeof</span> <span class="token keyword">null</span>\u4E3Aobject\uFF0C\u4F46\u8FD9\u53EA\u662FJavaScript\u5B58\u5728\u7684\u2F00\u4E2A\u60A0\u4E45Bug\uFF0C\u4E0D\u4EE3\u8868<span class="token keyword">null</span>\u5C31\u662F\u5F15\u2F64\u6570\u636E\u7C7B
\u578B\uFF0C\u5E76\u4E14<span class="token keyword">null</span>\u672C\u2F9D\u4E5F\u4E0D\u662F\u5BF9\u8C61
\u5F15\u2F64\u7C7B\u578B\u6570\u636E\uFF0C\u2F64<span class="token keyword">typeof</span>\u6765\u5224\u65AD\u7684\u8BDD\uFF0C\u9664\u4E86<span class="token keyword">function</span>\u4F1A\u88AB\u8BC6\u522B\u51FA\u6765\u4E4B\u5916\uFF0C\u5176\u4F59\u7684\u90FD\u8F93\u51FAobject
\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5224\u65AD\u2F00\u4E2A\u53D8\u91CF\u662F\u5426\u5B58\u5728\uFF0C\u53EF\u4EE5\u4F7F\u2F64<span class="token keyword">typeof</span>

\u2F06\u3001<span class="token keyword">instanceof</span>
<span class="token class-name">instanceof</span>\u8FD0\u7B97\u7B26\u2F64\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A

\u4E09\u3001\u533A\u522B
<span class="token keyword">typeof</span>\u4E0E<span class="token keyword">instanceof</span>\u90FD\u662F\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u2F45\u6CD5\uFF0C\u533A\u522B\u5982\u4E0B\uFF1A
<span class="token keyword">typeof</span>\u4F1A\u8FD4\u56DE\u2F00\u4E2A\u53D8\u91CF\u7684\u57FA\u672C\u7C7B\u578B\uFF0C<span class="token keyword">instanceof</span>\u8FD4\u56DE\u7684\u662F\u2F00\u4E2A\u5E03\u5C14\u503C
<span class="token keyword">instanceof</span>\u53EF\u4EE5\u51C6\u786E\u5730\u5224\u65AD\u590D\u6742\u5F15\u2F64\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F\u4E0D\u80FD\u6B63\u786E\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B
\u2F7D<span class="token keyword">typeof</span>\u4E5F\u5B58\u5728\u5F0A\u7AEF\uFF0C\u5B83\u867D\u7136\u53EF\u4EE5\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF08<span class="token keyword">null</span>\u9664\u5916\uFF09\uFF0C\u4F46\u662F\u5F15\u2F64\u6570\u636E\u7C7B\u578B\u4E2D\uFF0C\u9664\u4E86funct
ion\u7C7B\u578B\u4EE5\u5916\uFF0C\u5176\u4ED6\u7684\u4E5F\u2F46\u6CD5\u5224\u65AD
\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u8FF0\u4E24\u79CD\u2F45\u6CD5\u90FD\u6709\u5F0A\u7AEF\uFF0C\u5E76\u4E0D\u80FD\u6EE1\u2F9C\u6240\u6709\u573A\u666F\u7684\u9700\u6C42
<span class="token class-name">\u5982\u679C\u9700\u8981\u901A\u2F64\u68C0\u6D4B\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u91C7\u2F64Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString\uFF0C\u8C03\u2F64\u8BE5\u2F45\u6CD5\uFF0C\u7EDF\u2F00\u8FD4\u56DE\u683C\u5F0F
\u201C<span class="token punctuation">[</span>object Xxx<span class="token punctuation">]</span>\u201D\u7684\u5B57\u7B26\u4E32
</code></pre></div>`,2),p=[o];function c(l,r,k,d,i,f){return a(),s("div",null,p)}var u=n(t,[["render",c]]);export{_ as __pageData,u as default};
