---
title HTML 进阶
---

# 面经

## 如何理解 html 语义化

```js
1. 增加代码可读性
2. 利于seo

让人更容易读懂（增加代码可读性）。
让搜索引擎更容易读懂，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）。
在没有 CSS 样式下，页面也能呈现出很好地内容结构、代码结构。
```

## script 标签中 defer 和 async 的区别？

```js
defer 在html解析时，异步加载js，html解析完成后再加载执行
async 在html解析时一起异步加载js，加载完成后立马执行，会阻断html解析


script ：会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML。
async script ：解析 HTML 过程中进行脚本的异步下载，下载成功立马执行，有可能会阻断 HTML 的解析。
defer script：完全不会阻碍 HTML 的解析，解析完成之后再按照顺序执行脚本。
```

## 从浏览器地址栏输入 url 到请求返回发生了什么

```js
1. DNS解析
2. 建立tcp连接
3. 发送http请求
4. 浏览器处理请求并返回请求内容
5. 浏览器处理请求，渲染页面
6. 断开tcp请求
```

## 盒模型介绍

```js
1. 标准盒模型
content + padding + border + margin
width 为 content的宽度
2. ie盒模型
content + padding + border + margin
width 为 content的宽度 + padding + border

两种盒模型相互转换
box-sizing: border-box (ie)
box-sizing: content-box (标准)
```

## css 选择器和优先级

```js
important > 行内样式 > id 选择器 > 类选择器 > 标签选择器
```

## 重排（reflow）和重绘（repaint）的理解

```js
重排
我们将可见DOM节点以及它对应的样式结合起来，可是我们还需要计算它们在设备视口(viewport)内的确切位置和大小，这个计算的阶段就是回流。

重绘
我们通过构造渲染树和回流阶段，我们知道了哪些节点是可见的，以及可见节点的样式和具体的几何信息(位置、大小)，那么我们就可以将渲染树的每个节点都转换为屏幕上的实际像素，这个阶段就叫做重绘节点。

如何减少重排和重绘

最小化重绘和重排，比如样式集中改变，使用添加新样式类名 .class 或 cssText 。
批量操作 DOM，比如读取某元素 offsetWidth 属性存到一个临时变量，再去使用，而不是频繁使用这个计算属性；又比如利用 document.createDocumentFragment() 来添加要被添加的节点，处理完之后再插入到实际 DOM 中。
使用 **absolute** 或 **fixed** 使元素脱离文档流，这在制作复杂的动画时对性能的影响比较明显。
开启 GPU 加速，利用 css 属性 transform 、will-change 等，比如改变元素位置，我们使用 translate 会比使用绝对定位改变其 left 、top 等来的高效，因为它不会触发重排或重绘，transform 使浏览器为元素创建⼀个 GPU 图层，这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。
```

## 对 BFC 的理解

```js
块级格式华上下文;
```

## line-height 如何继承

```js
父元素的 line-height 写了具体数值，比如 30px，则子元素 line-height 继承该值。
父元素的 line-height 写了比例，比如 1.5 或 2，则子元素 line-height 也是继承该比例。
父元素的 line-height 写了百分比，比如 200%，则子元素 line-height 继承的是父元素 font-size * 200% 计算出来的值。
```

## 数据类型

```js
基本数据类型
string number undefined boolean null symbol bigint

引用数据类型
Object

数据类型判断
typeof
只能判断基本数据类型
判断引用数据类型都返回object
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object

instanceof 判断其原型链上能否找到该类型的原型

class People {}
class Student extends People {}

const vortesnail = new Student();

console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true

Object.prototype.toString.call()  所有原始数据类型都是能判断的，还有 Error 对象，Date 对象等。

Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () {}); // "[object Function]"

如何判断变量为数组
1. Object.prototype.toString.call(arr)
2. Array.isArray(arr)
3. arr instanceof Array
4. arr.__proto__ == Array.prototype
```

## 0.1 + 0.2 !== 0.3 问题解决

```js
/**
 * floatObj 包含加减乘除四个方法，能确保浮点数运算不丢失精度
 *
 * 我们知道计算机编程语言里浮点数计算会存在精度丢失问题（或称舍入误差），其根本原因是二进制和实现位数限制有些数无法有限表示
 * 以下是十进制小数对应的二进制表示
 *      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
 *      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
 * 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript 使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。
 *
 * ** method **
 *  add / subtract / multiply /divide
 *
 * ** explame **
 *  0.1 + 0.2 == 0.30000000000000004 （多了 0.00000000000004）
 *  0.2 + 0.4 == 0.6000000000000001  （多了 0.0000000000001）
 *  19.9 * 100 == 1989.9999999999998 （少了 0.0000000000002）
 *
 * floatObj.add(0.1, 0.2) >> 0.3
 * floatObj.multiply(19.9, 100) >> 1990
 *
 */
var floatObj = function () {
  /*
   * 判断obj是否为一个整数
   */
  function isInteger(obj) {
    return Math.floor(obj) === obj;
  }
  /*
   * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
   * @param floatNum {number} 小数
   * @return {object}
   *   {times:100, num: 314}
   */
  function toInteger(floatNum) {
    var ret = { times: 1, num: 0 };
    if (isInteger(floatNum)) {
      ret.num = floatNum;
      return ret;
    }
    var strfi = floatNum + "";
    var dotPos = strfi.indexOf(".");
    var len = strfi.substr(dotPos + 1).length;
    var times = Math.pow(10, len);
    var intNum = parseInt(floatNum * times + 0.5, 10);
    ret.times = times;
    ret.num = intNum;
    return ret;
  }
  /*
   * 核心方法，实现加减乘除运算，确保不丢失精度
   * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
   *
   * @param a {number} 运算数1
   * @param b {number} 运算数2
   * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
   * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
   *
   */
  function operation(a, b, digits, op) {
    var o1 = toInteger(a);
    var o2 = toInteger(b);
    var n1 = o1.num;
    var n2 = o2.num;
    var t1 = o1.times;
    var t2 = o2.times;
    var max = t1 > t2 ? t1 : t2;
    var result = null;
    switch (op) {
      case "add":
        if (t1 === t2) {
          // 两个小数位数相同
          result = n1 + n2;
        } else if (t1 > t2) {
          // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2);
        } else {
          // o1 小数位 小于 o2
          result = n1 * (t2 / t1) + n2;
        }
        return result / max;
      case "subtract":
        if (t1 === t2) {
          result = n1 - n2;
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2);
        } else {
          result = n1 * (t2 / t1) - n2;
        }
        return result / max;
      case "multiply":
        result = (n1 * n2) / (t1 * t2);
        return result;
      case "divide":
        result = (n1 / n2) * (t2 / t1);
        return result;
    }
  } // 加减乘除的四个接口
  function add(a, b, digits) {
    return operation(a, b, digits, "add");
  }
  function subtract(a, b, digits) {
    return operation(a, b, digits, "subtract");
  }
  function multiply(a, b, digits) {
    return operation(a, b, digits, "multiply");
  }
  function divide(a, b, digits) {
    return operation(a, b, digits, "divide");
  } // exports
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
  };
};

const m = floatObj();

console.log(m.add(0.1, 0.2));
```

## toFixed 浏览器兼容问题不会四舍五入解决

```js
// toFixed 修复
function toFixed(num, s) {
  var times = Math.pow(10, s);
  var des = num * times + 0.5;
  des = parseInt(des, 10) / times;
  return des + "";
}
(1.335).toFixed(2); // 1.33
toFixed(1.335, 2); // 1.34
```

## js 执行上下文以及执行栈

```js
** 执行上下文 **
js代码执行环境抽象概念，当js代码执行的时候，都是在执行上下文中执行的

执行上下文类型
1. 全局执行上下文
2. 函数执行上下文
3. eval函数执行上下文

** 执行栈 **
代码的调用栈
```

## 1 秒间隔输出 0,1,2,3,4,5

```js
1;
const tasks = [];
for (var i = 0; i < 5; i++) {
  tasks.push(
    new Promise((resolve) => {
      setTimeout(
        function (j) {
          console.log(new Date(), j);
          resolve();
        },
        1000 * i,
        i
      );
    })
  );
}

Promise.all(tasks).then((res) => {
  setTimeout(() => {
    console.log(new Date(), i);
  }, 1000);
});

2;
const sleep = (timeountMS) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
  });
};

(async function () {
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }
  await sleep(1000);
  console.log(new Date(), i);
})();
```

## with 语句

```js
const obj = {
  name: "why",
  age: 19,
};

// 不建议使用with语句
with (obj) {
  console.log(name);
  console.log(age);
}
```

## eval 函数

```js
可将传入的字符串当做js代码执行;

// 不建议使用
eval("console.log(1)"); // 1
```

## 严格模式

```js
一种限制性JavaScript模式，会更加严格执行和检测js代码
// 开启严格模式
'use strict'

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4.严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象
```
