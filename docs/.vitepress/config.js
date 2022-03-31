module.exports = {
    // 网站标题
    title: 'Fractures_',
    // 网站描述
    description: 'Interview with vitePress',
    // 打包目录
    dest: '/dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    //使用插件
    plugins: [
        '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/back-to-top',          // 返回顶部插件
        '@vuepress/medium-zoom',          // 图片预览插件
        '@vuepress/nprogress',        //页面顶部进度条
    ],
    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav:[
            // {text: '我的个人网站', link: 'https://www.cooldream.fun/home' },
            {text: '面试', link: '/Interview/Experience/'},
            {text: 'Github', link: 'https://github.com/wanghui960122/my-blog'}
        ],
        sidebar: {
            '/Technology': getSidebar(),
            '/Interview': [
            //   {
            //     text:'Interview',
            //     children: [
            //         { text: '面试题', link: '/Interview/' }
            //     ],
            //     sidebarDepth:3
            // },
                {
                    text:'Experience',
                    children:[
                    { text: '基础', link: '/Interview/Experience/' },
                    { text: '进阶', link: '/Interview/Experience/advanced' },
                    ],
                    sidebarDepth:3
                }
            ]
        }
    }
}

function getSidebar() {
    return [
        {
            text:'HTML',
            children: [
                { text: 'H5新特性', link: '/Technology/HTML/' },
                { text: '两种实现前端路由的⽅式', link: '/Technology/HTML/1' },
                { text: 'websocket', link: '/Technology/HTML/2' },
                { text: '浏览器渲染原理解析', link: '/Technology/HTML/3' },
                { text: 'iframe的缺点', link: '/Technology/HTML/4' },
                { text: 'Label的作⽤是什么？是怎么⽤的？', link: '/Technology/HTML/5' },
                { text: 'HTML5的form如何关闭⾃动完成功能？', link: '/Technology/HTML/6' },
                { text: '如何实现浏览器内多个标签⻚之间的通信?', link: '/Technology/HTML/7' },
                { text: '⻚⾯可⻅性（Page Visibility API） 可以有哪些⽤途？', link: '/Technology/HTML/8' },
                { text: '实现不使⽤ border 画出1px⾼的线，在不同浏览器的标准模式与怪异模式下都能保持⼀致的效果。', link: '/Technology/HTML/9' },
                { text: 'title与h1的区别、b与strong的区别、i与em的区别？', link: '/Technology/HTML/10' },
                { text: '你做的⻚⾯在哪些流览器测试过？这些浏览器的内核分别是什么?', link: '/Technology/HTML/11' },
                { text: '每个HTML⽂件⾥开头都有个很重要的东西，Doctype，知道这是⼲什么的吗？', link: '/Technology/HTML/12' },
                { text: 'div+css的布局较table布局有什么优点？', link: '/Technology/HTML/13' },
                { text: '.img的alt与title有何异同？ strong与em的异同？', link: '/Technology/HTML/14' },
                { text: '简述⼀下src与href的区别', link: '/Technology/HTML/15' },
                { text: '知道的⽹⻚制作会⽤到的图⽚格式有哪些？', link: '/Technology/HTML/16' },
                { text: '在css/js代码上线之后开发⼈员经常会优化性能，从⽤⼾刷新⽹⻚开始，⼀次js请求⼀般情况下有哪些地⽅会有缓存处理？', link: '/Technology/HTML/17' },
                { text: '⼀个⻚⾯上有⼤量的图⽚（⼤型电商⽹站），加载很慢，你有哪些⽅法优化这些图⽚的加载，给⽤⼾更好的体验。', link: '/Technology/HTML/18' },
                { text: '你如何理解HTML结构的语义化？', link: '/Technology/HTML/19' },
                { text: '谈谈以前端⻆度出发做好SEO需要考虑什么？', link: '/Technology/HTML/20' },
                { text: 'html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？', link: '/Technology/HTML/21' },
                { text: 'HTML5 Canvas 元素有什么⽤？', link: '/Technology/HTML/22' },
                { text: '如何在 HTML5 ⻚⾯中嵌⼊⾳频?', link: '/Technology/HTML/23' },
                { text: '如何在 HTML5 ⻚⾯中嵌⼊视频？', link: '/Technology/HTML/24' },
                { text: 'HTML5 引⼊什么新的表单属性？', link: '/Technology/HTML/25' },
                { text: '标准模式和怪异模式的区别', link: '/Technology/HTML/26' },
                { text: '浏览器是怎么对HTML5的离线储存资源进行管理和加载的？', link: '/Technology/HTML/27' },
                { text: '如何处理HTML5新标签的兼容性问题？', link: '/Technology/HTML/28' },
                { text: 'HTML5离线缓存怎么使用，工作原理能不能解释一下？', link: '/Technology/HTML/29' },
                { text: '页面导入样式时,使用link和@import有什么区别?', link: '/Technology/HTML/30' },
                { text: 'Web标准以及W3C标准是什么？', link: '/Technology/HTML/31' },
                { text: 'Canvas和Svg有什么区别?', link: '/Technology/HTML/32' },
                { text: 'Canvas跨域问题? 如何解决', link: '/Technology/HTML/33' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/34' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/35' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/36' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/37' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/38' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/39' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/40' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/41' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/42' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/43' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/44' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/45' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/46' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/47' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/48' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/49' },
                // { text: '简述⼀下src与href的区别', link: '/Technology/HTML/50' }
            ],
            sidebarDepth:3
        },
        {
            text:'CSS',
            children: [
                { text: 'box-sizing', link: '/Technology/CSS/' },
                { text: '⽔平垂直居中的⽅法', link: '/Technology/CSS/1' },
                { text: '实现左边定宽右边⾃适应效果', link: '/Technology/CSS/2' },
                { text: '三列布局（中间固定两边⾃适应宽度）', link: '/Technology/CSS/3' },
                { text: 'BFC（Block Formatting Contexts）块级格式化上下⽂', link: '/Technology/CSS/4' },
                { text: '清除浮动元素的⽅法和各⾃的优缺点', link: '/Technology/CSS/5' },
                { text: 'css实现⾃适应正⽅形', link: '/Technology/CSS/6' },
                { text: 'position的值', link: '/Technology/CSS/7' },
                { text: '如何在⻚⾯上实现⼀个圆形的可点击区域？', link: '/Technology/CSS/8' },
                { text: '介绍⼀下标准的CSS的盒⼦模型？低版本IE的盒⼦模型有什么不同的？', link: '/Technology/CSS/9' },
                { text: 'CSS选择符有哪些？哪些属性可以继承？', link: '/Technology/CSS/10' },
                { text: 'CSS优先级算法如何计算？', link: '/Technology/CSS/11' },
                { text: 'CSS3新增伪类有那些？', link: '/Technology/CSS/12' },
                { text: 'display有哪些值？说明他们的作⽤。', link: '/Technology/CSS/13' },
                { text: 'CSS3有哪些新特性？', link: '/Technology/CSS/14' },
                { text: '请解释⼀下CSS3的Flexbox（弹性盒布局模型）,以及适⽤场景？', link: '/Technology/CSS/15' },
                { text: '⽤纯CSS创建⼀个三⻆形的原理是什么？', link: '/Technology/CSS/16' },
                { text: '⼀个满屏品字布局如何设计?', link: '/Technology/CSS/17' },
                { text: 'css多列等⾼如何实现？', link: '/Technology/CSS/18' },
                { text: '经常遇到的浏览器的兼容性有哪些？原因，解决⽅法是什么，常⽤hack的技巧 ？', link: '/Technology/CSS/19' },
                { text: 'li与li之间有看不⻅的空⽩间隔是什么原因引起的？有什么解决办法？', link: '/Technology/CSS/20' },
                { text: '为什么要初始化CSS样式。', link: '/Technology/CSS/21' },
                { text: 'absolute的containing block(容器块)计算⽅式跟正常流有什么不同？', link: '/Technology/CSS/22' },
                { text: 'CSS⾥的visibility属性有个collapse属性值是⼲嘛⽤的？在不同浏览器下以后什么区别？', link: '/Technology/CSS/23' },
                { text: 'position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？', link: '/Technology/CSS/24' },
                { text: '对BFC规范(块级格式化上下⽂：block formatting context)的理解？', link: '/Technology/CSS/25' },
                { text: '请解释⼀下为什么需要清除浮动？清除浮动的⽅式', link: '/Technology/CSS/26' },
                { text: '什么是外边距合并？', link: '/Technology/CSS/27' },
                { text: 'zoom:1的清除浮动原理?', link: '/Technology/CSS/28' },
                { text: 'CSS优化、提⾼性能的⽅法有哪些？', link: '/Technology/CSS/29' },
                { text: '怎么让Chrome⽀持⼩于12px 的⽂字？', link: '/Technology/CSS/30' },
                { text: 'position:fixed;在android下⽆效怎么处理？', link: '/Technology/CSS/31' },
                { text: '如果需要⼿动写动画，你认为最⼩时间间隔是多久，为什么？', link: '/Technology/CSS/32' },
                { text: 'display:inline-block 什么时候会显⽰间隙？', link: '/Technology/CSS/33' },
                { text: '有哪项⽅式可以对⼀个DOM设置它的CSS样式？', link: '/Technology/CSS/34' },
                { text: '超链接访问过后hover样式就不出现的问题是什么？如何解决？', link: '/Technology/CSS/35' },
                { text: '什么是Css Hack？ie6,7,8的hack分别是什么？', link: '/Technology/CSS/36' },
                { text: '什么是外边距重叠？重叠的结果是什么？', link: '/Technology/CSS/37' },
                { text: 'rgba()和opacity的透明效果有什么不同？', link: '/Technology/CSS/38' },
                { text: '如何垂直居中⼀个浮动元素？', link: '/Technology/CSS/39' },
                { text: 'px和em的区别', link: '/Technology/CSS/40' },
                { text: '述⼀个"reset"的CSS⽂件并如何使⽤它。知道normalize.css吗？你了解他们的不同之处？', link: '/Technology/CSS/41' },
                { text: 'Sass、LESS是什么？⼤家为什么要使⽤他们？', link: '/Technology/CSS/42' },
                { text: '为什么要初始化样式？', link: '/Technology/CSS/43' },
                { text: 'IE的双边距BUG：块级元素float后设置横向margin，ie6显⽰的margin⽐设置的较⼤。', link: '/Technology/CSS/44' },
                { text: 'html常⻅兼容性问题？', link: '/Technology/CSS/45' },
                { text: '对WEB标准以及W3C的理解与认识', link: '/Technology/CSS/46' },
                { text: '⾏内元素和块级元素的具体区别是什么？⾏内元素的padding和margin可设置吗？', link: '/Technology/CSS/47' },
                { text: '知道css有个content属性吗？有什么作⽤？有什么应⽤？', link: '/Technology/CSS/48' },
                { text: '介绍下 BFC 及其应⽤', link: '/Technology/CSS/49' },
                { text: '怎么让⼀个 div ⽔平垂直居中', link: '/Technology/CSS/50' },
                { text: '分析⽐较 opacity: 0、visibility: hidden、display: none 优劣和适⽤场景。', link: '/Technology/CSS/51' },
                { text: '已知如下代码，如何修改才能让图⽚宽度为 300px ？注意下⾯代码不可修改。', link: '/Technology/CSS/52' },
                { text: '如何解决移动端 Retina 屏 1px 像素问题', link: '/Technology/CSS/53' },
                { text: '介绍下 BFC、IFC、GFC 和 FFC', link: '/Technology/CSS/54' },
                { text: '如何⽤ css 或 js 实现多⾏⽂本溢出省略效果，考虑兼容性', link: '/Technology/CSS/55' },
                { text: '移动端的布局用过媒体查询吗?', link: '/Technology/CSS/56' },
                { text: '什么是响应式页面?', link: '/Technology/CSS/57' },
                { text: 'CSS媒体查询的原理是什么？', link: '/Technology/CSS/58' },
                { text: 'Css如何实现横向滚动与竖向滚动?', link: '/Technology/CSS/59' },
                { text: 'Margin与padding的区别?', link: '/Technology/CSS/60' },
                { text: '使用CSS预处理的优缺点分别是什么？', link: '/Technology/CSS/61' },
                { text: '浏览器是怎么解析CSS选择器的?', link: '/Technology/CSS/62' },
                { text: '如何设置滚动条样式?', link: '/Technology/CSS/63' },
                { text: '视觉差效果是如何实现的?', link: '/Technology/CSS/64' },
                { text: '你对line-height如何理解?', link: '/Technology/CSS/65' },
                { text: '有一个高度自适应的div,里面有两个div,一个高度100px,一个如何自适应高度?', link: '/Technology/CSS/66' },
                { text: 'Style标签写在body前还是body后?', link: '/Technology/CSS/67' },
                { text: 'png/jpg/gif这些图片格式解释一下?', link: '/Technology/CSS/68' },
                { text: '有什么不同的方式可以隐藏内容?', link: '/Technology/CSS/69' },
                { text: '如何消除transition闪屏', link: '/Technology/CSS/70' },
                { text: '让图文不可复制', link: '/Technology/CSS/71' },
                { text: '有些网页为了尊重原创，复制的文本都会被加上一段来源说明，这个是如何做到的呢？', link: '/Technology/CSS/72' },
                { text: 'em，rem，px的区别？', link: '/Technology/CSS/73' },
                { text: 'css动画与js动画的差异', link: '/Technology/CSS/74' },
                { text: 'Chrome、Safari等浏览器，当表单提交用户选择记住密码后，下次自动填充表单的背景变成黄色，影响了视觉体验是否可以修改', link: '/Technology/CSS/75' },
                { text: '给一个div设置它的宽度为100px，然后再设置它的padding-top为20%。问：现在这个div有多高？', link: '/Technology/CSS/76' },
                { text: '写一个左中右布局，占满全屏，其中左右两块的固定宽度是200，中间自适应宽度，请写出结构及样式', link: '/Technology/CSS/77' },
                { text: 'CSS sprite是什么？有什么优缺点？', link: '/Technology/CSS/78' },
                { text: '什么是FOUC？如何避免', link: '/Technology/CSS/79' },
                { text: '在网页中的字体大小应该使用偶数还是奇数？为什么呢？', link: '/Technology/CSS/80' },
                { text: 'base64的原理及缺点', link: '/Technology/CSS/81' },
                { text: 'stylus、sass、less区别', link: '/Technology/CSS/82' },
            ]
        },
        {
            text:'JS',
            children: [
                { text: '基础', link: '/Technology/JS/' },
                { text: '进阶', link: '/Technology/JS/advanced' },
            ]
        }
    ]
}