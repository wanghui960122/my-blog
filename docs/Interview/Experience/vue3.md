---
title Vue3
---

## vue3 初体验

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@next"></script>
    <script>
      const app = Vue.createApp({
        template: "<h1>hello world</h1>",
      });
      app.mount("#app");
    </script>
  </body>
</html>
```

## 计数器案列

```jsx

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/vue@next"></script>
  <script>
    Vue.createApp({
      template: `
        <div>
          <h2>{{count}}</h2>
          <button @click="add">+</button>
          <button @click="mul">-</button>
        </div>
      `,
      data() {
        return {
          count: 0
        }
      },
      methods: {
        add() {
          this.count++
        },
        mul() {
          this.count--
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## template 写法一

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="x-template" id="my-app">
      <div>
        <h2>{{count}}</h2>
        <button @click="add">+</button>
        <button @click="mul">-</button>
      </div>
    </script>
    <script>
      Vue.createApp({
        template: "#my-app",
        data() {
          return {
            count: 0,
          };
        },
        methods: {
          add() {
            this.count++;
          },
          mul() {
            this.count--;
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

## template 写法二

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <template id="my-app">
      <div>
        <h2>{{count}}</h2>
        <button @click="add">+</button>
        <button @click="mul">-</button>
      </div>
    </template>
    <script src="https://unpkg.com/vue@next"></script>
    <script>
      Vue.createApp({
        template: "#my-app",
        data() {
          return {
            count: 0,
          };
        },
        methods: {
          add() {
            this.count++;
          },
          mul() {
            this.count--;
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 Mustache 语法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 1.mustache的基本使用 -->
      <h2>{{message}} - {{message}}</h2>
      <!-- 2.是一个表达式 -->
      <h2>{{counter * 10}}</h2>
      <h2>{{ message.split(" ").reverse().join(" ") }}</h2>
      <!-- 3.也可以调用函数 -->
      <!-- 可以使用computed(计算属性) -->
      <h2>{{getReverseMessage()}}</h2>
      <!-- 4.三元运算符 -->
      <h2>{{ isShow ? "哈哈哈": "" }}</h2>
      <button @click="toggle">切换</button>

      <!-- 错误用法 -->
      <!-- var name = "abc" -> 赋值语句 -->
      <!-- <h2>{{var name = "abc"}}</h2>
    <h2>{{ if(isShow) {  return "哈哈哈" } }}</h2> -->
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            counter: 100,
            isShow: true,
          };
        },
        methods: {
          getReverseMessage() {
            return this.message.split(" ").reverse().join(" ");
          },
          toggle() {
            this.isShow = !this.isShow;
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 v-once

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>{{counter}}</h2>
      <div v-once>
        <h2>{{counter}}</h2>
        <h2>{{message}}</h2>
      </div>
      <button @click="increment">+1</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            counter: 100,
            message: "abc",
          };
        },
        methods: {
          increment() {
            this.counter++;
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 v-text

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-text="message"></h2>
      <h2>{{message}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 v-html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div>{{msg}}</div>
      <div v-html="msg"></div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            msg: '<span style="color:red; background: blue;">哈哈哈</span>',
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 v-pre

```html
<!-- 不进行解析 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-pre>{{message}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## vue3 的基本指令 v-cloak

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      [v-cloak] {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-cloak>{{message}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- vue2 template模板中只能有一个根元素 -->
    <!-- vue3 是允许template中有多个根元素 -->
    <template id="my-app">
      <!-- 1.v-bind的基本使用 -->
      <img v-bind:src="imgUrl" alt="" />
      <a v-bind:href="link">百度一下</a>

      <!-- 2.v-bind提供一个语法糖 : -->
      <img :src="imgUrl" alt="" />
      <img src="imgUrl" alt="" />
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            imgUrl: "https://avatars.githubusercontent.com/u/10335230?s=60&v=4",
            link: "https://www.baidu.com",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 绑定 class 对象写法

```html
<!--  -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .active {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div :class="className">哈哈哈哈</div>
      <!-- 对象语法: {'active': boolean} -->
      <div :class="{'active': isActive}">呵呵呵呵</div>
      <button @click="toggle">切换</button>

      <!-- 也可以有多个键值对 -->
      <div :class="{active: isActive, title: true}">呵呵呵呵</div>

      <!-- 默认的class和动态的class结合 -->
      <div class="abc cba" :class="{active: isActive, title: true}">
        呵呵呵呵
      </div>

      <!-- 将对象放到一个单独的属性中 -->
      <div class="abc cba" :class="classObj">呵呵呵呵</div>

      <!-- 将返回的对象放到一个methods(computed)方法中 -->
      <div class="abc cba" :class="getClassObj()">呵呵呵呵</div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            className: "why",
            isActive: true,
            title: "abc",
            classObj: {
              active: true,
              title: true,
            },
          };
        },
        methods: {
          toggle() {
            this.isActive = !this.isActive;
          },
          getClassObj() {
            return {
              active: true,
              title: true,
            };
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 绑定 class 数组写法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div :class="['abc', title]">哈哈哈哈</div>
      <div :class="['abc', title, isActive ? 'active': '']">哈哈哈哈</div>
      <div :class="['abc', title, {active: isActive}]">哈哈哈哈</div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            title: "cba",
            isActive: true,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 绑定 style 对象写法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- :style="{cssPropertyName: cssPropertyValue}" -->
      <div :style="{color: finalColor, 'font-size': '30px'}">哈哈哈哈</div>
      <div :style="{color: finalColor, fontSize: '30px'}">哈哈哈哈</div>
      <div :style="{color: finalColor, fontSize: finalFontSize + 'px'}">
        哈哈哈哈
      </div>

      <!-- 绑定一个data中的属性值, 并且是一个对象 -->
      <div :style="finalStyleObj">呵呵呵呵</div>
      <!-- 调用一个方法 -->
      <div :style="getFinalStyleObj()">呵呵呵呵</div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            finalColor: "red",
            finalFontSize: 50,
            finalStyleObj: {
              "font-size": "50px",
              fontWeight: 700,
              backgroundColor: "red",
            },
          };
        },
        methods: {
          getFinalStyleObj() {
            return {
              "font-size": "50px",
              fontWeight: 700,
              backgroundColor: "red",
            };
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 绑定 style 数组写法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div :style="[style1Obj, style2Obj]">哈哈哈</div>
      <img :src="" alt="" />
      <a :href=""></a>
      <div :class></div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            style1Obj: {
              color: "red",
              fontSize: "30px",
            },
            style2Obj: {
              textDecoration: "underline",
            },
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 动态绑定属性名称

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div :[name]="value">哈哈哈</div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            name: "cba",
            value: "kobe",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-bind 属性直接绑定一个对象

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div v-bind="info">哈哈哈哈</div>
      <div :="info">哈哈哈哈</div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            info: {
              name: "why",
              age: 18,
              height: 1.88,
            },
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-on 的基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .area {
        width: 200px;
        height: 200px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 完整写法: v-on:监听的事件="methods中方法" -->
      <button v-on:click="btn1Click">按钮1</button>
      <div class="area" v-on:mousemove="mouseMove">div</div>
      <!-- 语法糖 -->
      <button @click="btn1Click">按钮1</button>
      <!-- 绑定一个表达式: inline statement -->
      <button @click="counter++">{{counter}}</button>
      <!-- 绑定一个对象 -->
      <div class="area" v-on="{click: btn1Click, mousemove: mouseMove}"></div>
      <div class="area" @="{click: btn1Click, mousemove: mouseMove}"></div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            counter: 100,
          };
        },
        methods: {
          btn1Click() {
            console.log("按钮1发生了点击");
          },
          mouseMove() {
            console.log("鼠标移动");
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-on 传递参数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 默认传入event对象, 可以在方法中获取 -->
      <button @click="btn1Click">按钮1</button>
      <!-- $event可以获取到事件发生时的事件对象 -->
      <button @click="btn2Click($event, 'coderwhy', 18)">按钮2</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
        methods: {
          btn1Click(event) {
            console.log(event);
          },
          btn2Click(event, name, age) {
            console.log(name, age, event);
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-on 修饰符

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <div @click="divClick">
        <button @click.stop="btnClick">按钮</button>
      </div>
      <input type="text" @keyup.enter="enterKeyup" />
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
        methods: {
          divClick() {
            console.log("divClick");
          },
          btnClick() {
            console.log("btnClick");
          },
          enterKeyup(event) {
            console.log("keyup", event.target.value);
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## 条件渲染的基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-if="isShow">哈哈哈哈</h2>
      <button @click="toggle">切换</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
            isShow: true,
          };
        },
        methods: {
          toggle() {
            this.isShow = !this.isShow;
          },
        },
      };

      Vue.createApp(App).mount("#app");

      // JavaScript条件判断
      if (true) {
      }
    </script>
  </body>
</html>
```

## 多个条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <input type="text" v-model="score" />
      <h2 v-if="score > 90">优秀</h2>
      <h2 v-else-if="score > 60">良好</h2>
      <h2 v-else>不及格</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            score: 95,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## template 和 v-if 结合使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <template v-if="isShowHa">
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
      </template>

      <template v-else>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
      </template>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            isShowHa: true,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-show 的条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-show="isShow">哈哈哈哈</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            isShow: true,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-show 和 v-if 的区别

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2 v-if="isShow">哈哈哈哈</h2>
      <h2 v-show="isShow">呵呵呵呵</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            isShow: true,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-for 的基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>电影列表</h2>
      <ul>
        <!-- 遍历数组 -->
        <li v-for="(movie, index) in movies">{{index+1}}.{{movie}}</li>
      </ul>
      <h2>个人信息</h2>
      <ul>
        <!-- 遍历对象 -->
        <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
      </ul>
      <h2>遍历数字</h2>
      <ul>
        <li v-for="(num, index) in 10">{{num}}-{{index}}</li>
      </ul>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            movies: ["星际穿越", "盗梦空间", "大话西游", "教父", "少年派"],
            info: {
              name: "why",
              age: 18,
              height: 1.88,
            },
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-for 和 template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <ul>
        <template v-for="(value, key) in info">
          <li>{{key}}</li>
          <li>{{value}}</li>
          <li class="divider"></li>
        </template>
      </ul>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            info: {
              name: "why",
              age: 18,
              height: 1.88,
            },
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## 数组的修改方法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>电影列表</h2>
      <ul>
        <li v-for="(movie, index) in movies">{{index+1}}.{{movie}}</li>
      </ul>
      <input type="text" v-model="newMovie" />
      <button @click="addMovie">添加电影</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            newMovie: "",
            movies: ["星际穿越", "盗梦空间", "大话西游", "教父", "少年派"],
          };
        },
        methods: {
          addMovie() {
            this.movies.push(this.newMovie);
            this.newMovie = "";

            // this.movies = this.movies.filter(item => item.length > 2);
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## key 案例-插入 f 元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <ul>
        <li v-for="item in letters" :key="item">{{item}}</li>
      </ul>
      <button @click="insertF">插入F元素</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            letters: ["a", "b", "c", "d"],
          };
        },
        methods: {
          insertF() {
            this.letters.splice(2, 0, "f");
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## 计算属性-computed

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>{{fullName}}</h2>
      <h2>{{result}}</h2>
      <h2>{{reverseMessage}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            firstName: "Kobe",
            lastName: "Bryant",
            score: 80,
            message: "Hello World",
          };
        },
        computed: {
          // 定义了一个计算属性叫fullname
          fullName() {
            return this.firstName + " " + this.lastName;
          },
          result() {
            return this.score >= 60 ? "及格" : "不及格";
          },
          reverseMessage() {
            return this.message.split(" ").reverse().join(" ");
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## methods-computed 区别

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <button @click="changeFirstName">修改firstName</button>

      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{fullName}}</h2>

      <h2>{{getFullName()}}</h2>
      <h2>{{getFullName()}}</h2>
      <h2>{{getFullName()}}</h2>
      <h2>{{getFullName()}}</h2>
      <h2>{{getFullName()}}</h2>
      <h2>{{getFullName()}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            firstName: "Kobe",
            lastName: "Bryant",
          };
        },
        computed: {
          // 计算属性是有缓存的, 当我们多次使用计算属性时, 计算属性中的运算只会执行一次.
          // 计算属性会随着依赖的数据(firstName)的改变, 而进行重新计算.
          fullName() {
            console.log("computed的fullName中的计算");
            return this.firstName + " " + this.lastName;
          },
        },
        methods: {
          getFullName() {
            console.log("methods的getFullName中的计算");
            return this.firstName + " " + this.lastName;
          },
          changeFirstName() {
            this.firstName = "Coder";
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## computed 的 setter 和 getter

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <button @click="changeFullName">修改fullName</button>
      <h2>{{fullName}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            firstName: "Kobe",
            lastName: "Bryant",
          };
        },
        computed: {
          // fullName 的 getter方法
          fullName() {
            return this.firstName + " " + this.lastName;
          },

          // fullName的getter和setter方法
          fullName: {
            get: function () {
              return this.firstName + " " + this.lastName;
            },
            set: function (newValue) {
              console.log(newValue);
              const names = newValue.split(" ");
              this.firstName = names[0];
              this.lastName = names[1];
            },
          },
        },
        methods: {
          changeFullName() {
            this.fullName = "Coder Why";
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## watch-基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      您的问题: <input type="text" v-model="question" />
      <!-- <button @click="queryAnswer">查找答案</button> -->
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            // 侦听question的变化时, 去进行一些逻辑的处理(JavaScript, 网络请求)
            question: "Hello World",
            anwser: "",
          };
        },
        watch: {
          // question侦听的data中的属性的名称
          // newValue变化后的新值
          // oldValue变化前的旧值
          question: function (newValue, oldValue) {
            console.log("新值: ", newValue, "旧值", oldValue);
            this.queryAnswer();
          },
        },
        methods: {
          queryAnswer() {
            console.log(`你的问题${this.question}的答案是哈哈哈哈哈`);
            this.anwser = "";
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## watch-配置选项

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>{{info.name}}</h2>
      <button @click="changeInfo">改变info</button>
      <button @click="changeInfoName">改变info.name</button>
      <button @click="changeInfoNbaName">改变info.nba.name</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            info: { name: "why", age: 18, nba: { name: "kobe" } },
          };
        },
        watch: {
          // 默认情况下我们的侦听器只会针对监听的数据本身的改变(内部发生的改变是不能侦听)
          // info(newInfo, oldInfo) {
          //   console.log("newValue:", newInfo, "oldValue:", oldInfo);
          // }

          // 深度侦听/立即执行(一定会执行一次)
          info: {
            handler: function (newInfo, oldInfo) {
              console.log(
                "newValue:",
                newInfo.nba.name,
                "oldValue:",
                oldInfo.nba.name
              );
            },
            deep: true, // 深度侦听
            // immediate: true // 立即执行
          },
        },
        methods: {
          changeInfo() {
            this.info = { name: "kobe" };
          },
          changeInfoName() {
            this.info.name = "kobe";
          },
          changeInfoNbaName() {
            this.info.nba.name = "james";
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## watch-其他方式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>{{info.name}}</h2>
      <button @click="changeInfo">改变info</button>
      <button @click="changeInfoName">改变info.name</button>
      <button @click="changeInfoNbaName">改变info.nba.name</button>
      <button @click="changeFriendName">改变friends[0].name</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            info: { name: "why", age: 18, nba: { name: "kobe" } },
            friends: [{ name: "why" }, { name: "kobe" }],
          };
        },
        watch: {
          info(newValue, oldValue) {
            console.log(newValue, oldValue);
          },
          "info.name": function (newName, oldName) {
            console.log(newName, oldName);
          },
          // 不支持此写法
          "friends[0].name": function (newName, oldName) {
            console.log(newName, oldName);
          },
          // friends: {
          //   handler(newFriends, oldFriend) {
          //   },
          //   deep: true
          // }
        },
        methods: {
          changeInfo() {
            this.info = { name: "kobe" };
          },
          changeInfoName() {
            this.info.name = "kobe";
          },
          changeInfoNbaName() {
            this.info.nba.name = "james";
          },
          changeFriendName() {
            this.friends[0].name = "curry";
          },
        },
        created() {
          const unwatch = this.$watch(
            "info",
            function (newInfo, oldInfo) {
              console.log(newInfo, oldInfo);
            },
            {
              deep: true,
              immediate: true,
            }
          );
          // 取消监听
          // unwatch()
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-model 的基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 1.v-bind value的绑定 2.监听input事件, 更新message的值 -->
      <!-- <input type="text" :value="message" @input="inputChange"> -->
      <input type="text" v-model="message" />
      <h2>{{message}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
        methods: {
          inputChange(event) {
            this.message = event.target.value;
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-model 绑定其他表单

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 1.绑定textarea -->
      <label for="intro">
        自我介绍
        <textarea
          name="intro"
          id="intro"
          cols="30"
          rows="10"
          v-model="intro"
        ></textarea>
      </label>
      <h2>intro: {{intro}}</h2>

      <!-- 2.checkbox -->
      <!-- 2.1.单选框 -->
      <label for="agree">
        <input id="agree" type="checkbox" v-model="isAgree" /> 同意协议
      </label>
      <h2>isAgree: {{isAgree}}</h2>

      <!-- 2.2.多选框 -->
      <span>你的爱好: </span>
      <label for="basketball">
        <input
          id="basketball"
          type="checkbox"
          v-model="hobbies"
          value="basketball"
        />
        篮球
      </label>
      <label for="football">
        <input
          id="football"
          type="checkbox"
          v-model="hobbies"
          value="football"
        />
        足球
      </label>
      <label for="tennis">
        <input id="tennis" type="checkbox" v-model="hobbies" value="tennis" />
        网球
      </label>
      <h2>hobbies: {{hobbies}}</h2>

      <!-- 3.radio -->
      <span>你的爱好: </span>
      <label for="male">
        <input id="male" type="radio" v-model="gender" value="male" />男
      </label>
      <label for="female">
        <input id="female" type="radio" v-model="gender" value="female" />女
      </label>
      <h2>gender: {{gender}}</h2>

      <!-- 4.select -->
      <span>喜欢的水果: </span>
      <select v-model="fruit" multiple size="2">
        <option value="apple">苹果</option>
        <option value="orange">橘子</option>
        <option value="banana">香蕉</option>
      </select>
      <h2>fruit: {{fruit}}</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            intro: "Hello World",
            isAgree: false,
            hobbies: ["basketball"],
            gender: "",
            fruit: "orange",
          };
        },
        methods: {
          commitForm() {
            axios;
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## v-model 的修饰符使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <!-- 1.lazy修饰符 -->
      <!-- <input type="text" v-model.lazy="message"> -->

      <!-- 2.number修饰符 -->
      <!-- <input type="text" v-model.number="message">
    <h2>{{message}}</h2>
    <button @click="showType">查看类型</button> -->

      <!-- 3.trim修饰符 -->
      <input type="text" v-model.trim="message" />
      <button @click="showResult">查看结果</button>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
        data() {
          return {
            message: "Hello World",
          };
        },
        methods: {
          showType() {
            console.log(this.message, typeof this.message);
          },
          showResult() {
            console.log(this.message);
          },
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## 注册全局组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <component-a></component-a>
      <component-b></component-b>

      <!-- <component-c></component-c> -->
      <!-- <ComponentName></ComponentName> -->
      <component-name></component-name>
    </template>

    <template id="component-a">
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
      <button @click="btnClick">按钮点击</button>
    </template>

    <template id="component-b">
      <div>
        <input type="text" v-model="message" />
        <h2>{{message}}</h2>
      </div>
    </template>

    <template id="component-c">
      <h2>ComponentC</h2>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const App = {
        template: "#my-app",
      };

      const app = Vue.createApp(App);

      // 使用app注册一个全局组件app.component()
      // 全局组件: 意味着注册的这个组件可以在任何的组件模板中使用
      app.component("component-a", {
        template: "#component-a",
        data() {
          return {
            title: "我是标题",
            desc: "我是内容, 哈哈哈哈哈",
          };
        },
        methods: {
          btnClick() {
            console.log("按钮的点击");
          },
        },
      });

      app.component("component-b", {
        template: "#component-b",
        data() {
          return {
            message: "Hello World",
          };
        },
      });

      app.component("ComponentName", {
        template: "#component-c",
      });

      app.mount("#app");
    </script>
  </body>
</html>
```

## 注册局部组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <h2>{{message}}</h2>
      <component-a></component-a>
    </template>

    <template id="component-a">
      <h2>我是组件A</h2>
      <p>我是内容, 哈哈哈哈</p>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const ComponentA = {
        template: "#component-a",
      };

      const App = {
        template: "#my-app",
        components: {
          // key: 组件名称
          // value: 组件对象
          ComponentA: ComponentA,
        },
        data() {
          return {
            message: "Hello World",
          };
        },
      };

      const app = Vue.createApp(App);
      // app.component("ComponentA", ComponentA);
      app.mount("#app");
    </script>
  </body>
</html>
```

## vite 基本使用

```js
npm i vite -D

npx vite


// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

```

## 组件开发-组件通信 子传父

```vue
<!-- App.vue -->

<template>
  <div>
    <show-message
      id="abc"
      class="why"
      title="哈哈哈"
      content="我是哈哈哈哈"
      message-info=""
    ></show-message>
    <show-message title="呵呵呵" content="我是呵呵呵呵"></show-message>
    <show-message :title="title" :content="content"></show-message>

    <show-message
      :title="message.title"
      :content="message.content"
    ></show-message>
    <show-message v-bind="message"></show-message>

    <multi-root-element id="aaaa"></multi-root-element>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MultiRootElement from "./MultiRootElement.vue";

export default {
  components: {
    ShowMessage,
    MultiRootElement,
  },
  data() {
    return {
      title: "嘻嘻嘻",
      content: "我是嘻嘻嘻嘻",
      message: {
        title: "嘿嘿嘿",
        content: "我是嘿嘿嘿",
      },
    };
  },
};
</script>

<style scoped></style>

<!-- MultiRootElement.vue -->
<!-- 多个根节点 通过$attrs 获取所有attrbuites属性 -->
<template>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2 :id="$attrs.id">MultiRootElement</h2>
</template>

<script>
export default {};
</script>

<style scoped></style>

<!-- ShowMessage.vue -->
<!-- attrbuites 如有跟节点 会自动继承到根节点 如class id -->
<!-- 如果不想继承, 设置inheritAttrs: false -->
<!-- 可通过$attrs 获取所有attrbuites属性 -->
<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // props: ['title', 'content']
  inheritAttrs: false,
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: "123",
    },
    counter: {
      type: Number,
    },
    info: {
      type: Object,
      default() {
        return { name: "why" };
      },
    },
    messageInfo: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
```

## 组件开发-组件通信 父传子

```vue
<!-- App.vue -->
<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <counter-operation @add="addOne" @sub="subOne" @addN="addNNum">
    </counter-operation>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue";

export default {
  components: {
    CounterOperation,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne() {
      this.counter++;
    },
    subOne() {
      this.counter--;
    },
    addNNum(num, name, age) {
      console.log(name, age);
      this.counter += num;
    },
  },
};
</script>

<style scoped></style>

<!-- CounterOperation.vue -->
<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
  // emits: ["add", "sub", "addN"],
  // 对象写法的目的是为了进行参数的验证
  emits: {
    add: null,
    sub: null,
    addN: (num, name, age) => {
      console.log(num, name, age);
      if (num > 10) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      console.log("+1");
      this.$emit("add");
    },
    decrement() {
      console.log("-1");
      this.$emit("sub");
    },
    incrementN() {
      this.$emit("addN", this.num, "why", 18);
    },
  },
};
</script>

<style scoped></style>
```

## 组件开发-组件通信 非父子组件通信 provide inject

```vue
<!-- App.vue -->
<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue";

export default {
  components: {
    Home,
  },
  provide() {
    return {
      name: "why",
      age: 18,
      length: computed(() => this.names.length), // ref对象 .value
    };
  },
  data() {
    return {
      names: ["abc", "cba", "nba"],
    };
  },
  methods: {
    addName() {
      this.names.push("why");
      console.log(this.names);
    },
  },
};
</script>

<style scoped></style>

<!-- home -->
<template>
  <div>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";

export default {
  components: {
    HomeContent,
  },
};
</script>

<style scoped></style>

<!-- HomeContent -->
<template>
  <div>HomeContent: {{ name }} - {{ age }} - {{ length.value }}</div>
</template>

<script>
export default {
  inject: ["name", "age", "length"],
};
</script>

<style scoped></style>
```

## 组件开发-组件通信 非父子组件通信 mitt

```js
import mitt from "mitt";
const emitter = mitt();
// 可创建多个事件总线
// const emitter2 = mitt();

// 触发事件

emitter.emit("kobe", { name: "why", age: 18 });

// 监听事件
emitter.on("kobe", (info) => {
  console.log("kobe:", info);
});

// 监听所有事件
emitter.on("*", (type, info) => {
  console.log("* listener:", type, info);
});

// 取消监听
emitter.off("why", (info) => {
  console.log("kobe:", info);
});
// 取消所有监听
emitter.all.clear();
```

## 组件开发-插槽

```vue
<!-- App.vue -->

<template>
  <div>
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>

    <my-slot-cpn> 我是普通的文本 </my-slot-cpn>

    <my-slot-cpn>
      <my-button />
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <!-- 插入了很多的内容 -->
    <my-slot-cpn>
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
import MyButton from "./MyButton.vue";

export default {
  components: {
    MySlotCpn,
    MyButton,
  },
};
</script>

<style scoped></style>

<!-- MyButton -->
<template>
  <div>
    <button>coderwhy button</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

<!-- MySlotCpn -->
<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

## 组件开发-具名插槽

```vue
<!-- App.vue -->
<template>
  <div>
    <nav-bar :name="name">
      <template #left>
        <button>左边的按钮</button>
      </template>
      <template #center>
        <h2>我是标题</h2>
      </template>
      <template #right>
        <i>右边的i元素</i>
      </template>
      <template #[name]>
        <i>why内容</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "why",
    };
  },
};
</script>

<style scoped></style>

<!-- NavBar -->

<template>
  <div class="nav-bar">
    <!-- <slot name="default"></slot> -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  // data() {
  //   return {
  //     name: "why"
  //   }
  // }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left,
.right,
.center {
  height: 44px;
}

.left,
.right,
.addition {
  width: 80px;
  background-color: red;
}

.center {
  flex: 1;
  background-color: blue;
}
</style>
```

## 组件开发-作用域插槽

```vue
<!-- App.vue -->
<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>{{title}}</button>
    </child-cpn> -->

    <show-names :names="names">
      <template v-slot="coderwhy">
        <button>{{ coderwhy.item }}-{{ coderwhy.index }}</button>
      </template>
    </show-names>

    <show-names :names="names" v-slot="coderwhy">
      <button>{{ coderwhy.item }}-{{ coderwhy.index }}</button>
    </show-names>

    <!-- 注意: 如果还有其他的具名插槽, 那么默认插槽也必须使用template来编写 -->
    <show-names :names="names">
      <template v-slot="coderwhy">
        <button>{{ coderwhy.item }}-{{ coderwhy.index }}</button>
      </template>

      <template v-slot:why>
        <h2>我是why的插入内容</h2>
      </template>
    </show-names>

    <show-names :names="names">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}-{{ slotProps.index }}</strong>
      </template>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";

export default {
  components: {
    ChildCpn,
    ShowNames,
  },
  data() {
    return {
      names: ["why", "kobe", "james", "curry"],
    };
  },
};
</script>

<style scoped></style>

<!-- ChildCpn -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是title",
    };
  },
};
</script>

<style scoped></style>

<!-- ShowNames -->
<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>

      <slot name="why"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
```

## 组件开发-动态组件

```vue
<!-- App.vue -->
<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- 2.动态组件 -->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="coderwhy"
        :age="18"
        @pageClick="pageClick"
      >
      </component>
    </keep-alive>

    <!-- 1.v-if的判断实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";

export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log("page内部发生了点击");
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>

<!-- About -->
<template>
  <div>
    About组件
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    console.log("about created");
  },
  unmounted() {
    console.log("about unmounted");
  },
  activated() {
    console.log("about activated");
  },
  deactivated() {
    console.log("about deactivated");
  },
};
</script>

<style scoped></style>

<!-- Category -->
<template>
  <div>
    Category组件
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped></style>

<!-- home -->
<template>
  <div @click="divClick">Home组件: {{ name }} - {{ age }}</div>
</template>

<script>
export default {
  name: "home",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: ["pageClick"],
  methods: {
    divClick() {
      this.$emit("pageClick");
    },
  },
};
</script>

<style scoped></style>
```

## 组件开发-异步组件

```vue
<template>
  <div>
    App组件
    <home></home>
    <!-- suspense 设置站位组件 -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import Home from "./Home.vue";
import Loading from "./Loading.vue";

// import AsyncCategory from './AsyncCategory.vue';
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));

// const AsyncCategory = defineAsyncComponent({
//   loader: () => import("./AsyncCategory.vue"),
//   loadingComponent: Loading,
//   // errorComponent,
//   // 在显示loadingComponent组件之前, 等待多长时间
//   delay: 2000,
//   /**
//    * err: 错误信息,
//    * retry: 函数, 调用retry尝试重新加载
//    * attempts: 记录尝试的次数
//    */
//   onError: function(err, retry, attempts) {

//   }
// })

export default {
  components: {
    Home,
    AsyncCategory,
    Loading,
  },
};
</script>

<style scoped></style>

<!-- AsyncCategory -->
<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Category",
    };
  },
};
</script>

<style scoped></style>

<!-- home -->
<template>
  <div>Home组件</div>
</template>

<script>
export default {};
</script>

<style scoped></style>

<!-- loading -->
<template>
  <div>Loading</div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

## 组件开发-引用元素和组件

```vue
<!-- App.vue -->
<template>
  <div>
    <!-- 绑定到一个元素上 -->
    <h2 ref="title">哈哈哈</h2>

    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      names: ["abc", "cba"],
    };
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title);

      console.log(this.$refs.navBar.message);
      this.$refs.navBar.sayHello();

      // $el
      console.log(this.$refs.navBar.$el);
    },
  },
};
</script>

<style scoped></style>

<!-- NavBar -->
<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是NavBar中的message",
    };
  },
  methods: {
    sayHello() {
      console.log("Hello NavBar");
    },
    getParentAndRoot() {
      console.log(this.$parent);
      console.log(this.$root);
    },
  },
};
</script>

<style scoped></style>
```

## 组件开发-组件的生命周期

```vue
<!-- App.vue -->
<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped></style>

<!-- home -->
<template>
  <div>
    <h2 ref="title">{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Home",
    };
  },
  methods: {
    changeMessage() {
      this.message = "你好啊, 李银河";
    },
  },
  beforeCreate() {
    console.log("home beforeCreate");
  },
  created() {
    console.log("home created");
  },
  beforeMount() {
    console.log("home beforeMount");
  },
  mounted() {
    console.log("home mounted");
  },
  beforeUnmount() {
    console.log("home beforeUnmount");
  },
  unmounted() {
    console.log("home unmounted");
  },
  beforeUpdate() {
    console.log(this.$refs.title.innerHTML);
    console.log("home beforeUpdate");
  },
  updated() {
    console.log(this.$refs.title.innerHTML);
    console.log("home updated");
  },
};
</script>

<style scoped></style>
```

## 组件开发-在组件上使用 v-model

```vue
<!-- App.vue -->
<template>
  <div>
    <!-- <input v-model="message">
    <input :value="message" @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    <!-- <hy-input v-model="message"></hy-input> -->
    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->

    <!-- 绑定两个v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import HyInput from "./HyInput.vue";

export default {
  components: {
    HyInput,
  },
  data() {
    return {
      message: "Hello World",
      title: "哈哈哈",
    };
  },
};
</script>

<style scoped></style>

<!-- HyInput -->
<template>
  <div>
    <input v-model="value" />
    <input v-model="why" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    why: {
      set(why) {
        this.$emit("update:title", why);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped></style>

<!-- HyInput2 -->
<template>
  <div>
    <!-- 1.默认绑定和事件处理 -->
    <!-- <button @click="btnClick">hyinput按钮</button>
    <h2>HyInput的message: {{modelValue}}</h2> -->

    <!-- 2.通过input -->
    <!-- <input :value="modelValue" @input="btnClick"> -->

    <!-- 3.绑定到props中是不对的 -->
    <!-- <input v-model="modelValue"> -->

    <!-- 4. -->
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
```

## 动画的基本使用

```vue
<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <transition name="king" mode="out-in" appear>
      <h2 v-if="isShow" class="title">显示隐藏</h2>
      <h2 v-else class="title">xxxx</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
/* .king-enter-from,
  .king-leave-to {
    opacity: 0;
  }
  
  .king-enter-to,
  .king-leave-from {
    opacity: 1;
  }
   .king-enter-active,
  .king-leave-active {
    transition: opacity 2s ease-in;
  } */
.title {
  display: inline-block;
}
.king-leave-active {
  animation: bounce 2s ease reverse;
}

.king-enter-active {
  animation: bounce 2s ease;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

## 动画的基本使用 animate.css

```vue
<!-- App.vue -->
<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <transition
      name="king"
      mode="out-in"
      appear
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__flipInY"
    >
      <h2 v-if="isShow" class="title">显示隐藏</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
/* .king-enter-active {
    animation: bounceInUp 1s ease;
  }
  .king-leave-active  {
    animation: bounceInUp 1s ease reverse;
  } */
</style>
```

## 动画的基本使用 组合动画

```vue
<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>

    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      // this.numbers.push(this.numCounter++)
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.item {
  margin-right: 10px;
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}

.why-leave-active {
  position: absolute;
}

.why-move {
  transition: transform 1s ease;
}
</style>
```

## mixin

```vue
<script>
<!-- demoMixin.js -->
export const demoMixin = {
  data() {
    return {
      message: "Hello DemoMixin"
    }
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    }
  },
  created() {
    console.log("执行了demo mixin created");
  }
}
</script>

<!-- App.vue -->
<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";

export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "Hello World",
      message: "Hello App",
    };
  },
  methods: {
    foo() {
      console.log("app foo");
    },
  },
  computed: {},
  watch: {},
  created() {
    console.log("App created 执行");
  },
};
</script>

<style scoped></style>

<!-- 全局混入 -->

<script>
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mixin({
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("全局的created生命周期");
  },
});

app.mount("#app");
</script>
```

## extends

```vue
<!-- home -->
<template>
  <div>
    Home Page
    <h2>{{ title }}</h2>
    <button @click="bar">按钮</button>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";

export default {
  extends: [BasePage],
  data() {
    return {
      content: "Hello Home",
    };
  },
};
</script>

<style scoped></style>

<!-- BasePage -->
<template>
  <div>
    <h2>哈哈哈哈啊</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello Page",
    };
  },
  methods: {
    bar() {
      console.log("base page bar");
    },
  },
};
</script>

<style scoped></style>
```

## setup 的参数

```vue
<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      counter: 100,
    };
  },
  /**
   * 参数一: props, 父组件传递过来属性
   */
  // setup没有this
  // setup函数有哪些参数?
  // setup函数有什么样的返回值
  // setup(props, context) {
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);

    return {
      title: "Hello Home",
      counter: 100,
    };
  },
  methods: {
    btnClick() {
      this.$emit("");
    },
  },
};
</script>

<style scoped></style>
```

## setup 的返回值

```vue
<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = 100;

    // 局部函数
    const increment = () => {
      counter++;
      console.log(counter);
    };

    return {
      title: "Hello Home",
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## reactive 的使用

```vue
<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>当前计数: {{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    const state = reactive({
      counter: 100,
    });

    // 局部函数
    const increment = () => {
      state.counter++;
      console.log(state.counter);
    };

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## ref 的使用

```vue
<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>

    <show-message :message="counter"></show-message>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // counter编程一个ref的可响应式的引用
    // counter = 100;
    let counter = ref(100);

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## ref 的浅层解包

```vue
<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <!-- ref的解包只能是一个浅层解包(info是一个普通的JavaScript对象) -->
    <h2>当前计数: {{ info.counter.value }}</h2>
    <!-- 当如果最外层包裹的是一个reactive可响应式对象, 那么内容的ref可以解包 -->
    <h2>当前计数: {{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = ref(100);

    const info = {
      counter,
    };

    const reactiveInfo = reactive({
      counter,
    });

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## readonly

```vue
<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = { name: "why" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式的对象reactive
    const info2 = reactive({
      name: "why",
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式的对象ref
    const info3 = ref("why");
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      // readonlyInfo3.value = "coderwhy"
      info3.value = "coderwhy";
    };

    return {
      updateState,
    };
  },
};
</script>

<style scoped></style>
```

## 其他 api 的使用

```vue
<template>
  <div>
    {{ info.name }}--{{ info.age }}
    <br />
    {{ name }}--{{ age }}
    <button @click="changeBtn">+</button>
  </div>
</template>
<script>
import {
  isProxy,
  isReactive,
  isReadonly,
  toRaw,
  shallowReactive,
  shallowReadonly,
  toRefs,
  toRef,
  reactive,
  isRef,
  shallowRef,
  unref,
  triggerRef,
  customRef,
} from "vue";
// shallowReactive shallowReadonly 浅层转化 不进行深层嵌套
// toRaw 转为普通对象
export default {
  setup(props) {
    const info = reactive({
      name: "why",
      age: 18,
    });
    // 必须是reactive对象
    // let { name, age } = toRefs(info)
    let age = toRef(info, "age");
    let name = toRef(info, "name");

    const changeBtn = () => {
      age.value++;
    };
    return {
      name,
      age,
      info,
      changeBtn,
    };
  },
};
</script>
<style scoped></style>
```

## shallowRef triggerRef

```vue
<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
// 结合使用
import { shallowRef, triggerRef } from "vue";

export default {
  setup() {
    // 创建一个浅层的ref
    const info = shallowRef({ name: "why" });

    //
    const changeInfo = () => {
      info.value.name = "james";
      // 手动触发副作用，刷新页面
      triggerRef(info);
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
```

## customRef

```vue
<script>
import { customRef } from "vue";

// 自定义ref
export default function (value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
</script>

<!-- App.vue -->
<template>
  <div>
    <input v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import debounceRef from "./hook/useDebounceRef";

export default {
  setup() {
    const message = debounceRef("Hello World");

    return {
      message,
    };
  },
};
</script>

<style scoped></style>
```

## computed

```vue
<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");

    // 1.用法一: 传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + " " + lastName.value);

    // 2.用法二: 传入一个对象, 对象包含getter/setter
    const fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set(newValue) {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeName = () => {
      // firstName.value = "James"
      fullName.value = "coder why";
    };

    return {
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped></style>
```

## watchEffect

```vue
<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const changeName = () => (name.value = "kobe");
    const changeAge = () => age.value++;
    // 会立即执行一次
    watchEffect(() => {
      console.log("name:", name.value, "age:", age.value);
    });

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
```

## watchEffect 停止监听

```vue
<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const stop = watchEffect(() => {
      console.log("name:", name.value, "age:", age.value);
    });

    const changeName = () => (name.value = "kobe");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
```

## watchEffect 清除副作用

```vue
<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功~");
      }, 2000);

      // 根据name和age两个变量发送网络请求
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel()
        clearTimeout(timer);
        console.log("onInvalidate");
      });
      console.log("name:", name.value, "age:", age.value);
    });

    const changeName = () => (name.value = "kobe");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
```

## watchEffect 执行时机 ref 引用

```vue
<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const title = ref(null);

    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // pre 默认值
        // post 挂载完执行
        flush: "post",
      }
    );

    return {
      title,
    };
  },
};
</script>

<style scoped></style>
```

## watch 侦听数据

```vue
<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    const info = reactive({ name: "why", age: 18 });

    // 1.侦听watch时,传入一个getter函数
    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );

    // 2.传入一个可响应式对象: reactive对象/ref对象
    // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // })
    // 如果希望newValue和oldValue是一个普通的对象
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );
    // 情况二: ref对象获取newValue和oldValue是value值的本身
    // const name = ref("why");
    // watch(name, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // })

    const changeData = () => {
      info.name = "kobe";
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
```

## watch 侦听多个数据源

```vue
<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({ name: "why", age: 18 });
    const name = ref("why");

    // 2.侦听器watch
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeData = () => {
      info.name = "kobe";
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
```

## watch 深度侦听

```vue
<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({
      name: "why",
      age: 18,
      friend: {
        name: "kobe",
      },
    });

    // 2.侦听器watch
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const changeData = () => {
      info.friend.name = "james";
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
```

## 生命周期钩子函数

```vue
<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    onMounted(() => {
      console.log("App Mounted1");
    });
    onMounted(() => {
      console.log("App Mounted2");
    });
    onUpdated(() => {
      console.log("App onUpdated");
    });
    onUnmounted(() => {
      console.log("App onUnmounted");
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## provide 和 inject

```vue
<!-- App.vue -->
<template>
  <div>
    <home />
    <h2>App Counter: {{ counter }}</h2>
    <button @click="increment">App中的+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";

import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("coderwhy");
    let counter = ref(100);

    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;

    return {
      increment,
      counter,
    };
  },
};
</script>

<style scoped></style>

<!-- home -->
<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ counter }}</h2>

    <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const name = inject("name");
    const counter = inject("counter");

    const homeIncrement = () => counter.value++;

    return {
      name,
      counter,
      homeIncrement,
    };
  },
};
</script>

<style scoped></style>
```

## 自定义 hook 举例

```js
import { ref, computed } from "vue";

export default function () {
  const counter = ref(0);
  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => counter.value++;
  const decrement = () => counter.value--;

  return {
    counter,
    doubleCounter,
    increment,
    decrement,
  };
}
```

## setup 顶层编写

```vue
<!-- App.vue -->
<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>

    <hello-world message="呵呵呵" @increment="getCounter"></hello-world>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./HelloWorld.vue";

const counter = ref(0);
const increment = () => counter.value++;

const getCounter = (payload) => {
  console.log(payload);
};
</script>

<style scoped></style>

<!-- HelloWorld -->

<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{ message }}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈",
  },
});

const emit = defineEmit(["increment", "decrement"]);

const emitEvent = () => {
  emit("increment", "100000");
};
</script>

<style scoped></style>
```

## render 函数的使用

```vue
<script>
import { h } from "vue";

export default {
  render() {
    return h("h2", { class: "title" }, "Hello Render");
  },
};
</script>

<style scoped></style>
```

## jsx 的使用

```vue
<!-- App.vue -->
<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },

  render() {
    const increment = () => this.counter++;
    const decrement = () => this.counter--;

    return (
      <div>
        <h2>当前计数: {this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <HelloWorld></HelloWorld>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped></style>

<!-- HelloWorld -->

<script>
export default {
  render() {
    return (
      <div>
        <h2>HelloWorld</h2>
        {this.$slots.default ? this.$slots.default() : <span>哈哈哈</span>}
      </div>
    );
  },
};
</script>

<style scoped></style>
```

## 自定义指令

```vue
<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el, bindings, vnode, preVnode) {
        console.log("focus mounted");
        el.focus();
      },
    },
  },
};
</script>

<style scoped></style>
```

## 自定义指令生命周期 修饰符

```vue
<template>
  <div>
    <button v-if="counter < 2" v-why.aaaa.bbbb="'coderwhy'" @click="increment">
      当前计数: {{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // 局部指令
  directives: {
    why: {
      created(el, bindings, vnode, preVnode) {
        console.log("why created", el, bindings, vnode, preVnode);
        console.log(bindings.value);
        console.log(bindings.modifiers);
      },
      beforeMount() {
        console.log("why beforeMount");
      },
      mounted() {
        console.log("why mounted");
      },
      beforeUpdate() {
        console.log("why beforeUpdate");
      },
      updated() {
        console.log("why updated");
      },
      beforeUnmount() {
        console.log("why beforeUnmount");
      },
      unmounted() {
        console.log("why unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
```

## 全局指令

```js
app.directive("focus", {
  mounted(el, bindings, vnode, preVnode) {
    console.log("focus mounted");
    el.focus();
  },
});
```

## app.use

```js
import { createApp } from "vue";
import App from "./App.vue";
import pluginObject from "./plugins/plugins_object";
import pluginFunction from "./plugins/plugins_function";

const app = createApp(App);

app.use(pluginObject);
app.use(pluginFunction);

app.mount("#app");

// plugins_function
// 传入函数，自动调用函数，传入app
export default function(app) {
  console.log(app);
}

// plugins_object
// 传入对象，自动调用install函数，传入app
export default {
  install(app) {
    // 设置全局属性
    app.config.globalProperties.$name = "coderwhy";
  },
};


// 获取
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
console.log(instance.appContext.config.globalProperties.$name);
```

## teleport

```vue
<!-- App.vue -->
<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#why">
      <span>呵呵呵呵</span>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
  },
  mounted() {
    console.log(this.$name);
  },
  methods: {
    foo() {
      console.log(this.$name);
    },
  },
};
</script>

<style scoped></style>

<!-- hello world -->
<template>
  <div>
    <h2>Hello World</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

## vue-router

```js
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/message",
    component: () => import("../views/Home.vue"), // 路由懒加载
    children: [
      {
        path: "message",
        component: () => import("../views/Message.vue"),
      },
      {
        path: "production",
        component: () => import("../views/Production.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/user/:name?",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 动态添加路由
let categoryRoute = {
  path: "/category",
  component: () => import("../views/Category.vue"),
};
router.addRoute(categoryRoute);

// 动态添加二级路由

router.addRoute("home", {
  path: "moment",
  component: () => import("../views/HomeMoment.vue"),
});

// 动态删除路由
// 1. 添加一个name相同的路由
// 2. removeRoute
// 3. 通过addRouter函数返回值调用

// 其他方法
// router.hasRoute
// router.getRoute

// 路由导航守卫
// 4.0 仍然保留 但不推荐next

// 返回值问题
// 返回false 不进行导航
// 返回undefine 默认导航
// 返回字符串 - 路径
// 返回对象: 类似于 router.push({path: "/login", query: ....})
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
  // if (to.path !== "/login") {
  //   const token = window.localStorage.getItem("token");
  //   if (!token) {
  //     return "/login"
  //   }
  // }
  // return false
  if (to.path.indexOf("/home") !== -1) {
    return "/login";
  }
});

export default router;
```

```vue
<!-- App.vue -->
<template>
  <div id="nav">
    <router-link to="/home" replace active-class="why">Home</router-link> |
    <router-link to="/about" replace active-class="why">About</router-link> |
    <router-link to="/user/why" replace active-class="why"
      >user1 -- {{ $route.params.name }}</router-link
    >
    |
    <router-link to="/user" replace active-class="why">user2</router-link>
  </div>
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- home -->
<template>
  <div class="home">
    <h2>HOME</h2>
    <button @click="toMessage">消息</button>
    <!-- custom 自定义 -->
    <router-link to="/home/message" v-slot="props" custom>
      <button @click="props.navigate">
        消息
        {{ props.href }}
        <!-- {{props.route}} -->
        {{ props.isActive }}
        {{ props.isExactActive }}
      </button>
    </router-link>
    <router-link to="/home/production">
      <HelloWorldVue></HelloWorldVue>
    </router-link>
    <router-view v-slot="props">
      <transition mode="" name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";
const router = useRouter();
const toMessage = () => {
  router.push({
    path: "/home/message",
    query: {
      name: "xxx",
    },
  });
};
</script>
<style scoped>
.why-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
```

## vuex

```js
<!-- index.js -->
import { createStore } from "vuex"
import home from './modules/home'
import user from './modules/user'

const store = createStore({
  state() {
    return {
      rootCounter: 100
    }
  },
  getters: {
    doubleRootCounter(state) {
      return state.rootCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.rootCounter++
    }
  },
  modules: {
    home,
    user
  }
});

export default store;

// home.js

const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    },
    otherGetter(state) {
      return 100
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    }
  },
  actions: {
    incrementAction({commit, dispatch, state, rootState, getters, rootGetters}) {
      commit("increment")
      commit("increment", null, {root: true})

      // dispatch
      // dispatch("incrementAction", null, {root: true})
    }
  }
}

export default homeModule

// user.js

const userModule = {
  namespaced: true,
  state() {
    return {
      userCounter: 10
    }
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
}

export default userModule

```

## nexttick

```vue
<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <h2 class="title" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";

export default {
  setup() {
    const message = ref("");
    const titleRef = ref(null);

    const counter = ref(0);

    const addMessageContent = () => {
      message.value += "哈哈哈哈哈哈哈哈哈哈";

      // 更新DOM
      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      });
    };

    const increment = () => {
      for (let i = 0; i < 100; i++) {
        counter.value++;
      }
    };

    onUpdated(() => {});

    return {
      message,
      counter,
      increment,
      titleRef,
      addMessageContent,
    };
  },
};
</script>

<style scoped>
.title {
  width: 120px;
}
</style>
```

## vue.config.js

```js
const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: "./build",
  // publicPath: './',
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        // target: 'http://123.207.32.32:8000',
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  // 对象会合并
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // 函数会直接覆盖
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
};
```
