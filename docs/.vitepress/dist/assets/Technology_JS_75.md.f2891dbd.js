import{_ as n,c as s,o as a,d as t}from"./app.912614e9.js";const d='{"title":"\u4E0B\u5217\u63A7\u5236\u53F0\u90FD\u8F93\u51FA\u4EC0\u4E48","description":"","frontmatter":"title JS \u4E0B\u5217\u63A7\u5236\u53F0\u90FD\u8F93\u51FA\u4EC0\u4E48","headers":[],"relativePath":"Technology/JS/75.md","lastUpdated":1649161485947}',p={},o=t(`<h1 id="\u4E0B\u5217\u63A7\u5236\u53F0\u90FD\u8F93\u51FA\u4EC0\u4E48" tabindex="-1">\u4E0B\u5217\u63A7\u5236\u53F0\u90FD\u8F93\u51FA\u4EC0\u4E48 <a class="header-anchor" href="#\u4E0B\u5217\u63A7\u5236\u53F0\u90FD\u8F93\u51FA\u4EC0\u4E48" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>\u7B2C<span class="token number">1</span>\u9898\uFF1A
<span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
name<span class="token operator">=</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
\u7B54\u6848\uFF1A<span class="token string">&quot;\u5F20\u4E09&quot;</span>

\u7B2C<span class="token number">2</span>\u9898\uFF1A
<span class="token comment">//\u8003\u70B9\uFF1A1\u3001\u53D8\u91CF\u58F0\u660E\u63D0\u5347 2\u3001\u53D8\u91CF\u641C\u7D22\u673A\u5236</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u7B54\u6848\uFF1A<span class="token keyword">undefined</span>

\u7B2C<span class="token number">3</span>\u9898\uFF1A
<span class="token keyword">var</span> b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
window<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u7B54\u6848\uFF1A<span class="token number">3</span>

\u7B2C<span class="token number">4</span>\u9898\uFF1A
c<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//\u58F0\u660E\u2F00\u4E2A\u5168\u5C40\u53D8\u91CFc</span>
<span class="token keyword">function</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
window<span class="token punctuation">.</span>c<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1Aundefined\uFF0C\u539F\u56E0\uFF1A\u7531\u4E8E\u6B64\u65F6\u7684c\u662F\u2F00\u4E2A\u5C40\u90E8\u53D8\u91CFc\uFF0C\u5E76\u4E14\u6CA1\u6709\u88AB\u8D4B\u503C</span>
<span class="token keyword">var</span> c<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B54\u6848\uFF1A3\uFF0C\u539F\u56E0\uFF1A\u8FD9\u2FA5\u7684c\u5C31\u662F\u2F00\u4E2A\u5168\u5C40\u53D8\u91CFc</span>
<span class="token punctuation">}</span>
<span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

\u7B2C<span class="token number">5</span>\u9898\uFF1A
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1A11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1Aundefined</span>

\u7B2C<span class="token number">6</span>\u9898\uFF1A
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1A1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1A3</span>

\u7B2C<span class="token number">7</span>\u9898\uFF1A
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1Atrue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1Atrue\uFF0C\u56E0\u4E3A\u4F1A\u5C06\u6570\u5B571\u5148\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E321</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B54\u6848\uFF1Afalse\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u4E0D\u2F00\u81F4</span>

\u7B2C<span class="token number">8</span>\u9898\uFF1A
<span class="token keyword">typeof</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token string">&quot;number&quot;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span> <span class="token string">&quot;string&quot;</span>
<span class="token keyword">typeof</span> <span class="token operator">/</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">;</span> <span class="token string">&quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token string">&quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token string">&quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token string">&quot;undefined&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token string">&quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//&quot;function&quot;</span>

\u7B2C<span class="token number">9</span>\u9898\uFF1A
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;3asdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;1.23abc456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&quot;true&quot; NaN</span>

\u7B2C<span class="token number">10</span>\u9898\uFF1A
<span class="token comment">//\u8003\u70B9\uFF1A\u51FD\u6570\u58F0\u660E\u63D0\u524D</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> foo<span class="token punctuation">;</span>
foo <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//var foo = 11;</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&quot;function&quot;</span>

\u7B2C<span class="token number">11</span>\u9898\uFF1A
<span class="token comment">//\u8003\u70B9\uFF1A\u51FD\u6570\u58F0\u660E\u63D0\u524D</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
foo <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B54\u6848\uFF1A1</span>

\u7B2C<span class="token number">12</span>\u9898\uFF1A
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u662F\u2F00\u4E2A\u51FD\u6570</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">////3</span>

\u7B2C<span class="token number">13</span>\u9898\uFF1A
<span class="token comment">//\u8003\u70B9\uFF1A\u5BF9arguments\u7684\u64CD\u4F5C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B54\u6848\uFF1A2\uFF0C\u56E0\u4E3A\uFF1Aa\u3001arguments\u662F\u5BF9\u5B9E\u53C2\u7684\u8BBF\u95EE\uFF0Cb\u3001\u901A\u8FC7arguments[i]\u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u5B9E</span>
\u53C2\u7684\u503C
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

\u7B2C<span class="token number">14</span>\u9898\uFF1A
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B54\u6848\uFF1A3\uFF0C\u56E0\u4E3Aarguments\u662F\u5BF9\u5B9E\u53C2\u7684\u8BBF\u95EE</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

\u7B2C<span class="token number">15</span>\u9898
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u62A5\u9519</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//alert(typeof bar);</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&quot;hello&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u62A5\u9519</span>

\u7B2C<span class="token number">16</span>\u9898\uFF1A
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test\u51FD\u6570&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u5668\u56DE\u8C03\u51FD\u6570&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u7ED3\u679C\uFF1A
test\u51FD\u6570
\u5B9A\u65F6\u5668\u56DE\u8C03\u51FD\u6570
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var b=n(p,[["render",e]]);export{d as __pageData,b as default};
