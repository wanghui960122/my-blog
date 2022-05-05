---
title React
---

## 初识 React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      // React.render(渲染内容，挂载对象)
      let message = "hellow";
      function btnClick() {
        message = "word";
        render();
      }
      function render() {
        ReactDOM.render(
          <div>
            <h2>{message}</h2>
            <button onClick={btnClick}>button</button>
          </div>,
          document.getElementById("app")
        );
      }
      render();
    </script>
  </body>
</html>
```

## 组件化开发

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            message: "hello",
          };
        }
        render() {
          return (
            <div>
              <h2>{this.state.message}</h2>
              <button onClick={() => this.btnClick()}>button</button>
            </div>
          );
        }
        btnClick() {
          this.setState({
            message: "world",
          });
        }
      }
      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## 列表渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            movies: ["xxx", "yyy", "ccc", "ddd"],
          };
        }
        render() {
          return (
            <div>
              <ul>
                {this.state.movies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
      }
      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## 计数器案列

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            counter: 0,
          };
        }
        render() {
          return (
            <div>
              <h2>{this.state.counter}</h2>
              <button onClick={() => this.btnClick(1)}>+1</button> <button onClick={() => this.btnClick(-1)}>-1</button>
            </div>
          );
        }
        btnClick(val) {
          let counter = this.state.counter + val;
          this.setState({
            counter,
          });
        }
      }
      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 注释

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      // 封装App组件
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            messaage: "hello world",
          };
        }
        render() {
          return (
            <div>
              {/* 我是注释 */}
              {/*
               *                             _ooOoo_
               *                            o8888888o
               *                            88" . "88
               *                            (| -_- |)
               *                            O\  =  /O
               *                         ____/`---'\____
               *                       .'  \\|     |//  `.
               *                      /  \\|||  :  |||//  \
               *                     /  _||||| -:- |||||-  \
               *                     |   | \\\  -  /// |   |
               *                     | \_|  ''\---/''  |   |
               *                     \  .-\__  `-`  ___/-. /
               *                   ___`. .'  /--.--\  `. . __
               *                ."" '<  `.___\_<|>_/___.'  >'"".
               *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
               *               \  \ `-.   \_ __\ /__ _/   .-` /  /
               *          ======`-.____`-.___\_____/___.-`____.-'======
               *                             `=---='
               *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
               *                     佛祖保佑        永无BUG
               *            佛曰:
               *                   写字楼里写字间，写字间里程序员；
               *                   程序人员写程序，又拿程序换酒钱。
               *                   酒醒只在网上坐，酒醉还来网下眠；
               *                   酒醉酒醒日复日，网上网下年复年。
               *                   但愿老死电脑间，不愿鞠躬老板前；
               *                   奔驰宝马贵者趣，公交自行程序员。
               *                   别人笑我忒疯癫，我笑自己命太贱；
               *                   不见满街漂亮妹，哪个归得程序员？
               */}
              <h2>{this.state.messaage}</h2>
            </div>
          );
        }
      }
      ReactDOM.render(
        /** 渲染内容 **/
        <App />,
        /** 挂载对象 **/
        document.getElementById("app")
      );
    </script>
  </body>
</html>
```

## jsx 中嵌入变量

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            // 1.在{}中可以正常显示显示的内容
            name: "why", // String
            age: 18, // Number
            names: ["abc", "cba", "nba"], // Array

            // 2.在{}中不能显示(忽略)
            test1: null, // null
            test2: undefined, // undefined
            test3: true, // Boolean
            flag: true,

            // 3.对象不能作为jsx的子类
            friend: {
              name: "kobe",
              age: 40,
            },
          };
        }

        render() {
          return (
            <div>
              <h2>{this.state.name}</h2>
              <h2>{this.state.age}</h2>
              <h2>{this.state.names}</h2>

              <h2>{this.state.test1 + ""}</h2>
              <h2>{this.state.test2 + ""}</h2>
              <h2>{this.state.test3.toString()}</h2>

              <h2>{this.state.flag ? "你好啊" : null}</h2>

              <h2>{this.state.friend}</h2>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 嵌入表达式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            firstname: "kobe",
            lastname: "bryant",
            isLogin: false,
          };
        }

        render() {
          const { firstname, lastname, isLogin } = this.state;

          return (
            <div>
              {/*1.运算符表达式*/}
              <h2>{firstname + " " + lastname}</h2>
              <h2>{20 * 50}</h2>

              {/*2.三元表达式*/}
              <h2>{isLogin ? "欢迎回来~" : "请先登录~"}</h2>

              {/*3.进行函数调用*/}
              <h2>{this.getFullName()}</h2>
            </div>
          );
        }

        getFullName() {
          return this.state.firstname + " " + this.state.lastname;
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 绑定属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <div style="color: red; font-size: 30px;"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      function getSizeImage(imgUrl, size) {
        return imgUrl + `?param=${size}x${size}`;
      }

      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            title: "标题",
            imgUrl:
              "http://p2.music.126.net/L8IDEWMk_6vyT0asSkPgXw==/109951163990535633.jpg",
            link: "http://www.baidu.com",
            active: true,
          };
        }

        render() {
          const { title, imgUrl, link, active } = this.state;
          return (
            <div>
              {/* 1.绑定普通属性 */}
              <h2 title={title}>我是标题</h2>
              <img src={getSizeImage(imgUrl, 140)} alt="" />
              <a href={link} target="_blank">
                百度一下
              </a>

              {/* 2.绑定class */}
              <div className="box title">我是div元素</div>
              <div className={"box title " + (active ? "active" : "")}>
                我也是div元素
              </div>
              <label htmlFor=""></label>

              {/* 3.绑定style */}
              <div style={{ color: "red", fontSize: "50px" }}>
                我是div,绑定style属性
              </div>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 绑定事件 this 处理

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            message: "你好啊",
            counter: 100,
          };

          this.btnClick = this.btnClick.bind(this);
        }

        render() {
          return (
            <div>
              {/* 1.方案一: bind绑定this(显示绑定) */}
              <button onClick={this.btnClick}>按钮1</button>
              <button onClick={this.btnClick}>按钮2</button>
              <button onClick={this.btnClick}>按钮3</button>

              {/* 2.方案二: 定义函数时, 使用箭头函数 */}
              <button onClick={this.increment}>+1</button>

              {/* 2.方案三(推荐): 直接传入一个箭头函数, 在箭头函数中调用需要执行的函数*/}
              <button
                onClick={() => {
                  this.decrement("why");
                }}
              >
                -1
              </button>
            </div>
          );
        }

        btnClick() {
          console.log(this.state.message);
        }

        // increment() {
        //   console.log(this.state.counter);
        // }
        // 箭头函数中永远不绑定this
        // ES6中给对象增加属性: class fields
        increment = () => {
          console.log(this.state.counter);
        };

        decrement(name) {
          console.log(this.state.counter, name);
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 绑定事件 传参

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button class="btn">按钮</button>
    <script>
      document
        .getElementsByClassName("btn")[0]
        .addEventListener("click", (e) => {
          console.log(e);
        });
    </script>

    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            movies: ["大话西游", "海王", "流浪地球", "盗梦空间"],
          };

          this.btnClick = this.btnClick.bind(this);
        }

        render() {
          return (
            <div>
              <button onClick={this.btnClick}>按钮</button>

              <ul>
                {this.state.movies.map((item, index, arr) => {
                  return (
                    <li
                      className="item"
                      onClick={(e) => {
                        this.liClick(item, index, e);
                      }}
                      title="li"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        btnClick(event) {
          console.log("按钮发生了点击", event);
        }

        liClick(item, index, event) {
          console.log("li发生了点击", item, index, event);
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h2>我是标题</h2>
    <h2>我是标题</h2>
    <div>我是div元素</div>

    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            isLogin: true,
          };
        }

        render() {
          const { isLogin } = this.state;

          // 1.方案一:通过if判断: 逻辑代码非常多的情况
          let welcome = null;
          let btnText = null;
          if (isLogin) {
            welcome = <h2>欢迎回来~</h2>;
            btnText = "退出";
          } else {
            welcome = <h2>请先登录~</h2>;
            btnText = "登录";
          }

          return (
            <div>
              <div>我是div元素</div>

              {welcome}
              {/* 2.方案二: 三元运算符 */}
              <button onClick={(e) => this.loginClick()}>
                {isLogin ? "退出" : "登录"}
              </button>

              <hr />

              <h2>{isLogin ? "你好啊, coderwhy" : null}</h2>

              {/* 3.方案三: 逻辑与&& */}
              {/* 逻辑与: 一个条件不成立, 后面的条件都不会进行判断了 */}
              <h2>{isLogin && "你好啊, coderwhy"}</h2>
              {isLogin && <h2>你好啊, coderwhy</h2>}
            </div>
          );
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin,
          });
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 实现 v-show

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            isLogin: true,
          };
        }

        render() {
          const { isLogin } = this.state;
          const titleDisplayValue = isLogin ? "block" : "none";
          return (
            <div>
              <button onClick={(e) => this.loginClick()}>
                {isLogin ? "退出" : "登录"}
              </button>
              <h2 style={{ display: titleDisplayValue }}>你好啊, coderwhy</h2>
            </div>
          );
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin,
          });
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## jsx 列表渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            names: ["abc", "cba", "nba", "mba", "dna"],
            numbers: [110, 123, 50, 32, 55, 10, 8, 333],
          };
        }

        render() {
          return (
            <div>
              <h2>名字列表</h2>
              <ul>
                {this.state.names.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>

              <h2>数字列表(过滤1)</h2>
              <ul>
                {this.state.numbers
                  .filter((item) => {
                    return item >= 50;
                  })
                  .map((item) => {
                    return <li>{item}</li>;
                  })}
              </ul>

              <h2>数字列表(过滤2)</h2>
              <ul>
                {this.state.numbers
                  .filter((item) => item >= 50)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>

              <h2>数字列表(截取)</h2>
              <ul>
                {this.state.numbers.slice(0, 4).map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## 案列练习

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      class App extends React.Component {
        constructor() {
          super();
          this.state = {
            books: [
              {
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.0,
                count: 2,
              },
              {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: 59.0,
                count: 1,
              },
              {
                id: 3,
                name: "《编程珠玑》",
                date: "2008-10",
                price: 39.0,
                count: 1,
              },
              {
                id: 4,
                name: "《代码大全》",
                date: "2006-3",
                price: 128.0,
                count: 1,
              },
            ],
          };
        }
        render() {
          const { books } = this.state;
          return (
            <div>
              <table border>
                <thead>
                  <tr>
                    <th></th>
                    <th>书籍名称</th>
                    <th>出版日期</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          disabled={item.count == 1}
                          onClick={(e) => this.addCount(index, -1)}
                        >
                          -1
                        </button>
                        &nbsp;{item.count}&nbsp;
                        <button onClick={(e) => this.addCount(index, 1)}>
                          +1
                        </button>
                      </td>
                      <td>
                        <button onClick={(e) => this.removeItem(item.id)}>
                          移除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2>总价格：{this.getSumPrice()}</h2>
            </div>
          );
        }
        getSumPrice() {
          return this.state.books.reduce((pre, item) => {
            return pre + item.count * item.price;
          }, 0);
        }
        addCount(index, count) {
          const newBooks = [...this.state.books];
          newBooks[index].count += count;
          this.setState({
            books: newBooks,
          });
        }
        removeItem(id) {
          const books = this.state.books.filter((item) => item.id != id);
          this.setState({
            books,
          });
        }
      }
      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## react 脚手架 creat-react-app

```js
npm i -g creat-react-app

creat-react-app my-app
```

## 类组件

```jsx
import { Component } from "react";

// 类组件
// export default class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: '你好啊'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h2>app组件</h2>
//                 <h2>{this.state.message}</h2>
//             </div>
//         )
//     }
// }

// 函数组件

export default function App () {
    return (
        <h2>函数组件</h2>
    )
}

// 返回jsx
// export default class App extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// 返回数组
// export default class App extends Component {
//     render() {
//         return (
//             [
//             <div></div>,
//             <div></div>
//             ]
//         )
//     }
// }

// 返回字符串 数组 布尔值
export default class App extends Component {
  render() {
    return "1";
  }
}
```

## 组件的生命周期

```js
import React, { Component } from "react";

class Cpn extends Component {
  render() {
    return <h2>我是Cpn组件</h2>;
  }

  componentWillUnmount() {
    console.log("调用了Cpn的componentWillUnmount方法");
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      isShow: true,
    };

    console.log("执行了组件的constructor方法");
  }

  render() {
    console.log("执行了组件的render方法");

    return (
      <div>
        我是App组件
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <hr />
        <button onClick={(e) => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  componentDidMount() {
    console.log("执行了组件的componentDidMount方法");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行了组件的componentDidUpdate方法");
  }
}
```

## 组件嵌套

```jsx
import React, { Component } from "react";

function Header() {
  return <div>我是header</div>;
}
function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}
function Banner() {
  return <h3>banner</h3>;
}
function ProductList() {
  return <h3>ProductList</h3>;
}
function Footer() {
  return <div>我是footer</div>;
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
```

## 父传子通信 类组件

```js
import React, { Component } from "react";

class Child extends Component {
  // 默认可以不写
  // constructor(props) {
  //     super(props)
  // }
  render() {
    return (
      <div>
        <h2>子组件</h2>
        {this.props.name}
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="cccsss" />
      </div>
    );
  }
}
```

## 父传子组件通信 函数组件

```jsx
import React, { Component } from "react";

function ChildCpn(props) {
  const { name, age, height } = props;

  return <h2>{name + age + height}</h2>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.88" />
        <ChildCpn name="kobe" age="40" height="1.98" />
      </div>
    );
  }
}
```

## 父传子组件通信 属性验证

```jsx
import React, { Component } from "react";

import PropTypes from "prop-types";

function ChildCpn(props) {
  const { name, age, height } = props;
  const { names } = props;

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

class ChildCpn2 extends Component {
  // es6中的class fields写法
  static propTypes = {};

  static defaultProps = {};
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array,
};

ChildCpn.defaultProps = {
  name: "why",
  age: 30,
  height: 1.98,
  names: ["aaa", "bbb"],
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age={18} height={1.88} names={["abc", "cba"]} />
        <ChildCpn name="kobe" age={40} height={1.98} names={["nba", "mba"]} />
        <ChildCpn />
      </div>
    );
  }
}
```

## 子传父 函数传递

```jsx
import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>+1</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <CounterButton onClick={(e) => this.increment()} name="why" />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
```

## 插槽

```jsx
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    // this.props.children;
    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">{this.props.children[0]}</div>
        <div className="nav-item nav-center">{this.props.children[1]}</div>
        <div className="nav-item nav-right">{this.props.children[2]}</div>
      </div>
    );
  }
}

class NavBar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;

    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-item nav-center">{centerSlot}</div>
        <div className="nav-item nav-right">{rightSlot}</div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    const leftJsx = <span>aaa</span>;
    return (
      <div>
        <NavBar name="" title="" className="">
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NavBar>

        <NavBar2
          leftSlot={leftJsx}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<a href="/#">ccc</a>}
        />
      </div>
    );
  }
}
```

## 跨组件通信 props

```jsx
import React, { Component } from "react";

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    // const {nickname, level} = this.state;

    return (
      <div>
        <Profile {...this.state} />
      </div>
    );
  }
}
```

## 跨组件通信 类组件 context

```jsx
import React, { Component } from "react";

// 创建Context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    // jsx ->
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;
ProfileHeader.contextType = ThemeContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
```

## 跨组件通信 函数组件 context

```jsx
import React, { Component } from "react";

// 创建Context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称: {value.nickname}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
```

## 跨组件通信 多个 context

```jsx
import React, { Component } from "react";

// 创建Context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

const ThemeContext = React.createContext({
  color: "black",
});

function ProfileHeader() {
  // jsx -> 嵌套的方式
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2 style={{ color: theme.color }}>
                    用户昵称: {value.nickname}
                  </h2>
                  <h2>用户等级: {value.level}</h2>
                  <h2>颜色: {theme.color}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
```

## setState 是异步的

```jsx
import React, { Component } from "react";

function Home(props) {
  // Hello World
  return <h1>{props.message}</h1>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    );
  }

  componentDidUpdate() {
    // 方式二: 获取异步更新的state
    console.log(this.state.message);
  }

  changeText() {
    // 2.setState是异步更新
    // this.setState({
    //   message: "你好啊,李银河"
    // })
    // console.log(this.state.message); // Hello World

    // 方式一: 获取异步更新后的数据
    // setState(更新的state, 回调函数)
    this.setState(
      {
        message: "你好啊,李银河",
      },
      () => {
        console.log(this.state.message);
      }
    );
  }
}
```

## 使 setState 同步更新

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", (e) => {
      this.setState({
        message: "你好啊,李银河",
      });
      console.log(this.state.message);
    });

    // this.setState({
    //   message: "你好啊,李银河"
    // })
    // console.log(this.state.message);
  }

  changeText() {
    // 情况一: 将setState放入到定时器中
    setTimeout(() => {
      this.setState({
        message: "你好啊,李银河",
      });
      console.log(this.state.message);
    }, 0);
  }
}
```

## setState 数据合并

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
      name: "coderwhy",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {
    // 了解真相你才能获得真正的自由
    this.setState({
      message: "你好啊,李银河",
    });

    // Object.assign({}, this.state, {message: "你好啊,李银河"})
  }
}
```

## setState 本身的合并

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    // 1.setState本身被合并
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // 2.setState合并时进行累加
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
}
```

## shouldComponentUpdate

```jsx
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }

    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "你好啊,李银河",
    });
  }
}
```

## pureComponent

```jsx
import React, { PureComponent } from "react";

// Header
function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>;
}

// Main
class Banner extends PureComponent {
  render() {
    console.log("Banner render函数被调用");
    return <h3>我是Banner组件</h3>;
  }
}

function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  );
}

class Main extends PureComponent {
  render() {
    console.log("Main render函数被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

// Footer
function Footer() {
  console.log("Footer被调用");
  return <h2>我是Footer组件</h2>;
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
```

## memo 函数的使用

```jsx
import React, { PureComponent, memo } from "react";

// Header
const MemoHeader = memo(function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>;
});

// Main
class Banner extends PureComponent {
  render() {
    console.log("Banner render函数被调用");
    return <h3>我是Banner组件</h3>;
  }
}

const MemoProductList = memo(function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  );
});

class Main extends PureComponent {
  render() {
    console.log("Main render函数被调用");
    return (
      <div>
        <Banner />
        <MemoProductList />
      </div>
    );
  }
}

// Footer
const MemoFooter = memo(function Footer() {
  console.log("Footer被调用");
  return <h2>我是Footer组件</h2>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
```

## 全局事件传递

```jsx
import React, { PureComponent } from "react";

import { EventEmitter } from "events";

// 事件总线: event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(num, message) {
    console.log(num, message);
  }

  render() {
    return <div>Home</div>;
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    );
  }

  emmitEvent() {
    eventBus.emit("sayHello", 123, "Hello Home");
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
```

## ref 的使用

```jsx
import React, { PureComponent, createRef, Component } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数>Hello React</h2> */}
        <h2 ref="titleRef">Hello React</h2>
        {/* 目前React推荐的方式 */}
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={arg => this.titleEl = arg}>Hello React</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <hr/>
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.appBtnClick()}>App按钮</button>
      </div>
    )
  }

  changeText() {
    // 1.使用方式一: 字符串(不推荐, 后续的更新会删除)
    this.refs.titleRef.innerHTML = "Hello Coderwhy";
    // 2.使用方式二: 对象方式
    this.titleRef.current.innerHTML = "Hello JavaScript";
    // 3.使用方式三: 回调函数方式
    this.titleEl.innerHTML = "Hello TypeScript";
  }

  appBtnClick() {
    this.counterRef.current.increment();
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter title={}></Counter>
      </div>
    )
  }
}

```

## 受控组件

```jsx
import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            {/* 受控组件 */}
            <input
              type="text"
              id="username"
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
}
```

## 非受控组件

```jsx
import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            <input type="text" id="username" ref={this.usernameRef} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
```

## 高阶组件的定义方式

```jsx
import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return <div>App: {this.props.name}</div>;
  }
}

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  NewComponent.displayName = "Kobe";
  return NewComponent;
}

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />;
  }

  NewComponent.displayName = "Kobe";
  return NewComponent;
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;
```

## 高阶组件应用 增强 props

```jsx
import React, { PureComponent } from "react";

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="中国" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:{" "}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About:{" "}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="coderwhy" level={90} />
        <EnhanceAbout nickname="kobe" level={99} />
      </div>
    );
  }
}

export default App;
```

## 高阶组件应用 增强 props

```jsx
// 默认
import React, { PureComponent, createContext } from "react";

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  level: -1,
  区域: "中国",
});
class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>
              Home:{" "}
              {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}
            </h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>
              About:{" "}
              {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}
            </h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: "why", level: 90, region: "中国" }}
        >
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;


// 改进
import React, { PureComponent, createContext } from 'react';

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  level: -1,
  区域: "中国"
});

class Home extends PureComponent {
  render() {
    return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}


const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{nickname: "why", level: 90, region: "中国"}}>
          <UserHome/>
          <UserAbout/>
          <UserDetail/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;

```

## 高阶组件应用 生命周期劫持

```jsx
import React, { PureComponent } from "react";

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    // 渲染完成再获取一个时间 endTime
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}渲染时间: ${interval}`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>;
  }
}

const TimeHome = withRenderTime(Home);
const TimeAbout = withRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <TimeAbout />
      </div>
    );
  }
}

class Person {}

console.log(Person.name);
```

## ref 的转发

```jsx
import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

// 高阶组件forwardRef
const Profile = forwardRef(function (props, ref) {
  return <p ref={ref}>Profile</p>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef} />

        <Profile ref={this.profileRef} name={"why"} />

        <button onClick={(e) => this.printRef()}>打印ref</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}
```

## protals 的使用

```jsx
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
```

## fragment 的使用

```jsx
import React, { PureComponent, Fragment } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [
        { name: "why", age: 18 },
        { name: "lilei", age: 20 },
        { name: "kobe", age: 25 },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <div>
          {this.state.friends.map((item, index) => {
            return (
              <Fragment key={item.name}>
                <div>{item.name}</div>
                <p>{item.age}</p>
                <hr />
              </Fragment>
            );
          })}
        </div>
      </>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
```

## strictMode

```jsx
import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constrcutor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("home componentWillMount");
  // }

  render() {
    return <div ref="title">Home</div>;
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log("profile constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("profile componentWillMount");
  // }

  render() {
    return <div ref="title">Profile</div>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
```

## react css 内联样式

```jsx
import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "purple",
    };
  }

  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: "underline",
    };

    return (
      <div>
        <h2 style={{ fontSize: "50px", color: "red" }}>我是标题</h2>
        <p style={pStyle}>我是一段文字描述</p>
      </div>
    );
  }
}
```

## react css 普通 css

```jsx
// css 文件
.profile .title {
  color: yellow;
}

// js 文件
import React, { PureComponent } from 'react';

import './style.css';

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
          <h2 className="title">我是Profile的标题</h2>
          <ul className="settings">
            <li>设置列表1</li>
            <li>设置列表2</li>
            <li>设置列表3</li>
          </ul>
      </div>
    )
  }
}

```

## react css modules

```jsx
// style.module.css
.title {
  font-size: 30px;
  color: red;
}

.banner {
  color: orange;
}

// index.js
import React, { PureComponent } from 'react';

import homeStyle from './style.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={homeStyle.title}>我是home的标题</h2>
        <div className={homeStyle.banner}>
          <span>轮播图</span>
        </div>
      </div>
    )
  }
}

```

## styled-compontents

```jsx
// style.js
import styled from "styled-components";

export const HomeWrapper = styled.div`
  font-size: 12px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: #fff;

      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "aaa";
      }
    }

    /* .active {
      color: #f00;
    } */
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${(props) => props.theme.themeColor};
  font-size: ${(props) => props.theme.fontSize};
`;
// index.js
import React, { PureComponent } from "react";

import { HomeWrapper, TitleWrapper } from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home的标题</TitleWrapper>
        <div className="banner">
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>
          <span>轮播图4</span>
        </div>
      </HomeWrapper>
    );
  }
}

// styled-components 继承 和 ThemeProvider 定义主题
import React, { PureComponent } from 'react';

import Home from '../home';
import Profile from '../profile';
import styled, { ThemeProvider } from 'styled-components';

const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`

// const HYPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: red;
//   color: #fff;
//   background-color: green;
// `

const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color: green;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor: "red", fontSize: "30px"}}>
        <Home />
        <hr />
        <Profile />
        <HYButton>我是普通的按钮</HYButton>
        <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}

```

## classNames

```jsx
import React, { PureComponent } from "react";
import classNames from "classnames";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <div>
        <h2
          className={classNames({
            title: this.state.active,
          })}
        >
          app
        </h2>
      </div>
    );
  }
}
```

## craco.config.js

```jsx
// yarn add @craco/craco

// 修改启动命令
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },

const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    // 修改antd 主题色
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};
```

## react-transition-group

```jsx
// CSSTransition

// style.css
.card-enter, .card-appear {
  opacity: 0;
  transform: scale(.6);
}

.card-enter-active, .card-appear-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.card-enter-done, .card-appear-done {

}

.card-exit {
  opacity: 1;
  transform: scale(1);
}

.card-exit-active {
  opacity: 0;
  transform: scale(.6);
  transition: opacity 300ms, transform 300ms;
}

.card-exit-done {
  opacity: 0;
}

// index.js

import React, { PureComponent } from "react";

import "./CSSTransition.css";

import { CSSTransition } from "react-transition-group";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
        >
          显示/隐藏
        </button>
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={5000}
          unmountOnExit={true}
          appear
          onEnter={(el) => console.log("开始进入")}
          onEntering={(el) => console.log("正在进入")}
          onEntered={(el) => console.log("进入完成")}
          onExit={(el) => console.log("开始退出")}
          onExiting={(el) => console.log("退出状态")}
          onExited={(el) => console.log("退出完成")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}

// SwitchTransition
// style.css
.btn-enter {
  opacity: 0;
  transform: translateX(100%);
}

.btn-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 1000ms, transform 1000ms;
}

.btn-exit {
  opacity: 1;
  transform: translateX(0);
}

.btn-exit-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1000ms, transform 1000ms;
}

// index.js
import React, { PureComponent } from 'react';

import "./SwitchTransition.css";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true
    }
  }

  render() {
    const {isOn} = this.state;

    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isOn ? "on": "off"}
                         classNames="btn"
                         timeout={1000}>
            <button onClick={e => this.setState({isOn: !isOn})}>
              {isOn ? "on": "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

// TransitionGroup
// style.css
.item-enter {
  opacity: 0;
  transform: scale(.6);
}

.item-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.item-enter-done {
  color: red;
}

.item-exit {
  opacity: 1;
  transform: scale(1);
}

.item-exit-active {
  opacity: 0;
  transform: scale(.6);
  transition: opacity 300ms, transform 300ms;
}

.item-exit-done {
  opacity: 0;
}

// index.js
import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TransitionGroup.css';

export default class TransitionGroupDemo extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      names: ["coderwhy", "kobe", "lilei"]
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition key={item}
                  timeout={500}
                  classNames="item">
                  <div>
                    {item}
                    <button onClick={e => this.removeItem(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "coderwhy"]
    })
  }

  removeItem(index) {
    // index indey indez
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}

```

## redux 最基本使用

```jsx
const redux = require("redux");

const initialState = {
  counter: 0,
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

// store
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log("发生改变", store.getState());
});

// action
const action1 = {
  type: "INCREMENT",
};

const action2 = {
  type: "DECREMENT",
};

const action3 = {
  type: "ADD_NUMBER",
  num: 5,
};

const action4 = {
  type: "SUB_NUMBER",
  num: 12,
};

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
```

## 封装 connect 函数

```jsx
// 入口 index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { storeContext } from "./utils/context";

ReactDOM.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
  document.getElementById("root")
);

// context.js
import React from "react";

const storeContext = React.createContext();

export { storeContext };

// connect.js
import { PureComponent } from "react";
import { storeContext } from "./context";

export default function connect(mapStateToProps, mapDispatchToProp) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        this.unscbscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unscbscribe();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProp(this.context.dispatch)}
          />
        );
      }
    }
    EnhanceComponent.contextType = storeContext;
    return EnhanceComponent;
  };
}

// 使用文件
import React from 'react'
import { addAction, subAction } from '../store/actionCreators'
import connect from '../utils/connect'

function About(props) {
    return (
      <div>
        <h1>about</h1>
        <h2>当前计数：{props.counter}</h2>
        <button onClick={e => props.subNumber(1)}>-1</button>
        <button onClick={e => props.subNumber(5)}>-5</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    decrement: function (num) {
      dispatch(addAction(num))
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(About)
```

## react-redux

```jsx
// 入口文件
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 使用
import React from "react";
import { addAction, subAction } from "../store/actionCreators";
import { connect } from "react-redux";

function About(props) {
  return (
    <div>
      <h1>about</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.subNumber(1)}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    decrement: function (num) {
      dispatch(addAction(num));
    },
    subNumber: function (num) {
      dispatch(subAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(About);
```

## redux 异步操作 redux-thunk

```jsx
// store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers =
// 使用react-devtools 调试 进行配置
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const storeEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;

// store/createActions
export const getHomeMultidata = (dispatch, getState) => {
  axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    dispatch(changeBanner(res.data.data.banner.list));
    dispatch(changeRecommend(res.data.data.recommend.list));
  });
};


// index.js
import React, { PureComponent } from 'react'
import { addAction, subAction, getHomeMultidata } from '../store/actionCreators'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }
  render() {
    return (
      <div>
        <h1>home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.decrement(1)}>+1</button>
        <button onClick={e => this.props.decrement(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    decrement: function (num) {
      dispatch(addAction(num))
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    },
    getHomeMultidata: function() {
      // 会在内部自己调用，不需要在此处调用
      dispatch(getHomeMultidata)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home)

```

## redux 异步操作 redux-saga

```jsx
// store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;

// createActions.js

export const fetchHomeMultidata = {
  type: FETCH_HOME_MULTIDATA
}

// saga.js
import axios from 'axios'
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import { changeRecommend, changeBanner } from './actionCreators'
import { FETCH_HOME_MULTIDATA } from './constants'

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  yield all([
    put(changeBanner(res.data.data.banner.list)),
    put(changeRecommend(res.data.data.recommend.list))
  ])
}

export default function* mySaga() {
  // takeLatest takeEvery区别:
  // takeLatest: 依次只能监听一个对应的action
  // takeEvery: 每一个都会被执行
  yield all([
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  ])
}

// index.js
import React, { PureComponent } from 'react'
import { addAction, subAction, fetchHomeMultidata } from '../store/actionCreators'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }
  render() {
    return (
      <div>
        <h1>home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.decrement(1)}>+1</button>
        <button onClick={e => this.props.decrement(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    decrement: function (num) {
      dispatch(addAction(num))
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    },
    getHomeMultidata: function() {
      dispatch(fetchHomeMultidata)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home)

```

## reducer 拆分

```jsx
// home/reducer.js
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMEND
} from './constants.js';

// 拆分homeReducer
const initialHomeState = {
  banners: [],
  recommends: []
}
function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;


// counter/reducer.js
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js';

// 拆分counterReducer
const initialCounterState = {
  counter: 0
}
function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counterReducer;

// reducer.js
import { reducer as counterReducer } from "./counter";
import { reducer as homeReducer } from "./home";

import { combineReducers } from "redux";

// function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   }
// }

//reducer应该是一个什么类型? function
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});

export default reducer;
```

## react-router

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// router/index.js
import Home from "../pages/home";
import About, {
  AboutHisotry,
  AboutCulture,
  AboutContact,
  AboutJoin,
} from "../pages/about";
import Profile from "../pages/profile";
import User from "../pages/user";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHisotry,
      },
      {
        path: "/about/culture",
        component: AboutCulture,
      },
      {
        path: "/about/contact",
        component: AboutContact,
      },
      {
        path: "/about/join",
        component: AboutJoin,
      },
    ],
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/user",
    component: User,
  },
];

export default routes;


// App.js
import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import {
  BrowserRouter,
  Link,
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import Product from './pages/product';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';
import Detail3 from './pages/detail3';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { to: "/", title: "首页" },
        { to: "/about", title: "首页" },
        { to: "/", title: "首页" },
      ]
    }
  }

  render() {
    const id = "123";
    const info = {name: "why", age: 18, height: 1.88};

    return (
      <div>
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

        {/* 1.NavLink的使用 */}
        {/* <NavLink exact to="/" activeStyle={{color: "red", fontSize: "30px"}}>首页</NavLink>
          <NavLink to="/about" activeStyle={{color: "red", fontSize: "30px"}}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{color: "red", fontSize: "30px"}}>我的</NavLink> */}

        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        {/* 动态路由 */}
        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        <NavLink to={`/detail2?name=why&age=18`} activeClassName="link-active">详情2</NavLink>
        <NavLink to={{
                  pathname: "/detail3",
                  search: "name=abc",
                  state: info
                 }}
                activeClassName="link-active">
          详情3
        </NavLink>
        <button onClick={e => this.jumpToProduct()}>商品</button>

        {/* 2.Switch组件的作用: 路径和组件之间的映射关系 */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={User} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}

        {renderRoutes(routes)}

      </div>
    )
  }

  jumpToProduct() {
    // this.props.history.push('/product', info)
    this.props.history.push("/product");
  }
}

export default withRouter(App);

```

## 体验 hooks

```jsx
import React, { useState } from "react";

export default function CounterHook() {
  /**
   * Hook: useState
   *  > 本身是一个函数, 来自react包
   *  > 参数和返回值
   *    1.参数: 作用是给创建出来的状态一个默认值
   *    2.返回值: 数组
   *      * 元素1: 当前state的值
   *      * 元素2: 设置新的值时,使用的一个函数
   */
  const arr = useState(0);
  const state = arr[0];
  const setState = arr[1];

  return (
    <div>
      <h2>当前计数: {state}</h2>
      <button onClick={(e) => setState(state + 1)}>+1</button>
      <button onClick={(e) => setState(state - 1)}>-1</button>
    </div>
  );
}


// -------------------------------------------------------------------------------------

import React, {useState} from 'react';

export default function CounterHook() {
  const [count, setCount] = useState(() => 10);

  console.log("CounterHook渲染");

  function handleBtnClick() {
    // setCount(count + 10);
    // setCount(count + 10);
    // setCount(count + 10);
    // setCount(count + 10);
    setCount((prevCount) => prevCount + 10);
    setCount((prevCount) => prevCount + 10);
    setCount((prevCount) => prevCount + 10);
    setCount((prevCount) => prevCount + 10);
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount((prevCount) => prevCount + 10)}>+10</button>
      <button onClick={handleBtnClick}>+10</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}

```

## useState 多个状态的使用

```jsx
import React, { useState } from "react";

export default function MultiHookState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(["kobe", "lilei"]);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <h2>我的年龄: {age}</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
```

## useState 复杂状态的修改

```jsx
import React, { useState } from "react";

export default function ComplexHookState() {
  const [friends, setFrineds] = useState(["kobe", "lilei"]);
  const [students, setStudents] = useState([
    { id: 110, name: "why", age: 18 },
    { id: 111, name: "kobe", age: 30 },
    { id: 112, name: "lilei", age: 25 },
  ]);

  function addFriend() {
    friends.push("hmm");
    setFrineds(friends);
  }

  function incrementAgeWithIndex(index) {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表:</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setFrineds([...friends, "tom"])}>添加朋友</button>
      {/* 错误的做法 */}
      <button onClick={addFriend}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                名字: {item.name} 年龄: {item.age}
              </span>
              <button onClick={(e) => incrementAgeWithIndex(index)}>
                age+1
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

## useEffect

```jsx
import React, { useState, useEffect } from "react";

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0);
  // 模拟mount/update生命周期
  useEffect(() => {
    document.title = counter;
  });

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
```

## useEffect 模拟订阅和取消订阅

```jsx
import React, { useEffect, useState } from "react";

export default function EffectHookCancelDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("订阅一些事件");

    return () => {
      console.log("取消订阅事件");
    };
  }, []);

  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

## 多个 useEffect 一起使用

```jsx
import React, { useState, useEffect } from "react";

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log("修改DOM", count);
  }, [count]);

  useEffect(() => {
    console.log("订阅事件");
  }, []);

  useEffect(() => {
    console.log("网络请求");
  }, []);

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <h2>{isLogin ? "coderwhy" : "未登录"}</h2>
      <button onClick={(e) => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
```

## useContext

```jsx
// App.js
import React, { useState, createContext } from "react";

export const UserContext = createContext();
export const ThemeContext = createContext();

{
  /* 4.useContext */
}
<UserContext.Provider value={{ name: "why", age: 18 }}>
  <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
    <ContextHookDemo />
  </ThemeContext.Provider>
</UserContext.Provider>;

// index.js
import React, { useContext } from "react";

import { UserContext, ThemeContext } from "../App";

export default function ContextHookDemo(props) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  console.log(user, theme);

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  );
}
```

## useReducer

```jsx
// home.js
import React, { useState, useReducer } from 'react';

import reducer from './reducer';

export default function Home() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <div>
      <h2>Home当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
    </div>
  )
}

// profile.js
import React, { useReducer } from 'react';

import reducer from './reducer';

export default function Profile() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h2>Profile当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({ type: "increment" })}>+1</button>
      <button onClick={e => dispatch({ type: "decrement" })}>-1</button>
    </div>
  )
}

// reducer.js
export default function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {...state, counter: state.counter + 1};
    case "decrement":
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

```

## useCallback

```jsx
import React, { useState, useCallback, memo } from "react";

/**
 * useCallback在什么时候使用?
 * 场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.
 */

const HYButton = memo((props) => {
  console.log("HYButton重新渲染: " + props.title);
  return <button onClick={props.increment}>HYButton +1</button>;
});

export default function CallbackHookDemo02() {
  console.log("CallbackHookDemo02重新渲染");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = () => {
    console.log("执行increment1函数");
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    console.log("执行increment2函数");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />

      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
```

## useMemo 复杂计算的应用

```jsx
import React, { useState, useMemo } from "react";

function calcNumber(count) {
  console.log("calcNumber重新计算");
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  // const total = calcNumber(count);
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
```

## useMemo 传入子组件应用类型

```jsx
import React, { useState, memo, useMemo } from "react";

const HYInfo = memo((props) => {
  console.log("HYInfo重新渲染");
  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}
    </h2>
  );
});

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02重新渲染");
  const [show, setShow] = useState(true);

  // const info = { name: "why", age: 18 };
  const info = useMemo(() => {
    return { name: "why", age: 18 };
  }, []);

  return (
    <div>
      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
```

## useRef 引用 Dom

```jsx
import React, { useEffect, useRef } from "react";

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>;
  }
}

function TestCpn2(props) {
  return <h2>TestCpn2</h2>;
}

export default function RefHookDemo01() {
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = "Hello World";
    inputRef.current.focus();
    console.log(testRef.current);
    console.log(testRef2.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef} />
      <TestCpn2 ref={testRef2} />

      <button onClick={(e) => changeDOM()}>修改DOM</button>
    </div>
  );
}
```

## useRef 引用其他数据类型

```jsx
import React, { useRef, useState, useEffect } from "react";

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);

  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
  }, [count]);

  return (
    <div>
      {/* <h2>numRef中的值: {numRef.current}</h2>
      <h2>count中的值: {count}</h2> */}
      <h2>count上一次的值: {numRef.current}</h2>
      <h2>count这一次的值: {count}</h2>
      <button onClick={(e) => setCount(count + 10)}>+10</button>
    </div>
  );
}
```

## useImperativeHandle

```jsx
import React, { useRef, forwardRef, useImperativeHandle } from "react";

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );

  return <input ref={inputRef} type="text" />;
});

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
```

## useLayoutEffect

```jsx
import React, { useState, useEffect, useLayoutEffect } from "react";

export default function LayoutEffectCounterDemo() {
  const [count, setCount] = useState(10);

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200);
    }
  }, [count]);

  return (
    <div>
      <h2>数字: {count}</h2>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
```

## 自定义 hook

```jsx
import React, { useEffect } from "react";

const Home = (props) => {
  useLoggingLife("Home");
  return <h2>Home</h2>;
};

const Profile = (props) => {
  useLoggingLife("Profile");
  return <h2>Profile</h2>;
};

export default function CustomLifeHookDemo01() {
  useLoggingLife("CustomLifeHookDemo01");
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  );
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);

    return () => {
      console.log(`${name}组件被销毁掉了`);
    };
  }, []);
}
```

## useSelector useDispatch shallowEqual

```jsx
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";

import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYSongsCover from "@/components/songs-cover";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreators";

export default memo(function HYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <HYSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
```

## immutable

```jsx
import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state;
  }
}

export default reducer;
```
