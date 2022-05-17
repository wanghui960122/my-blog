---
title JS
---

# 面经

## 数组方法 Array.of()

```js
// 没有参数的时候，返回一个空数组

Array.of(1); // [1]
Array.of("a"); // ['a']
Array.of(1, 2); // [1, 2]
```

## 数组方法 copyWithin

```js
// 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

// 参数如下：

// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

[1, 2, 3, 4, 5]
  .copyWithin(0, 2, 3) // [3, 2, 3, 4, 5]

  [(1, 2, 3, 4, 5)].copyWithin(0, 2); // [3, 4, 5, 4, 5]
```

## 数组方法 fill()

```js
// 使用给定值，填充一个数组
[1, 2, 3].fill(7); // [7,7,7]

// 还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
[1, 2, 3, 4, 5].fill(7, 2, 4); // [1,2,7,7,5]
```

## 数组方法 entries()，keys()，values()

```js
// keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

for (let index of ["a", "b"].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ["a", "b"].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ["a", "b"].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

## super 关键字

```js
// this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象
const proto = {
  foo: "hello",
};

const obj = {
  foo: "world",
  find() {
    return super.foo;
  },
};

Object.setPrototypeOf(obj, proto); // 为obj设置原型对象
obj.find(); // "hello"
```

## Object.is()

```js
// 严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身
+0 === -0; //true
NaN === NaN; // false

Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
```

## 函数的 length 属性

```js
// length将返回没有指定默认值的参数个数

var fn1 = function (a) {};
fn1.length; // 1

var fn2 = function (a = 5) {};
fn2.length; // 0

var fn3 = function (a, b, c = 5) {};
fn3.length; // 2

// rest 参数也不会计入length属性
(function (...args) {}.length); // 0

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
var fn4 = function (a = 0, b, c) {};
fn4.length; // 0
var fn5 = function (a, b = 1, c) {};
fn5.length; // 1
```

## 作用域

```js
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域

// 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的

// 下面例子中，y=x会形成一个单独作用域，x没有被定义，所以指向全局变量x

let x = 1;

function f(y = x) {
  // 等同于 let y = x
  let x = 2;
  console.log(y);
}

f(); // 1
```

## Decorator 装饰器

```js
// Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式

// 简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。

// ES6中Decorator功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法

// 这里定义一个士兵，这时候他什么装备都没有

class soldier {}

// 定义一个得到 AK 装备的函数，即装饰器

function strong(target) {
  target.AK = true;
}

// 使用该装饰器对士兵进行增强

// @strong
class soldier {}

// 这时候士兵就有武器了

soldier.AK; // true

// 上述代码虽然简单，但也能够清晰看到了使用Decorator两大优点：

// 代码可读性变强了，装饰器命名相当于一个注释
// 在不改变原有代码情况下，对原来功能进行扩展
```

## 尾递归

```js
// 普通递归
// 在return执行，再次调用函数，多次入栈，容易造成栈溢出
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
  // 相当于
  // let r = factorial(n - 1)
  // return n * r
}

factorial(5); // 120

// 尾递归
// 每次返回函数执行结果，说明将上一次函数踢出栈，重新入栈
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1); //120
```

## 大文件上传如何做断点续传？

```js
// 分片上传
// 断点续传
```

## 下拉刷新 && 上拉加载

```js
// 上拉加载
// 可滚动的页面具有scrollHeight属性，
// scrollTop 滚动的高度
// clientHeight 屏幕可视区域高度
let clientHeight = document.documentElement.clientHeight; //浏览器高度
let scrollHeight = document.body.scrollHeight;
let scrollTop = document.documentElement.scrollTop;

let distance = 50; //距离视窗还用50的时候，开始触发；

if (scrollTop + clientHeight >= scrollHeight - distance) {
  console.log("开始加载数据");
}

// 下拉刷新
// 监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；
// 监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；
// 监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置

// html结构
<main>
  <p class="refreshText"></p>
  <ul id="refreshContainer">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
    ...
  </ul>
</main>;

// 监听touchstart事件，记录初始的值
var _element = document.getElementById("refreshContainer"),
  _refreshText = document.querySelector(".refreshText"),
  _startPos = 0, // 初始的值
  _transitionHeight = 0; // 移动的距离

_element.addEventListener(
  "touchstart",
  function (e) {
    _startPos = e.touches[0].pageY; // 记录初始位置
    _element.style.position = "relative";
    _element.style.transition = "transform 0s";
  },
  false
);

// 监听touchmove移动事件，记录滑动差值
_element.addEventListener(
  "touchmove",
  function (e) {
    // e.touches[0].pageY 当前位置
    _transitionHeight = e.touches[0].pageY - _startPos; // 记录差值

    if (_transitionHeight > 0 && _transitionHeight < 60) {
      _refreshText.innerText = "下拉刷新";
      _element.style.transform = "translateY(" + _transitionHeight + "px)";

      if (_transitionHeight > 55) {
        _refreshText.innerText = "释放更新";
      }
    }
  },
  false
);

// 最后，就是监听touchend离开的事件
_element.addEventListener(
  "touchend",
  function (e) {
    _element.style.transition = "transform 0.5s ease 1s";
    _element.style.transform = "translateY(0px)";
    _refreshText.innerText = "更新中...";
    // todo...
  },
  false
);
```

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

## 获取对象属性描述符

```js
// 获取某一个特性属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));
```

## 禁止对象添加新属性

```js
Object.preventExtensions(obj);
// 给一个对象添加新的属性会失败（在严格模式下会报错）
```

## 禁止对象配置/删除里面的属性

```js
Object.seal(obj);
// 实际上配置Object.preventExtensions(obj), 每个属性configurable: false
```

## 冻结对象

```js
Object.freeze(obj);
// 实际调用Object.seal(obj), writable: false
```

## new 操作符实现过程

```js
1. 创建一个新对象
2. 将这个对象的__proto__指向构造函数的prototype属性
3. 构造函数内部this指向这个对象
4. 执行函数内部代码
5. 返回这个对象
```

## 获取对象**proto**属性

```js
1. obj.__proto__
2. Object.getPrototypeOf(obj)
// 两值相等
```

## 通过原型链继承

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};

const p = new Person("why", 19);

function Student() {}

Student.prototype = p;

const stu = new Student();

console.log(stu.name);
console.log(p.name);

// 弊端
// 看不到具体属性
// 多个对象共享属性
// 不能给父类传递参数
```

## 借用构造函数继承

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.num = 111;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

const p = new Person("wang", 18);

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = p;

const stu = new Student("why", 19);

console.log(stu);

stu.eating();

// 弊端
// 只能继承父类的实例属性和方法，不能继承原型属性/方法。
```

## 构造组合继承

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.num = 111;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

const p = new Person("wang", 18);

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = p;
Student.prototype.constructor = Student;

const stu = new Student("why", 19);

console.log(stu);

stu.eating();

// 弊端
// Person会执行两次
// stu的原型上会多出来一些没必要的属性
```

## 原型式继承

```js
function createObject(obj) {
  const newObj = {};
  Object.setPrototypeOf(newObj, obj);
  // newObj.__proto__ = obj;
  return newObj;
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  var newObj = new Fn();
  return newObj;
}

const obj = {
  name: "why",
};
const info = Object.create(obj);
// const info = createObject(obj);
// const info = createObject2(obj);
```

## 寄生式继承

```js
const obj = {
  name: "why",
};

function creatObj(age, obj) {
  const newObj = Object.create(obj);
  newObj.age = age;
  return newObj;
}

const info = creatObj(19, obj);
console.log(info);
console.log(info.name);
```

## 寄生组合式继承

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.num = 111;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype);

Object.defineProperty(Student.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: Student,
});

Student.prototype.eating = function () {
  console.log(1111);
};

const stu1 = new Student("why", 10);
const p = new Person("coder", 19);
p.eating();
console.log(stu1);
stu1.eating();
```

## 判断某个对象上的属性在自己身上，而不在原型上

```js
var obj = {
  age: 11,
};

const info = Object.create(obj);

info.height = 1.88;

console.log(info.hasOwnProperty("height")); // true
console.log(info.hasOwnProperty("age")); // false
```

## 判断某个属性是否在对象上或原型上

```js
var obj = {
  age: 11,
};

const info = Object.create(obj);

info.height = 1.88;

console.log("height" in info); // true
console.log("age" in info); // true

// for in
for (let key in info) {
  console.log(key);
}
```

## instanceOf

```js
// 用于检测构造函数的prototype 是否出现在某个实例对象的原型链上

function Person() {}

function Student() {
  Person.call(this);
}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: Student,
});

const stu = new Student();

console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
```

## isPrototypeOf

```js
// 用于检测某个对象是否出现在某个实例对象的原型链上
const obj = {};

const info = Object.create(obj);

// info.__proto__ = obj

console.log(obj.isPrototypeOf(info)); // true
console.log(info.__proto__ == obj);
```

## 类

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(1);
  }
  runing() {}
}

class Student extends Person {
  constructor(name, age, height) {
    super(name, age);
    this.height = height;
  }
  studying() {}
}

const stu = new Student("wht", 19, 1.88);
console.log(stu);
stu.eating();
```

## 类的访问器方法

```js
class Person {
  constructor(height) {
    this._height = height;
  }

  set height(newHeight) {
    console.log("设置");
    this._height = newHeight;
  }

  get height() {
    console.log("获取");
    return this._height;
  }

  eating() {
    console.log(1);
  }
  runing() {}
}

const p = new Person(1.9);
p.height = 2.0;
console.log(p.height);
```

## 类的静态属性

```js
// static
// 静态方法通常用于定义直接使用类来执行的方法，不能通过实例来访问
class Person {
  constructor(height) {
    this._height = height;
  }

  set height(newHeight) {
    console.log("设置");
    this._height = newHeight;
  }

  get height() {
    console.log("获取");
    return this._height;
  }

  static eating() {
    console.log(1);
  }
  runing() {}
}

const p = new Person(1.9);
p.height = 2.0;
console.log(p.height);

Person.eating();
p.eating();
```

## 继承内置类

```js
class MyArray extends Array {}
```

## 类的混入 mixin

```js
function mixinRunner(BaseClass) {
  class MixClass extends BaseClass {
    running() {
      console.log(2);
    }
  }
  return MixClass;
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    working() {
      console.log(1);
    }
  };
}

class Student {
  studying() {
    console.log(3);
  }
}

const NewStudent = mixinEater(mixinRunner(Student));

const stu = new NewStudent();
stu.working();
stu.running();
stu.studying();
```

## 多态

```js
// 多态: 当对不同的数据类型执行同一个操作时, 如果表现出来的行为(形态)不一样, 那么就是多态的体现.
// 多态: 当对不同的数据类型执行同一个操作时, 如果表现出来的行为(形态)不一样, 那么就是多态的体现.
function calcArea(foo) {
  console.log(foo.getArea());
}

var obj1 = {
  name: "why",
  getArea: function () {
    return 1000;
  },
};

class Person {
  getArea() {
    return 100;
  }
}

var p = new Person();

calcArea(obj1);
calcArea(p);

// 也是多态的体现
function sum(m, n) {
  return m + n;
}

sum(20, 30);
sum("abc", "cba");
```

## computed property name(计算属性名)

```js
var name = "why";
var age = 18;

var obj = {
  // computed property name(计算属性名)
  [name + 123]: "hehehehe",
};
```

## 数组结构

```js
var names = ["abc", "cba", "nba"];
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]

// 对数组的解构: []
var [item1, item2, item3] = names;
console.log(item1, item2, item3);

// 解构后面的元素
var [, , itemz] = names;
console.log(itemz);

// 解构出一个元素,后面的元素放到一个新数组中
var [itemx, ...newNames] = names;
console.log(itemx, newNames);

// 解构的默认值
var [itema, itemb, itemc, itemd = "aaa"] = names;
console.log(itemd);
```

## 对象结构

```js
var obj = {
  name: "why",
  age: 18,
  height: 1.88,
};

// 对象的解构: {}
var { name, age, height } = obj;
console.log(name, age, height);

var { age } = obj;
console.log(age);

var { name: newName } = obj;
console.log(newName);

var { address: newAddress = "广州市" } = obj;
console.log(newAddress);

function foo(info) {
  console.log(info.name, info.age);
}

foo(obj);

function bar({ name, age }) {
  console.log(name, age);
}

bar(obj);
```

## 模板字符串

```js
function foo(m, ...n) {
  console.log(m);
  console.log(n);
}

foo`1-2${3}4${5}6`;
```

## es6 表示数值

```js
const num1 = 100; // 十进制

// b -> binary
const num2 = 0b100; // 二进制
// o -> octonary
const num3 = 0o100; // 八进制
// x -> hexadecimal
const num4 = 0x100; // 十六进制

console.log(num1, num2, num3, num4);

// 大的数值的连接符(ES2021 ES12)
const num = 10_000_000_000_000_000;
console.log(num);
```

## Symbol

```js
const s1 = Symbol("1");
const s2 = Symbol("2");
const s3 = Symbol("1");
console.log(s1);
console.log(s2);

console.log(s1 == s3); // false

console.log(s1.description); // 1
console.log(s2.description); // 2

const obj = {
  [s1]: "why",
  [s2]: 11,
};
obj[s3] = 1.99;

const s4 = Symbol("4");
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "mba",
});

console.log(obj);
// 不能通过点语法获取
console.log(obj.s1); // undefined

console.log(obj[s1]); // why

// 获取不到key
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(1), Symbol(2), Symbol(1), Symbol(4) ]

const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa);
console.log(sb);
console.log(sa === sb); // true

const key = Symbol.keyFor(sa);
console.log(key);
console.log(sa.description);
console.log(sa.description == key); // true
const sc = Symbol.for(key);
console.log(sa === sc); // true
```

## Set

```js
const set = new Set();

// 自动去重

set.add(1);
set.add(2);
set.add(2);

set.add({});

const obj = {};
set.add(obj);

set.delete(obj);

console.log(set.has(1)); // true

console.log(set);

console.log(set.size); // 3

set.forEach((item) => {
  console.log(item);
});

for (const item of set) {
  console.log(item);
}
```

## weakSet

```js
const weakSet = new WeakSet();

// 1.区别一: 只能存放对象类型
// TypeError: Invalid value used in weak set
// weakSet.add(10)

// 强引用和弱引用的概念(看图)

// 2.区别二: 对对象是一个弱引用
let obj = {
  name: "why",
};

// weakSet.add(obj)

const set = new Set();
// 建立的是强引用
set.add(obj);

// 建立的是弱引用
weakSet.add(obj);

// 3.WeakSet的应用场景
const personSet = new WeakSet();
class Person {
  constructor() {
    personSet.add(this);
  }

  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法创建出来的对象调用running方法");
    }
    console.log("running~", this);
  }
}

let p = new Person();
p.running();
p = null;

p.running.call({ name: "why" });
```

## Map

```js
// 1.JavaScript中对象中是不能使用对象来作为key的
const obj1 = { name: "why" };
const obj2 = { name: "kobe" };

// const info = {
//   [obj1]: "aaa",
//   [obj2]: "bbb"
// }

// console.log(info)

// 2.Map就是允许我们对象类型来作为key的
// 构造方法的使用
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bbb");
map.set(1, "ccc");
console.log(map);

const map2 = new Map([
  [obj1, "aaa"],
  [obj2, "bbb"],
  [2, "ddd"],
]);
console.log(map2);

// 3.常见的属性和方法
console.log(map2.size);

// set
map2.set("why", "eee");
console.log(map2);

// get(key)
console.log(map2.get("why"));

// has(key)
console.log(map2.has("why"));

// delete(key)
map2.delete("why");
console.log(map2);

// clear
// map2.clear()
// console.log(map2)

// 4.遍历map
map2.forEach((item, key) => {
  console.log(item, key);
});

for (const item of map2) {
  console.log(item[0], item[1]);
}

for (const [key, value] of map2) {
  console.log(key, value);
}
```

## weakMap

```js
const obj = { name: "obj1" };
// 1.WeakMap和Map的区别二:
const map = new Map();
map.set(obj, "aaa");

const weakMap = new WeakMap();
weakMap.set(obj, "aaa");

// 2.区别一: 不能使用基本数据类型
// weakMap.set(1, "ccc")

// 3.常见方法
// get方法
console.log(weakMap.get(obj));

// has方法
console.log(weakMap.has(obj));

// delete方法
console.log(weakMap.delete(obj));
// WeakMap { <items unknown> }
console.log(weakMap);
```

## 响应式原理中 weakMap 的使用

```js
// 应用场景(vue3响应式原理)
const obj1 = {
  name: "why",
  age: 18,
};

function obj1NameFn1() {
  console.log("obj1NameFn1被执行");
}

function obj1NameFn2() {
  console.log("obj1NameFn2被执行");
}

function obj1AgeFn1() {
  console.log("obj1AgeFn1");
}

function obj1AgeFn2() {
  console.log("obj1AgeFn2");
}

const obj2 = {
  name: "kobe",
  height: 1.88,
  address: "广州市",
};

function obj2NameFn1() {
  console.log("obj1NameFn1被执行");
}

function obj2NameFn2() {
  console.log("obj1NameFn2被执行");
}

// 1.创建WeakMap
const weakMap = new WeakMap();

// 2.收集依赖结构
// 2.1.对obj1收集的数据结构
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
weakMap.set(obj1, obj1Map);

// 2.2.对obj2收集的数据结构
const obj2Map = new Map();
obj2Map.set("name", [obj2NameFn1, obj2NameFn2]);
weakMap.set(obj2, obj2Map);

// 3.如果obj1.name发生了改变
// Proxy/Object.defineProperty
obj1.name = "james";
const targetMap = weakMap.get(obj1);
const fns = targetMap.get("name");
fns.forEach((item) => item());
```

## includes

```js
const arr = [1, 2, 3];

console.log(arr.includes(1)); // true
console.log(arr.indexOf(1)); // 0

console.log("abc".indexOf("a")); // 0
console.log("abc".includes("a")); // true
```

## 指数运算

```js
console.log(Math.pow(3, 3)); // 27
console.log(3 ** 3); // 27
```

## Object.values

```js
const obj = {
  name: "aa",
  age: 1,
};

console.log(Object.values(obj)); // ['aa', 1]
console.log(Object.values("abc")); // ['a', 'b', 'c']
```

## Object.entries Object.fromEntries

```js
const obj = {
  name: "111",
  age: "1",
};

console.log(Object.entries(obj)); // [ [ 'name', '111' ], [ 'age', '1' ] ]
console.log(Object.entries(["a", "b", "c"])); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
console.log(
  Object.fromEntries([
    ["name", "111"],
    ["age", "1"],
  ])
);
// const obj = {
//   name: "111",
//   age: "1",
// };
```

## padStart padEnd

```js
var message = "aabb";

message = message.padEnd(8, "*");
message = message.padStart(8, "*");

console.log(message); // aabb****
```

## flat flatMap

```js
const arr = [1, 2, [3, 4, [5, 6]]];

console.log(arr.flat(1)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4,  5, 6 ]

const messageArr = ["hello world", "hello lyh", "my name is coderwhy"];

newArr = messageArr.flatMap((item) => {
  return item.split(" ");
});

console.log(newArr);
// [
//   'hello', 'world',
//   'hello', 'lyh',
//   'my',    'name',
//   'is',    'coderwhy'
// ]
```

## trim trimEnd trimStart

```js
console.log(" aa ".trim()); // aa
console.log(" aa ".trimEnd()); //  aa
console.log(" aa ".trimStart()); // aa
```

## bigInt

```js
// ES11之前 max_safe_integer
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); // 9007199254740991
console.log(maxInt + 1);
console.log(maxInt + 2);

// ES11之后: BigInt
const bigInt = 900719925474099100n;
console.log(bigInt + 10n);

const num = 100;
console.log(bigInt + BigInt(num));

const smallNum = Number(bigInt);
console.log(smallNum);
```

## 空值合并运算 ??

```js
// ES11: 空值合并运算 ??

const foo = undefined;
// const bar = foo || "default value"
const bar = foo ?? "defualt value";

console.log(bar);
```

## 可选链

```js
const info = {
  name: "why",
  // friend: {
  //   girlFriend: {
  //     name: "hmm"
  //   }
  // }
};

// console.log(info.friend.girlFriend.name)
// if (info && info.friend && info.friend.girlFriend) {
//   console.log(info.friend.girlFriend.name)
// }

// ES11提供了可选链(Optional Chainling)
console.log(info.friend?.girlFriend?.name);

console.log("其他的代码逻辑");
```

## globalThis

```js
// 获取某一个环境下的全局对象(Global Object)

// 在浏览器下
// console.log(window)
// console.log(this)

// 在node下
// console.log(global)

// ES11
console.log(globalThis);
```

## for in

```js
// for...in 标准化: ECMA
const obj = {
  name: "why",
  age: 18,
};

for (const item in obj) {
  console.log(item);
}
```

## ES12: FinalizationRegistry 类

```js
// ES12: FinalizationRegistry类
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册在finalRegistry的对象, 某一个被销毁", value);
});

let obj = { name: "why" };
let info = { age: 18 };

finalRegistry.register(obj, "obj");
finalRegistry.register(info, "value");

obj = null;
info = null;
```

## WeakRef 类

```js
// ES12: WeakRef类
// WeakRef.prototype.deref:
// > 如果原对象没有销毁, 那么可以获取到原对象
// > 如果原对象已经销毁, 那么获取到的是undefined
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册在finalRegistry的对象, 某一个被销毁", value);
});

let obj = { name: "why" };
let info = new WeakRef(obj);

finalRegistry.register(obj, "obj");

obj = null;

setTimeout(() => {
  console.log(info.deref()?.name);
  console.log(info.deref() && info.deref().name);
}, 10000);
```

## ??= ||= &&=

```js
// 1.||= 逻辑或赋值运算
// let message = "hello world"
// message = message || "default value"
// message ||= "default value"
// console.log(message)

// 2.&&= 逻辑与赋值运算
// &&
// const obj = {
//   name: "why",
//   foo: function() {
//     console.log("foo函数被调用")

//   }
// }

// obj.foo && obj.foo()

// &&=
// let info = {
//   name: "why"
// }

// // 1.判断info
// // 2.有值的情况下, 取出info.name
// // info = info && info.name
// info &&= info.name
// console.log(info)

// 3.??= 逻辑空赋值运算
let message = 0;
// message = 0 ?? "1";
message ??= "default value";
console.log(message);
```

## Proxy

```js
const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key) {
    console.log(target, key);
    return target[key];
  },
  set: function (target, key, newValue) {
    console.log(target, key, newValue);
    target[key] = newValue;
  },
});

console.log(newObj.name);
console.log(newObj.age);

newObj.age = 12;
```

## Proxy 其他捕获器

```js
const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  has: function (target, key) {
    return key in target;
  },
  get: function (target, key) {
    console.log(target, key);
    return target[key];
  },
  set: function (target, key, newValue) {
    console.log(target, key, newValue);
    target[key] = newValue;
  },
  deleteProperty: function (target, key) {
    console.log("删除");
    delete target[key];
  },
  defineProperty: function () {},
  ownKeys: function () {},
  setPrototypeOf: function () {},
  getOwnPropertyDescriptor: function () {},
  getPrototypeOf: function () {},
  isExtensible: function () {},
  preventExtensions() {},
  apply: function () {},
  construct: function () {},
});

console.log(newObj.name);
console.log(newObj.age);

newObj.age = 12;
delete newObj.age;

console.log("name" in newObj);

// 暂列举常用的四个
```

## Proxy 代理函数

```js
function foo() {
  console.log(11);
}

const newFoo = new Proxy(foo, {
  apply: function (target, thisArg, otherArg) {
    console.log(target, thisArg, otherArg);
    target.apply(thisArg, otherArg);
  },
  construct: function (target, argArray, newTarget) {
    console.log(target, argArray, newTarget);
    return new target(...argArray);
  },
});

newFoo.apply({ name: "why" }, [1, 2]);
new newFoo("abc", "cba");
```

## Reflect

```js
const obj = {
  name: "why",
  age: 11,
};

// set
Reflect.set(obj, "height", 1.99);

// get
console.log(Reflect.get(obj, "name"));

// getPrototypeOf
console.log(Reflect.getPrototypeOf(obj));

// getOwnPropertyDescriptor
console.log(Reflect.getOwnPropertyDescriptor(obj, "name"));

// has
console.log(Reflect.has(obj, "name"));

// delete
Reflect.deleteProperty(obj, "age");

// ownKeys
console.log(Reflect.ownKeys(obj));

// setPrototypeOf
// isExtensible
// preventExtensions
// defineProperty
// construct
// apply
console.log(obj);
```

## Proxy 和 Reflect 一起使用

```js
const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key, reciver) {
    console.log(target, key, reciver);
    return Reflect.get(target, key);
  },
  set: function (target, key, newValue, reciver) {
    console.log(target, key, newValue, reciver);
    Reflect.set(target, key, newValue);
  },
});

newObj.age = 12;
console.log(newObj.name);
console.log(newObj);
console.log(obj);
```

## receiver 参数的作用

```js
const obj = {
  _name: "why",
  get name() {
    console.log(this);
    // 不传入receiver是 this == obj
    // 传入 rreceiver this == newObj
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

const newObj = new Proxy(obj, {
  get: function (target, key, reciver) {
    // target 原来对象
    // receiver 代理对象
    // console.log(target, key, reciver);
    console.log("get被访问");
    return Reflect.get(target, key, reciver);
  },
  set: function (target, key, newValue, reciver) {
    // console.log(target, key, newValue, reciver);
    Reflect.set(target, key, newValue, reciver);
  },
});

console.log(newObj.name);
```

## Reflect construct 作用

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teatcher() {}

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象

const t = Reflect.construct(Student, ["why", 11], Teatcher);
console.log(t);

console.log(t.__proto__ == Teatcher.prototype); // true
```

## 响应式函数封装

```js
// 封装一个响应式的函数
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

// 对象的响应式
const obj = {
  name: "why",
  age: 18,
};

watchFn(function () {
  const newName = obj.name;
  console.log("你好啊, 李银河");
  console.log("Hello World");
  console.log(obj.name); // 100行
});

watchFn(function () {
  console.log(obj.name, "demo function -------");
});

function bar() {
  console.log("普通的其他函数");
  console.log("这个函数不需要有任何响应式");
}

obj.name = "kobe";
reactiveFns.forEach((fn) => {
  fn();
});
```

## 依赖收集类的封装

```js
// 依赖收集类的封装
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const depend = new Depend();

const obj = {
  name: "why",
  age: 11,
};

function watchFn(fn) {
  depend.addDepend(fn);
}

watchFn(function () {
  console.log(2222);
});

watchFn(function () {
  console.log(3333);
});

obj.name = "jay";
depend.notify();
```

## 自动监听对象变化

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const depend = new Depend();

const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    depend.notify();
  },
});

function watchFn(fn) {
  depend.addDepend(fn);
}

watchFn(function () {
  console.log(2222);
});

watchFn(function () {
  console.log(3333);
});

newObj.name = "jay";
newObj.name = "jack";
```

## 依赖收集的管理

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

const depend = new Depend();

const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    console.log(depend);
    depend.notify();
  },
});

function watchFn(fn) {
  depend.addDepend(fn);
}

watchFn(function () {
  console.log(2222);
});

watchFn(function () {
  console.log(3333);
});

const info = {
  address: "xxx",
};

watchFn(function () {
  console.log(444);
});

watchFn(function () {
  console.log(555);
});

newObj.name = "jay";
newObj.name = "jack";

// const objMap = new Map();
// objMap.set("name", "nameDepend");
// objMap.set("age", "ageDepend");

// const infoMap = new Map();
// infoMap.set("address", "addressDepend");

// const targetMap = new WeakMap();
// targetMap.set(obj, objMap);
// targetMap.set(info, infoMap);

// // obj.name

// targetMap.get(obj).get("name").notify();
```

## 正确收集依赖

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    const depend = getDepend(target, key);
    depend.addDepend(reactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

let reactiveFn = null;

function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

watchFn(function () {
  console.log(2222);
  console.log(newObj.name);
});

watchFn(function () {
  console.log(3333);
  console.log(newObj.age);
});

newObj.name = "zs";
```

## 对 Depend 类的重构

```js
let reactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

const obj = {
  name: "why",
  age: 11,
};

const newObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    const depend = getDepend(target, key);
    // depend.addDepend(reactiveFn);
    depend.depend();
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

watchFn(function () {
  console.log(2222);
  console.log(newObj.name);
});

watchFn(function () {
  console.log(3333);
  console.log(newObj.age);
});

newObj.name = "zs";
```

## 对象的响应式操作 vue3

```js
let reactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const depend = getDepend(target, key);
      // depend.addDepend(reactiveFn);
      depend.depend();
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver);
      const depend = getDepend(target, key);
      depend.notify();
    },
  });
}

const newObj = reactive({
  name: "why",
  age: 11,
});

function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

watchFn(function () {
  console.log(2222);
  console.log(newObj.name);
});

watchFn(function () {
  console.log(3333);
  console.log(newObj.age);
});

newObj.name = "zs";
```

## 对象的响应式操作 vue2

```js
let reactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function (newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
}

const proxyObj = reactive({
  name: "why",
  age: 11,
});

function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

watchFn(function () {
  console.log(2222);
  console.log(proxyObj.name);
});

watchFn(function () {
  console.log(3333);
  console.log(proxyObj.age);
});

proxyObj.name = "zs";
```

## Promise 基本使用

```js
function foo() {
  return new Promise((resolve, rejectt) => {
    // resolve(1);
    rejectt(2);
  });
}

// .then()接收两个函数，第一个处理成功回调，第二个处理失败回调
foo().then(
  (res) => {
    console.log(res); // 1
  },
  (err) => {
    console.log(err);
  }
);

// .catch()处理失败回调
foo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// .finally() 不论失败成功都会来到finally
foo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally code execute");
  });
```

## resolve 的参数

```js
function foo() {
  return new Promise((resolve, reject) => {
    // 传入普通值 pending -> resolve
    // resolve(1);

    // 传入一个Promise 由传入的这个Promise的状态决定
    // resolve(
    //   new Promise((resolve) => {
    //     resolve(2);
    //   })
    // );

    // 传入一个对象，并且这个对象有实现then方法(并且这个对象是实现了thenable接口)那么也会执行该then方法, 并且又该then方法决定后续状态
    resolve({
      then(resolve, reject) {
        resolve(3);
      },
    });
  });
}

foo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Promise.then() 方法

```js
// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
  resolve("hahaha");
});

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
// promise.then(res => {
//   console.log("res1:", res)
// })

// promise.then(res => {
//   console.log("res2:", res)
// })

// promise.then(res => {
//   console.log("res3:", res)
// })

// 2.then方法传入的 "回调函数: 可以有返回值
// then方法本身也是有返回值的, 它的返回值是Promise

// 1> 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 那么这个普通的值被作为一个新的Promise的resolve值
// promise.then(res => {
//   return "aaaaaa"
// }).then(res => {
//   console.log("res:", res)
//   return "bbbbbb"
// })

// 2> 如果我们返回的是一个Promise
// promise.then(res => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(111111)
//     }, 3000)
//   })
// }).then(res => {
//   console.log("res:", res)
// })

// 3> 如果返回的是一个对象, 并且该对象实现了thenable
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve(222222);
      },
    };
  })
  .then((res) => {
    console.log("res:", res);
  });
```

## Promise.catch() 方法

```js
// const promise = new Promise((resolve, reject) => {
//   resolve()
//   // reject("rejected status")
//   // throw new Error("rejected status")
// })

// 1.当executor抛出异常时, 也是会调用错误(拒绝)捕获的回调函数的
// promise.then(undefined, err => {
//   console.log("err:", err)
//   console.log("----------")
// })

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
// promise/a+规范
// promise.catch(err => {
//   console.log("err:", err)
// })
// promise.then(res => {
//   // return new Promise((resolve, reject) => {
//   //   reject("then rejected status")
//   // })
//   throw new Error("error message")
// }).catch(err => {
//   console.log("err:", err)
// })

// 3.拒绝捕获的问题(前面课程)
// promise.then(res => {

// }, err => {
//   console.log("err:", err)
// })
// const promise = new Promise((resolve, reject) => {
//   reject("111111")
//   // resolve()
// })

// promise.then(res => {
// }).then(res => {
//   throw new Error("then error message")
// }).catch(err => {
//   console.log("err:", err)
// })

// promise.catch(err => {

// })

// 4.catch方法的返回值
const promise = new Promise((resolve, reject) => {
  reject("111111");
});

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
    return "catch return value";
  })
  .then((res) => {
    console.log("res result:", res);
  })
  .catch((err) => {
    console.log("err result:", err);
  });
```

## Promise.finally() 方法

```js
const promise = new Promise((resolve, reject) => {
  // resolve("resolve message")
  reject("reject message");
});

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  })
  .finally(() => {
    console.log("finally code execute");
  });
```

## Promise 类方法 resolve

```js
const p = Promise.resolve({ name: "why" });
// 相当于
// new Promise(resolve => {
//   resolve({name: 'why'})
// })
p.then((res) => {
  console.log(res);
});

// 2.传入Promise
const promise = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve("11111");
  })
);

promise.then((res) => {
  console.log("res:", res);
});

// 3.传入thenable对象
```

## Promise 类方法 reject

```js
// const promise = Promise.reject("rejected message")
// 相当于
// const promise2 = new Promsie((resolve, reject) => {
//   reject("rejected message")
// })

// 注意: 无论传入什么值都是一样的
const promise = Promise.reject(new Promise(() => {}));

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
```

## Promise 类方法 all

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

// 需求: 所有的Promise都变成fulfilled时, 再拿到结果
// 意外: 在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
Promise.all([p2, p1, p3, "aaaa"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
```

## Promise 类方法 allSetted

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

// allSettled
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Promise 类方法 race

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 1000);
});

// race: 竞技/竞赛
// 只要有一个Promise变成fulfilled或者rejected状态, 那么就结束
// 意外:
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
```

## Promise 类方法 any

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(11111)
    resolve(1111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(33333)
    reject(3333);
  }, 3000);
});

// any方法
// 只要有一个变为fulfilled 就结束
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err.errors);
  });
```

## 实现一个 Promise 类

```js
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

function execFunctionWithCatchError(exactFn, value, resolve, reject) {
  try {
    resolve(exactFn(value));
  } catch (error) {
    reject(error);
  }
}

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status != PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status != PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          // this.onRejected(this.reason);
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    const defaultOnRejected = (err) => {
      throw err;
    };
    onRejected = onRejected || defaultOnRejected;

    const defaultOnFulfilled = (value) => {
      return value;
    };
    onFulfilled = onFulfilled || defaultOnFulfilled;

    return new HYPromise((resolve, reject) => {
      // 处理延迟加载函数
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   resolve(onFulfilled(this.value));
        // } catch (error) {
        //   reject(error);
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   resolve(onRejected(this.reason));
        // } catch (error) {
        //   reject(error);
        // }
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }
      if (this.status == PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execFunctionWithCatchError(
              onFulfilled,
              this.value,
              resolve,
              reject
            );
          });
        if (onRejected)
          this.onRejectedFns.push(() => {
            execFunctionWithCatchError(
              onRejected,
              this.reason,
              resolve,
              reject
            );
          });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(value) {
    return new HYPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new HYPromise((resolve, reject) => {
      let values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) resolve(values);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static allSettled(promises) {
    return new HYPromise((resolve, reject) => {
      let values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push({
              status: PROMISE_STATUS_FULFILLED,
              value: res,
            });
            if (values.length === promises.length) resolve(values);
          },
          (err) => {
            values.push({
              status: PROMISE_STATUS_REJECTED,
              value: err,
            });
            if (values.length === promises.length) resolve(values);
          }
        );
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      let values = [];
      promises.forEach((promise) => {
        promise.then(resolve, (err) => {
          values.push(err);
          if (values.length === promises.length) {
            // AggregateError node环境不支持
            reject(new AggregateError(values));
          }
        });
      });
    });
  }
}
```

## JSON

```js
const obj = {
  name: "why",
  age: 19,
  arr: [1, 2, 3],
  friends: {
    name: "ss",
  },
  // 函数会转换失败
  foo: function () {
    console.log(1);
  },
  toJSON: function () {
    return "123456";
  },
};

const newObj1 = JSON.stringify(obj);
console.log(newObj1);

// stringify第二个参数replacer
// 传入数组 设置哪些需要转换
const newObj2 = JSON.stringify(obj, ["name", "arr"]);
console.log(newObj2);

// 传入回调函数
// 对一些数据做特殊处理
const newObj3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 11;
  }
  return value;
});
console.log(newObj3);

// stringify第三参数 space
const newObj4 = JSON.stringify(obj, null, "-----");
console.log(newObj4);
// {
//   -----"name": "why",
//   -----"age": 19,
//   -----"arr": [
//   ----------1,
//   ----------2,
//   ----------3
//   -----],
//   -----"friends": {
//   ----------"name": "ss"
//   -----}
//   }

// 4.如果obj对象中有toJSON方法
// 会调用这个方法获取返回值
const newObj5 = JSON.stringify(obj);
console.log(newObj5);
// "123456"
// "123456"
// "123456"
// "123456"
// "123456"

const JSONString =
  '{"name":"why","age":19,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}';

// 第二个参数传入回调函数
const info = JSON.parse(JSONString, (key, value) => {
  if (key === "age") {
    return value - 1;
  }
  return value;
});
console.log(info);
```

## localStorage

```js
// 1.setItem
localStorage.setItem("name", "coderwhy");
localStorage.setItem("age", 18);

// 2.length
console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}

// 3.key方法
console.log(localStorage.key(0));

// 4.getItem(key)
console.log(localStorage.getItem("age"));

// 5.removeItem
localStorage.removeItem("age");

// 6.clear方法
localStorage.clear();
```

## storage 工具类的封装

```js
class HYCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const localCache = new HYCache();
const sessionCache = new HYCache(false);

export { localCache, sessionCache };
```

## indexedDB 数据库的使用

```js
// 打开数据(和数据库建立连接)
const dbRequest = indexedDB.open("why", 3);
dbRequest.onerror = function (err) {
  console.log("打开数据库失败~");
};
let db = null;
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};
// 第一次打开/或者版本发生升级
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  console.log(db);

  // 创建一些存储对象
  db.createObjectStore("users", { keyPath: "id" });
};

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const users = [
  new User(100, "why", 18),
  new User(101, "kobe", 40),
  new User(102, "james", 30),
];

// 获取btns, 监听点击
const btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction("users", "readwrite");
    console.log(transaction);
    const store = transaction.objectStore("users");

    switch (i) {
      case 0:
        console.log("点击了新增");
        for (const user of users) {
          const request = store.add(user);
          request.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          };
        }
        transaction.oncomplete = function () {
          console.log("添加操作全部完成");
        };
        break;
      case 1:
        console.log("点击了查询");

        // 1.查询方式一(知道主键, 根据主键查询)
        // const request = store.get(102)
        // request.onsuccess = function(event) {
        //   console.log(event.target.result)
        // }

        // 2.查询方式二:
        const request = store.openCursor();
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 101) {
              console.log(cursor.key, cursor.value);
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 2:
        console.log("点击了删除");
        const deleteRequest = store.openCursor();
        deleteRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 101) {
              cursor.delete();
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 3:
        console.log("点击了修改");
        const updateRequest = store.openCursor();
        updateRequest.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 101) {
              const value = cursor.value;
              value.name = "curry";
              cursor.update(value);
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询完成");
          }
        };
        break;
    }
  };
}
```

## window 常见属性和方法

```js
// 1.常见的属性
// console.log(window.screenX)
// console.log(window.screenY)

// window.addEventListener("scroll", () => {
//   console.log(window.scrollX, window.scrollY)
// })

// console.log(window.outerHeight)
// console.log(window.innerHeight)

// 2.常见的方法
// const scrollBtn = document.querySelector("#scroll")
// scrollBtn.onclick = function() {
//   // 1.scrollTo
//   // window.scrollTo({ top: 2000 })

//   // 2.close
//   // window.close()

//   // 3.open
//   window.open("http://www.baidu.com", "_self")
// }

// 3.常见的事件
window.onload = function () {
  console.log("window窗口加载完毕~");
};

window.onfocus = function () {
  console.log("window窗口获取焦点~");
};

window.onblur = function () {
  console.log("window窗口失去焦点~");
};

const hashChangeBtn = document.querySelector("#hashchange");
hashChangeBtn.onclick = function () {
  location.hash = "aaaa";
};
window.onhashchange = function () {
  console.log("hash发生了改变");
};

// window继承EventTarget类

// const clickHandler = () => {
//   console.log("window发生了点击")
// }

// window.addEventListener("click", clickHandler)
// window.removeEventListener("click", clickHandler)

window.addEventListener("coderwhy", () => {
  console.log("监听到了coderwhy事件");
});

window.dispatchEvent(new Event("coderwhy"));
```

## location 属性和方法

```js
console.log(window.location);

// 当前的完整的url地址
console.log(location.href);

// 协议protocol
console.log(location.protocol);

// 几个方法
// location.assign("http://www.baidu.com")
// location.href = "http://www.baidu.com"

// location.replace("http://www.baidu.com")
// location.reload(false)
```

## history 属性和方法

```js
const jumpBtn = document.querySelector("#jump");

jumpBtn.onclick = function () {
  // location.href = "./demo.html"

  // 跳转(不刷新网页)
  history.pushState({ name: "coderwhy" }, "", "/detail");
  // history.replaceState({name: "coderwhy"}, "", "/detail")
};
```

## 路由跳转原理 hash

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <a href="#/home">首页</a>
      <a href="#/about">关于</a>

      <div class="router-view"></div>
    </div>

    <script>
      // 获取router-view的DOM
      const routerViewEl = document.getElementsByClassName("router-view")[0];

      // 监听URL的改变
      window.addEventListener("hashchange", () => {
        switch (location.hash) {
          case "#/home":
            routerViewEl.innerHTML = "首页";
            break;
          case "#/about":
            routerViewEl.innerHTML = "关于";
            break;
          default:
            routerViewEl.innerHTML = "";
        }
      });
    </script>
  </body>
</html>
```

## 路由跳转原理 history

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <a href="/home">首页</a>
      <a href="/about">关于</a>

      <div class="router-view"></div>
    </div>

    <script>
      // 1.获取router-view的DOM
      const routerViewEl = document.getElementsByClassName("router-view")[0];

      // 获取所有的a元素, 自己来监听a元素的改变
      const aEls = document.getElementsByTagName("a");
      for (let el of aEls) {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const href = el.getAttribute("href");
          history.pushState({}, "", href);
          urlChange();
        });
      }

      // 执行返回操作时, 依然来到urlChange
      window.addEventListener("popstate", urlChange);

      // 监听URL的改变
      function urlChange() {
        switch (location.pathname) {
          case "/home":
            routerViewEl.innerHTML = "首页";
            break;
          case "/about":
            routerViewEl.innerHTML = "关于";
            break;
          default:
            routerViewEl.innerHTML = "";
        }
      }
    </script>
  </body>
</html>
```

## 防抖函数

```js
function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        if (timer) {
          clearTimeout(timer);
        }
        if (immediate && !isInvoke) {
          console.log(args);
          const result = fn.apply(this, args);
          isInvoke = true;
          resolve(result);
        } else {
          timer = setTimeout(() => {
            console.log(args);
            const result = fn.apply(this, args);
            isInvoke = false;
            resolve(result);
          }, delay);
        }
      } catch (error) {
        throw new Error(error);
      }
    });
  };

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
  };

  return _debounce;
}
```

## 节流函数

```js
function throttle(fn, interval, options = { leading: true, trailing: true }) {
  const { leading, trailing } = options;
  let startTime = 0;
  let timer = null;
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        let nowTime = new Date().getTime();
        if (!startTime && !leading) startTime = nowTime;

        const remainTime = interval - (nowTime - startTime);
        if (remainTime <= 0) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          let res = fn.apply(this, args);
          resolve(res);
          startTime = nowTime;
          return;
        }
        if (trailing && !timer) {
          timer = setTimeout(() => {
            timer = null;
            let res = fn.apply(this, args);
            resolve(res);
            startTime = !leading ? 0 : new Date().getTime();
          }, remainTime);
        }
      } catch (error) {
        throw new Error(error);
      }
    });
  };

  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };

  return _throttle;
}
```

## 深拷贝函数

```js
const { map } = require("lodash");

const s1 = Symbol("a");
const s2 = Symbol("b");

const obj = {
  name: "why",
  age: 19,
  friend: {
    name: "kobe",
    adress: {
      city: "北京",
    },
  },
  hobbies: ["abc", "cba", "nba"],
  s1: s1,
  [s2]: "abc",
  foo() {
    console.log(111);
  },
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([
    ["aaa", "abc"],
    ["bbb", "cba"],
  ]),
};

obj.info = obj;

function isObject(obj) {
  const valueType = typeof obj;
  return obj !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue, map = new WeakMap()) {
  // Set数据结构
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }

  // Map数据结构
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }

  // Symbol数据类型
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }

  // 函数
  if (typeof originValue == "function") {
    return originValue;
  }

  if (!isObject(originValue)) {
    return originValue;
  }

  if (map.has(originValue)) {
    return map.get(originValue);
  }
  // 判断传入是数组还是对象
  const newObj = Array.isArray(originValue) ? [] : {};
  map.set(originValue, newObj);
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key], map);
  }
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const key of symbolKeys) {
    newObj[key] = deepClone(originValue[key], map);
  }
  return newObj;
}

console.log(deepClone(obj));
```

## 自定义数据总线

```js
class HYEventBus {
  constructor() {
    this.eventBus = {};
  }
  on(eventName, eventCallBack, thisArg) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    handlers.push({
      eventCallBack,
      thisArg,
    });
  }
  off(eventName, eventCallBack) {
    let handlers = this.eventBus[eventName];
    if (!handlers) return;
    const newHandlers = [...handlers];
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallBack === eventCallBack) {
        const index = handlers.indexOf(handler);
        handlers.splice(index, 1);
      }
    }
  }

  emit(eventName, ...payload) {
    let handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((item) => {
      item.eventCallBack.apply(item.thisArg, payload);
    });
  }
}
```

## call 函数的实现

```js
Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this;

  // 对thisArg转成对象类型(防止它传入的是非对象类型)
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  thisArg.fn = fn;
  let res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

function foo(...args) {
  console.log(args);
  console.log(this);
}

foo.myCall({ name: "kobe" }, "abc", "bcd");
```

## apply 函数的实现

```js
Function.prototype.myApply = function (thisArg, argArray) {
  // 1.获取到要执行的函数
  var fn = this;

  // 2.处理绑定的thisArg
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  thisArg.fn = fn;
  argArray = argArray || [];
  let res = thisArg.fn(...argArray);
  delete thisArg.fn;
  return res;
};

function foo(...args) {
  console.log(args);
  console.log(this);
}

foo.myApply({ name: "kobe" }, [1, 2, 3]);
```

## bind 函数的实现

```js
Function.prototype.myBind = function (thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this;

  // 2.绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    thisArg.fn = fn;
    var argArray = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }
  return proxyFn;
};

function foo() {
  console.log(this);
}

let bar = foo.bind({ name: "kobe" });
bar();
```

## 进程 线程

```js
进程：系统进行资源分配和调度的基本单位
线程：操作系统能够进行运算调度的最小单位，其是进程中的一个执行任务（控制单元），负责当前进程中程序的执行
```

## 实现 instanceOf

```js
function myInstanceOf(target, origin) {
  while (target) {
    if (target.__proto__ === origin.protoType) return true;
    target = target.__proto__;
  }
  return false;
}
console.log(myInstanceOf([], Array));
```

## 实现数组 map 方法

```js
Array.prototype.myMap = function (fn, thisValue) {
  let newArr = [];
  thisValue = thisValue || [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn.call(thisValue, arr[i], i, arr));
  }

  return newArr;
};

console.log([1, 2, 3].map((item, index, arr) => item + 1));
console.log([1, 2, 3].myMap((item, index, arr) => item + 1));
```

## 利用数组 reduce 方法实现 map 方法

```js
Array.prototype.myMap = function (fn, thisValue) {
  let newArr = [];
  thisValue = thisValue || [];
  let arr = this;
  arr.reduce((pre, val, index, target) => {
    return newArr.push(fn.call(thisValue, val, index, target));
  }, []);

  return newArr;
};

console.log([1, 2, 3].map((item, index, arr) => item + 1));
console.log([1, 2, 3].myMap((item, index, arr) => item + 1));
```

## 实现数组 reduce 方法

```js
Array.prototype.myReduce = function (fn, initialValue) {
  var num = initialValue == undefined ? arr[0] : initialValue;
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    num = fn(num, arr[i], i, arr);
  }
  return num;
};

console.log(
  [1, 2, 3, 4].reduce((pre, val, index, arr) => {
    pre.push(val + 1);
    return pre;
  }, [])
);

console.log(
  [1, 2, 3, 4].myReduce((pre, val, index, arr) => {
    pre.push(val + 1);
    return pre;
  }, [])
);
```

## 实现数组 flat 方法

```js
Array.prototype.myFlat = function (num = 1) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && num) {
      newArr = newArr.concat(arr[i].myFlat(num - 1));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log([1, 2, [3, 4, [5, 6]]].myFlat());
```

## 柯里化函数

```js
/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
function curry(fn,len = fn.length) {
 return _curry.call(this,fn,len)
}
​
/**
 * 中转函数
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数
 * @param args  已接收的参数列表
 */
function _curry(fn,len,...args) {
    return function (...params) {
         let _args = [...args,...params];
         if(_args.length >= len){
             return fn.apply(this,_args);
         }else{
          return _curry.call(this,fn,len,..._args)
         }
    }
}
// 我们来验证一下：

  let _fn = curry(function(a,b,c,d,e){
  console.log(a,b,c,d,e)
  });
  ​
  _fn(1,2,3,4,5);     // print: 1,2,3,4,5
  _fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
  _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
  _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5
```
