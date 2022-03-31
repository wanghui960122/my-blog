---
title css box-sizing
---

# box-sizing

box-sizing属性主要⽤来控制元素的盒模型的解析模式。默认值是content-box。
content-box：让元素维持W3C的标准盒模型。元素的宽度/⾼度由border + padding + content的宽
度/⾼度决定，设置width/height属性指的是content部分的宽/⾼
border-box：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置width/height属性
指的是border + padding + content
应⽤场景：统⼀⻛格的表单元素 表单中有⼀些input元素其实还是展现的是传统IE盒模型，带有⼀些默
认的样式，⽽且在不同平台或者浏览器下的表现不⼀，造成了表单展现的差异。此时我们可以通过
box-sizing属性来构建⼀个⻛格统⼀的表单元素。