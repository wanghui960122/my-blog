import{_ as n,c as s,o as a,d as t}from"./app.5eb4599e.js";const y='{"title":"CSS\u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F","description":"","frontmatter":"title css CSS\u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F","headers":[],"relativePath":"Technology/CSS/10.md","lastUpdated":1648714599953}',p={},o=t(`<h1 id="css\u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F" tabindex="-1">CSS\u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F <a class="header-anchor" href="#css\u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F" aria-hidden="true">#</a></h1><div class="language-css"><pre><code>\u2F00\u3001\u57FA\u672C\u9009\u62E9\u5668
1. * \u901A\u2F64\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5339\u914D\u4EFB\u4F55\u5143\u7D20
2. E \u6807\u7B7E\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709\u4F7F\u2F64E\u6807\u7B7E\u7684\u5143\u7D20
3. .info class\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709class\u5C5E\u6027\u4E2D\u5305\u542Binfo\u7684\u5143\u7D20
4. #footer id\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709id\u5C5E\u6027\u7B49\u4E8Efooter\u7684\u5143\u7D20
5. \u76F8\u90BB\u9009\u62E9\u5668 <span class="token punctuation">(</span>div+p<span class="token punctuation">)</span> div \u540E\u9762\u7B2C\u4E00\u4E2A\u76F8\u90BB\u7684 p \u5143\u7D20 \u76F8\u540C\u7236\u7EA7
6. \u76F8\u90BB\u9009\u62E9\u5668 <span class="token punctuation">(</span>div~p<span class="token punctuation">)</span>   div \u540E\u9762\u6240\u6709\u76F8\u90BB\u7684 p \u5143\u7D20 \u76F8\u540C\u7236\u7EA7
7. \u5B50\u9009\u62E9\u5668 <span class="token punctuation">(</span>div&gt;p<span class="token punctuation">)</span>
8. \u540E\u4EE3\u9009\u62E9\u5668 <span class="token punctuation">(</span>div p<span class="token punctuation">)</span>
9. \u591A\u4E2A\u9009\u62E9\u5668 <span class="token punctuation">(</span>div<span class="token punctuation">,</span>p<span class="token punctuation">,</span>a<span class="token punctuation">,</span>ul<span class="token punctuation">)</span>


\u2F06\u3001\u591A\u5143\u7D20\u7684\u7EC4\u5408\u9009\u62E9\u5668
5. E<span class="token punctuation">,</span>F \u591A\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u540C\u65F6\u5339\u914D\u6240\u6709E\u5143\u7D20\u6216F\u5143\u7D20\uFF0CE\u548CF\u4E4B\u95F4\u2F64\u9017\u53F7\u5206\u9694
6. E F \u540E\u4EE3\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709\u5C5E\u4E8EE\u5143\u7D20\u540E\u4EE3\u7684F\u5143\u7D20\uFF0CE\u548CF\u4E4B\u95F4\u2F64\u7A7A\u683C\u5206\u9694
7. E &gt; F \u2F26\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709E\u5143\u7D20\u7684\u2F26\u5143\u7D20F
8. E + F \u6BD7\u90BB\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5339\u914D\u6240\u6709\u7D27\u968FE\u5143\u7D20\u4E4B\u540E\u7684\u540C\u7EA7\u5143\u7D20F

\u4E09\u3001CSS 2.1 \u5C5E\u6027\u9009\u62E9\u5668
9. E[att] \u5339\u914D\u6240\u6709\u5177\u6709att\u5C5E\u6027\u7684E\u5143\u7D20\uFF0C\u4E0D\u8003\u8651\u5B83\u7684\u503C\u3002\uFF08\u6CE8\u610F\uFF1AE\u5728\u6B64\u5904\u53EF\u4EE5\u7701\u7565\uFF0C\u2F50\u5982<span class="token string">&quot; [cheacked]&quot;</span>\u3002\u4EE5\u4E0B\u540C\u3002\uFF09
10. E[att=val] \u5339\u914D\u6240\u6709att\u5C5E\u6027\u7B49\u4E8E<span class="token string">&quot;val&quot;</span>\u7684E\u5143\u7D20
11. E[att~=val] \u5339\u914D\u6240\u6709att\u5C5E\u6027\u5177\u6709\u591A\u4E2A\u7A7A\u683C\u5206\u9694\u7684\u503C\u3001\u5176\u4E2D\u2F00\u4E2A\u503C\u7B49\u4E8E<span class="token string">&quot;val&quot;</span>\u7684E\u5143\u7D20
12. E[att|=val] \u5339\u914D\u6240\u6709att\u5C5E\u6027\u5177\u6709\u591A\u4E2A\u8FDE\u5B57\u53F7\u5206\u9694\uFF08hyphen-separated\uFF09\u7684\u503C\u3001\u5176\u4E2D\u2F00\u4E2A\u503C \u4EE5<span class="token string">&quot;val&quot;</span>\u5F00\u5934\u7684E\u5143\u7D20\uFF0C\u4E3B\u8981\u2F64\u4E8Elang\u5C5E\u6027\uFF0C\u2F50\u5982<span class="token string">&quot;en&quot;</span>\u3001<span class="token string">&quot;en-us&quot;</span>\u3001<span class="token string">&quot;en-gb&quot;</span>\u7B49\u7B49

\u56DB\u3001CSS 2.1\u4E2D\u7684\u4F2A\u7C7B
13. <span class="token property">E</span><span class="token punctuation">:</span>first-child \u5339\u914D\u2F57\u5143\u7D20\u7684\u7B2C\u2F00\u4E2A\u2F26\u5143\u7D20
14. <span class="token property">E</span><span class="token punctuation">:</span>link\u5339\u914D\u6240\u6709\u672A\u88AB\u70B9\u51FB\u7684\u94FE\u63A5
15. <span class="token property">E</span><span class="token punctuation">:</span>visited \u5339\u914D\u6240\u6709\u5DF2\u88AB\u70B9\u51FB\u7684\u94FE\u63A5
16. <span class="token property">E</span><span class="token punctuation">:</span>active \u5339\u914D\u2FCF\u6807\u5DF2\u7ECF\u5176\u4E0A\u6309\u4E0B\u3001\u8FD8\u6CA1\u6709\u91CA\u653E\u7684E\u5143\u7D20
17. <span class="token property">E</span><span class="token punctuation">:</span>hover \u5339\u914D\u2FCF\u6807\u60AC\u505C\u5176\u4E0A\u7684E\u5143\u7D20
18. <span class="token property">E</span><span class="token punctuation">:</span>focus \u5339\u914D\u83B7\u5F97\u5F53\u524D\u7126\u70B9\u7684E\u5143\u7D20
19. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">lang</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> \u5339\u914Dlang\u5C5E\u6027\u7B49\u4E8Ec\u7684E\u5143\u7D20

\u4E94\u3001 CSS 2.1\u4E2D\u7684\u4F2A\u5143\u7D20
20. <span class="token property">E</span><span class="token punctuation">:</span>first-line \u5339\u914DE\u5143\u7D20\u7684\u7B2C\u2F00\u2F8F
21. <span class="token property">E</span><span class="token punctuation">:</span>first-letter \u5339\u914DE\u5143\u7D20\u7684\u7B2C\u2F00\u4E2A\u5B57\u2E9F
22. <span class="token property">E</span><span class="token punctuation">:</span>before \u5728E\u5143\u7D20\u4E4B\u524D\u63D2\u2F0A\u2F63\u6210\u7684\u5185\u5BB9
23. <span class="token property">E</span><span class="token punctuation">:</span>after \u5728E\u5143\u7D20\u4E4B\u540E\u63D2\u2F0A\u2F63\u6210\u7684\u5185\u5BB9

\u516D\u3001CSS 3\u7684\u540C\u7EA7\u5143\u7D20\u901A\u2F64\u9009\u62E9\u5668
24. E ~ F \u5339\u914D\u4EFB\u4F55\u5728E\u5143\u7D20\u4E4B\u540E\u7684\u540C\u7EA7F\u5143\u7D20

\u4E03\u3001CSS 3 \u5C5E\u6027\u9009\u62E9\u5668
25. E[att^=<span class="token string">&quot;val&quot;</span>] \u5C5E\u6027att\u7684\u503C\u4EE5<span class="token string">&quot;val&quot;</span>\u5F00\u5934\u7684\u5143\u7D20
26. E[att$=<span class="token string">&quot;val&quot;</span>] \u5C5E\u6027att\u7684\u503C\u4EE5<span class="token string">&quot;val&quot;</span>\u7ED3\u5C3E\u7684\u5143\u7D20
27. E[att*=<span class="token string">&quot;val&quot;</span>] \u5C5E\u6027att\u7684\u503C\u5305\u542B<span class="token string">&quot;val&quot;</span>\u5B57\u7B26\u4E32\u7684\u5143\u7D20

\u2F0B\u3001CSS 3\u4E2D\u4E0E\u2F64\u2F3E\u754C\u2FAF\u6709\u5173\u7684\u4F2A\u7C7B
28. <span class="token property">E</span><span class="token punctuation">:</span>enabled \u5339\u914D\u8868\u5355\u4E2D\u6FC0\u6D3B\u7684\u5143\u7D20
29. <span class="token property">E</span><span class="token punctuation">:</span>disabled \u5339\u914D\u8868\u5355\u4E2D\u7981\u2F64\u7684\u5143\u7D20
30. <span class="token property">E</span><span class="token punctuation">:</span>checked \u5339\u914D\u8868\u5355\u4E2D\u88AB\u9009\u4E2D\u7684radio\uFF08\u5355\u9009\u6846\uFF09\u6216checkbox\uFF08\u590D\u9009\u6846\uFF09\u5143\u7D20
31. <span class="token property">E</span><span class="token punctuation">:</span><span class="token punctuation">:</span>selection \u5339\u914D\u2F64\u2F3E\u5F53\u524D\u9009\u4E2D\u7684\u5143\u7D20

\u4E5D\u3001CSS 3\u4E2D\u7684\u7ED3\u6784\u6027\u4F2A\u7C7B
32. <span class="token property">E</span><span class="token punctuation">:</span>root \u5339\u914D\u2F42\u6863\u7684\u6839\u5143\u7D20\uFF0C\u5BF9\u4E8EHTML\u2F42\u6863\uFF0C\u5C31\u662FHTML\u5143\u7D20
33. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> \u5339\u914D\u5176\u2F57\u5143\u7D20\u7684\u7B2Cn\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B2C\u2F00\u4E2A\u7F16\u53F7\u4E3A1
34. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> \u5339\u914D\u5176\u2F57\u5143\u7D20\u7684\u5012\u6570\u7B2Cn\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B2C\u2F00\u4E2A\u7F16\u53F7\u4E3A1
35. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token property">\u4E0E</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u4F5C\u2F64\u7C7B\u4F3C\uFF0C\u4F46\u662F\u4EC5\u5339\u914D\u4F7F\u2F64\u540C\u79CD\u6807\u7B7E\u7684\u5143\u7D20
36. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token property">\u4E0E</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u4F5C\u2F64\u7C7B\u4F3C\uFF0C\u4F46\u662F\u4EC5\u5339\u914D\u4F7F\u2F64\u540C\u79CD\u6807\u7B7E\u7684\u5143\u7D20
37. <span class="token property">E</span><span class="token punctuation">:</span>last-child <span class="token property">\u5339\u914D\u2F57\u5143\u7D20\u7684\u6700\u540E\u2F00\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
38. <span class="token property">E</span><span class="token punctuation">:</span><span class="token property">first-of-type\u5339\u914D\u2F57\u5143\u7D20\u4E0B\u4F7F\u2F64\u540C\u79CD\u6807\u7B7E\u7684\u7B2C\u2F00\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
39. <span class="token property">E</span><span class="token punctuation">:</span>last-of-type <span class="token property">\u5339\u914D\u2F57\u5143\u7D20\u4E0B\u4F7F\u2F64\u540C\u79CD\u6807\u7B7E\u7684\u6700\u540E\u2F00\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E</span><span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
40. <span class="token property">E</span><span class="token punctuation">:</span>only-child <span class="token property">\u5339\u914D\u2F57\u5143\u7D20\u4E0B\u4EC5\u6709\u7684\u2F00\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E</span><span class="token punctuation">:</span><span class="token property">first-child</span><span class="token punctuation">:</span><span class="token property">last-child\u6216</span> <span class="token punctuation">:</span>nth- <span class="token function">child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
41. <span class="token property">E</span><span class="token punctuation">:</span>only-of-type <span class="token property">\u5339\u914D\u2F57\u5143\u7D20\u4E0B\u4F7F\u2F64\u540C\u79CD\u6807\u7B7E\u7684\u552F\u2F00\u2F00\u4E2A\u2F26\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E</span><span class="token punctuation">:</span><span class="token property">first-of-type</span><span class="token punctuation">:</span>last-of- <span class="token property">type\u6216</span> <span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
42. <span class="token property">E</span><span class="token punctuation">:</span>empty \u5339\u914D\u2F00\u4E2A\u4E0D\u5305\u542B\u4EFB\u4F55\u2F26\u5143\u7D20\u7684\u5143\u7D20\uFF0C\u6CE8\u610F\uFF0C\u2F42\u672C\u8282\u70B9\u4E5F\u88AB\u770B\u4F5C\u2F26\u5143\u7D20

\u2F17\u3001CSS 3\u7684\u53CD\u9009\u4F2A\u7C7B
43. <span class="token property">E</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> \u5339\u914D\u4E0D\u7B26\u5408\u5F53\u524D\u9009\u62E9\u5668\u7684\u4EFB\u4F55\u5143\u7D20

\u2F17\u2F00\u3001CSS 3\u4E2D\u7684 <span class="token punctuation">:</span>target \u4F2A\u7C7B
44. <span class="token property">E</span><span class="token punctuation">:</span>target \u5339\u914D\u2F42\u6863\u4E2D\u7279\u5B9A<span class="token string">&quot;id&quot;</span>\u70B9\u51FB\u540E\u7684\u6548\u679C

* \u53EF\u7EE7\u627F\u7684\u6837\u5F0F\uFF1A font-size font-family color<span class="token punctuation">,</span> UL LI DL DD DT<span class="token punctuation">;</span>
* \u4E0D\u53EF\u7EE7\u627F\u7684\u6837\u5F0F\uFF1Aborder padding margin width height <span class="token punctuation">;</span>

<span class="token property">\u62D3\u5C55\u5185\u5BB9</span><span class="token punctuation">:</span>
<span class="token property">\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B</span><span class="token punctuation">:</span>
\u4F2A\u7C7B\u7528\u4E8E\u5411\u67D0\u4E9B\u9009\u62E9\u5668\u6DFB\u52A0\u7279\u6B8A\u6548\u679C <span class="token punctuation">(</span>\u5355\u5192\u53F7<span class="token punctuation">)</span>
\u4F2A\u5143\u7D20\u7528\u4E8E\u5C06\u67D0\u4E2A\u7279\u6B8A\u7684\u4E1C\u897F\u6DFB\u52A0\u5230\u67D0\u4E9B\u5143\u7D20\u7684\u524D\u540E <span class="token punctuation">(</span>\u53CC\u5192\u53F7<span class="token punctuation">)</span>

<span class="token punctuation">:</span><span class="token punctuation">:</span>after/<span class="token punctuation">:</span><span class="token property">after\u4E0E</span><span class="token punctuation">:</span><span class="token punctuation">:</span>before/<span class="token punctuation">:</span>before\u7684\u533A\u522B?
<span class="token punctuation">:</span>before\u5728\u5143\u7D20\u4E4B\u524D\u6DFB\u52A0\u6548\u679C/<span class="token punctuation">:</span><span class="token property">after\u662F\u5728\u5143\u7D20\u4E4B\u540E\u6DFB\u52A0\u6548\u679C</span>
<span class="token punctuation">:</span>after/<span class="token punctuation">:</span>before\u662FCSS2\u63D0\u51FA\u7684<span class="token punctuation">,</span><span class="token property">\u517C\u5BB9IE8</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>after/<span class="token punctuation">:</span><span class="token punctuation">:</span>before\u662FCSS3\u4E3A\u4E86\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u505A\u51FA\u7684\u5DEE\u522B<span class="token punctuation">,</span>\u4E3A\u4E86\u907F\u514D\u517C\u5BB9\u6027\u95EE\u9898<span class="token punctuation">,</span><span class="token property">\u4E60\u60EF\u6027\u7684\u8FD8\u662F\u5199</span><span class="token punctuation">:</span>after/<span class="token punctuation">:</span>before<span class="token punctuation">;</span>
</code></pre></div>`,2),c=[o];function e(u,l,i,k,r,E){return a(),s("div",null,c)}var d=n(p,[["render",e]]);export{y as __pageData,d as default};
