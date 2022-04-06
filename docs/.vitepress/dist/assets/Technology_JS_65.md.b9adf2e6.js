import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const _='{"title":"\u4E09\u79CD\u5F39\u7A97\u7684\u5355\u8BCD\u4EE5\u53CA\u4E09\u79CD\u5F39\u7A97\u7684\u529F\u80FD","description":"","frontmatter":"title JS \u4E09\u79CD\u5F39\u7A97\u7684\u5355\u8BCD\u4EE5\u53CA\u4E09\u79CD\u5F39\u7A97\u7684\u529F\u80FD","headers":[],"relativePath":"Technology/JS/65.md","lastUpdated":1649160960005}',p={},o=t(`<h1 id="\u4E09\u79CD\u5F39\u7A97\u7684\u5355\u8BCD\u4EE5\u53CA\u4E09\u79CD\u5F39\u7A97\u7684\u529F\u80FD" tabindex="-1">\u4E09\u79CD\u5F39\u7A97\u7684\u5355\u8BCD\u4EE5\u53CA\u4E09\u79CD\u5F39\u7A97\u7684\u529F\u80FD <a class="header-anchor" href="#\u4E09\u79CD\u5F39\u7A97\u7684\u5355\u8BCD\u4EE5\u53CA\u4E09\u79CD\u5F39\u7A97\u7684\u529F\u80FD" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// 1.alert</span>
<span class="token comment">//\u5F39\u51FA\u5BF9\u8BDD\u6846\u5E76\u8F93\u51FA\u2F00\u6BB5\u63D0\u2F70\u4FE1\u606F</span>
<span class="token keyword">function</span> <span class="token function">ale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5F39\u51FA\u2F00\u4E2A\u5BF9\u8BDD\u6846</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D0\u2F70\u4FE1\u606F\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.confirm</span>
<span class="token comment">//\u5F39\u51FA\u2F00\u4E2A\u8BE2\u95EE\u6846\uFF0C\u6709\u786E\u5B9A\u548C\u53D6\u6D88\u6309\u94AE</span>
<span class="token keyword">function</span> <span class="token function">firm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5229\u2F64\u5BF9\u8BDD\u6846\u8FD4\u56DE\u7684\u503C \uFF08true \u6216\u8005 false\uFF09</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u786E\u5B9A\u63D0\u4EA4\u5417\uFF1F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u70B9\u51FB\u4E86\u786E\u5B9A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u70B9\u51FB\u4E86\u53D6\u6D88&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3.prompt</span>
<span class="token comment">//\u5F39\u51FA\u2F00\u4E2A\u8F93\u2F0A\u6846\uFF0C\u8F93\u2F0A\u2F00\u6BB5\u2F42\u5B57\uFF0C\u53EF\u4EE5\u63D0\u4EA4</span>
<span class="token keyword">function</span> <span class="token function">prom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u2F0A\u60A8\u7684\u540D\u5B57&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u8F93\u2F0A\u7684\u5185\u5BB9\u8D4B\u7ED9\u53D8\u91CF name \uFF0C</span>
  <span class="token comment">//\u8FD9\u2FA5\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cprompt\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u524D\u2FAF\u662F\u63D0\u2F70\u7684\u8BDD\uFF0C\u540E\u2FAF\u662F\u5F53\u5BF9\u8BDD\u6846\u51FA\u6765\u540E\uFF0C\u5728\u5BF9\u8BDD\u6846\u2FA5\u7684\u9ED8\u8BA4\u503C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5982\u679C\u8FD4\u56DE\u7684\u6709\u5185\u5BB9</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B22\u8FCE\u60A8\uFF1A&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var f=n(p,[["render",e]]);export{_ as __pageData,f as default};
