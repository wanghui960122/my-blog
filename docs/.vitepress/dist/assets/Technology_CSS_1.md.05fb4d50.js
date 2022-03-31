import{_ as n,c as s,o as a,d as t}from"./app.5eb4599e.js";const y='{"title":"\u2F54\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u2F45\u6CD5","description":"","frontmatter":"title css \u2F54\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u2F45\u6CD5","headers":[],"relativePath":"Technology/CSS/1.md","lastUpdated":1648693860438}',p={},o=t(`<h1 id="\u2F54\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u2F45\u6CD5" tabindex="-1">\u2F54\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u2F45\u6CD5 <a class="header-anchor" href="#\u2F54\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u2F45\u6CD5" aria-hidden="true">#</a></h1><div class="language-css"><pre><code><span class="token selector">\u2F8F\u5185\u5E03\u5C40 line-height + text-align vertical-align + text-align

\u5757\u5E03\u5C40 position absolute + margin auto position absolute + negative margin position absolute + translate(-50%, -50%)
\u2F57\u5BB9\u5668\u2F26\u5BB9\u5668\u4E0D\u786E\u5B9A\u5BBD\u2FBC\u7684\u5757\u7EA7\u5143\u7D20\uFF0C\u505A\u4E0A\u4E0B\u5C45\u4E2D

1.flex
    #wrap</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span> <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token selector">2.tabel

.parent</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>//\u2F54\u5E73\u5C45\u4E2D
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>//\u5782\u76F4\u5C45\u4E2D
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>//\u9632\u2F4C\u5757\u7EA7\u5143\u7D20\u5BBD\u5EA6\u72EC\u5360\u2F00\u2F8F\uFF0C\u5185\u8054\u5143\u7D20\u53EF\u4E0D\u8BBE\u7F6E
        <span class="token punctuation">}</span>

<span class="token selector">3.absolute+transform \u2F54\u5E73\u5782\u76F4\u5C45\u4E2D

&lt;div class=&quot;parent&quot;&gt;
    &lt;div class=&quot;child&quot;&gt;Demo&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
&lt;/style&gt;

4.webkit-box //\u5BF9\u2F57\u7EA7\u5143\u7D20\u8BBE\u7F6E

<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
<span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
for <span class="token property">detail</span><span class="token punctuation">:</span> <span class="token property">https</span><span class="token punctuation">:</span>//github.com/hawx1993/tech-blog/issues/12
</code></pre></div>`,2),e=[o];function c(l,i,u,r,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{y as __pageData,g as default};
