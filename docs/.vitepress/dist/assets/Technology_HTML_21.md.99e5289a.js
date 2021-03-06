import{_ as n,c as a,o,a as e,b as t}from"./app.912614e9.js";const u='{"title":"html5\u6709\u54EA\u4E9B\u65B0\u7279\u6027\u3001\u79FB\u9664\u4E86\u90A3\u4E9B\u5143\u7D20\uFF1F\u5982\u4F55\u5904\u7406HTML5\u65B0\u6807\u7B7E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF1F\u5982\u4F55\u533A\u5206 HTML \u548C HTML5\uFF1F","description":"","frontmatter":"title HTML html5\u6709\u54EA\u4E9B\u65B0\u7279\u6027\u3001\u79FB\u9664\u4E86\u90A3\u4E9B\u5143\u7D20\uFF1F\u5982\u4F55\u5904\u7406HTML5\u65B0\u6807\u7B7E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF1F\u5982\u4F55\u533A\u5206 HTML \u548C HTML5\uFF1F","headers":[],"relativePath":"Technology/HTML/21.md","lastUpdated":1649138781607}',s={},r=e("h1",{id:"html5\u6709\u54EA\u4E9B\u65B0\u7279\u6027\u3001\u79FB\u9664\u4E86\u90A3\u4E9B\u5143\u7D20\uFF1F\u5982\u4F55\u5904\u7406html5\u65B0\u6807\u7B7E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF1F\u5982\u4F55\u533A\u5206-html-\u548C-html5\uFF1F",tabindex:"-1"},[t("html5\u6709\u54EA\u4E9B\u65B0\u7279\u6027\u3001\u79FB\u9664\u4E86\u90A3\u4E9B\u5143\u7D20\uFF1F\u5982\u4F55\u5904\u7406HTML5\u65B0\u6807\u7B7E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF1F\u5982\u4F55\u533A\u5206 HTML \u548C HTML5\uFF1F "),e("a",{class:"header-anchor",href:"#html5\u6709\u54EA\u4E9B\u65B0\u7279\u6027\u3001\u79FB\u9664\u4E86\u90A3\u4E9B\u5143\u7D20\uFF1F\u5982\u4F55\u5904\u7406html5\u65B0\u6807\u7B7E\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF1F\u5982\u4F55\u533A\u5206-html-\u548C-html5\uFF1F","aria-hidden":"true"},"#")],-1),l=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[t(`\u65B0\u7279\u6027\uFF1A
1. \u62D6\u62FD\u91CA\u653E(Drag and drop) API
2. \u8BED\u4E49\u5316\u66F4\u597D\u7684\u5185\u5BB9\u6807\u7B7E\uFF08header,nav,footer,aside,article,section\uFF09
3. \u2FB3\u9891\u3001\u89C6\u9891API(audio,video)
4. \u753B\u5E03(Canvas) API
5. \u5730\u7406(Geolocation) API
6. \u672C\u5730\u79BB\u7EBF\u5B58\u50A8 localStorage \u2ED3\u671F\u5B58\u50A8\u6570\u636E\uFF0C\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u6570\u636E\u4E0D\u4E22\u5931\uFF1B
7. sessionStorage \u7684\u6570\u636E\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u2F83\u52A8\u5220\u9664
8. \u8868\u5355\u63A7\u4EF6\uFF0Ccalendar\u3001date\u3001time\u3001email\u3001url\u3001search
9. \u65B0\u7684\u6280\u672Fwebworker, websocket, Geolocation
\u79FB\u9664\u7684\u5143\u7D20\uFF1A
1. \u7EAF\u8868\u73B0\u7684\u5143\u7D20\uFF1Abasefont\uFF0Cbig\uFF0Ccenter\uFF0Cfont, s\uFF0Cstrike\uFF0Ctt\uFF0Cu\uFF1B
2. \u5BF9\u53EF\u2F64\u6027\u4EA7\u2F63\u8D1F\u2FAF\u5F71\u54CD\u7684\u5143\u7D20\uFF1Aframe\uFF0Cframeset\uFF0Cnoframes\uFF1B
\u2F40\u6301HTML5\u65B0\u6807\u7B7E\uFF1A
1. IE8/IE7/IE6\u2F40\u6301\u901A\u8FC7 document.createElement \u2F45\u6CD5\u4EA7\u2F63\u7684\u6807\u7B7E\uFF0C\u53EF\u4EE5\u5229\u2F64\u8FD9\u2F00\u7279\u6027\u8BA9\u8FD9\u4E9B\u6D4F\u89C8\u5668
\u2F40\u6301 HTML5 \u65B0\u6807\u7B7E\uFF0C\u6D4F\u89C8\u5668\u2F40\u6301\u65B0\u6807\u7B7E\u540E\uFF0C\u8FD8\u9700\u8981\u6DFB\u52A0\u6807\u7B7E\u9ED8\u8BA4\u7684\u6837\u5F0F\uFF08\u5F53\u7136\u6700\u597D\u7684\u2F45\u5F0F\u662F\u76F4\u63A5\u4F7F
\u2F64\u6210\u719F\u7684\u6846\u67B6\u3001\u4F7F\u2F64\u6700\u591A\u7684\u662Fhtml5shim\u6846\u67B6\uFF09\uFF1A
`),e("span",{class:"token comment"},`<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"<\/script>
<![endif]-->`),t(`
\u5982\u4F55\u533A\u5206\uFF1A
DOCTYPE\u58F0\u660E\u65B0\u589E\u7684\u7ED3\u6784\u5143\u7D20\u3001\u529F\u80FD\u5143\u7D20
`)])])],-1),c=[r,l];function i(d,m,h,_,p,f){return o(),a("div",null,c)}var H=n(s,[["render",i]]);export{u as __pageData,H as default};
