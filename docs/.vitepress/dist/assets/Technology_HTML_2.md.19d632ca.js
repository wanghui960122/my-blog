import{_ as n,c as s,o as a,d as t}from"./app.5eb4599e.js";const _='{"title":"websocket","description":"","frontmatter":"title HTML websocket","headers":[{"level":2,"title":"webSocket\u5982\u4F55\u517C\u5BB9\u4F4E\u6D4F\u89C8\u5668\uFF1F","slug":"websocket\u5982\u4F55\u517C\u5BB9\u4F4E\u6D4F\u89C8\u5668\uFF1F"}],"relativePath":"Technology/HTML/2.md","lastUpdated":1648620543270}',e={},o=t(`<h1 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h1><p>WebSocket \u4F7F\u2F64ws\u6216wss\u534F\u8BAE\uFF0CWebsocket\u662F\u2F00\u4E2A\u6301\u4E45\u5316\u7684\u534F\u8BAE\uFF0C\u76F8\u5BF9\u4E8EHTTP\u8FD9\u79CD\u2FAE\u6301\u4E45\u7684\u534F\u8BAE\u6765 \u8BF4\u3002WebSocket API\u6700\u4F1F\u2F24\u4E4B\u5904\u5728\u4E8E\u670D\u52A1\u5668\u548C\u5BA2\u2F3E\u7AEF\u53EF\u4EE5\u5728\u7ED9\u5B9A\u7684\u65F6\u95F4\u8303\u56F4\u5185\u7684\u4EFB\u610F\u65F6\u523B\uFF0C\u76F8\u4E92\u63A8\u9001 \u4FE1\u606F\u3002WebSocket\u5E76\u4E0D\u9650\u4E8E\u4EE5Ajax(\u6216XHR)\u2F45\u5F0F\u901A\u4FE1\uFF0C\u56E0\u4E3AAjax\u6280\u672F\u9700\u8981\u5BA2\u2F3E\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u2F7D WebSocket\u670D\u52A1\u5668\u548C\u5BA2\u2F3E\u7AEF\u53EF\u4EE5\u5F7C\u6B64\u76F8\u4E92\u63A8\u9001\u4FE1\u606F\uFF1BXHR\u53D7\u5230\u57DF\u7684\u9650\u5236\uFF0C\u2F7DWebSocket\u5141\u8BB8\u8DE8\u57DF\u901A \u4FE1\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u521B\u5EFA\u2F00\u4E2ASocket\u5B9E\u4F8B</span>
<span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://localhost:8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6253\u5F00Socket</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// \u53D1\u9001\u2F00\u4E2A\u521D\u59CB\u5316\u6D88\u606F</span>
socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;I am the client and I\\&#39;m listening!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u76D1\u542C\u6D88\u606F</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Client received a message&#39;</span><span class="token punctuation">,</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u76D1\u542CSocket\u7684\u5173\u95ED</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Client notified socket has closed&#39;</span><span class="token punctuation">,</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5173\u95EDSocket....</span>
socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="websocket\u5982\u4F55\u517C\u5BB9\u4F4E\u6D4F\u89C8\u5668\uFF1F" tabindex="-1">webSocket\u5982\u4F55\u517C\u5BB9\u4F4E\u6D4F\u89C8\u5668\uFF1F <a class="header-anchor" href="#websocket\u5982\u4F55\u517C\u5BB9\u4F4E\u6D4F\u89C8\u5668\uFF1F" aria-hidden="true">#</a></h2><div class="language-html"><pre><code>1.Adobe Flash Socket
2.ActiveX HTMLFile (IE)
3.\u57FA\u4E8E multipart \u7F16\u7801\u53D1\u9001 XHR
4.\u57FA\u4E8E\u2ED3\u8F6E\u8BE2\u7684 XHR
</code></pre></div>`,5),p=[o];function c(l,k,u,i,r,d){return a(),s("div",null,p)}var b=n(e,[["render",c]]);export{_ as __pageData,b as default};