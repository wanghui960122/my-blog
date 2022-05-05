---
title TS
---

## 变量的定义格式

```ts
// 1.类型注解
// 2.var/let/const
// 3.string和String的区别
// 4.类型推导
var name: string = "why";
let age: number = 18;
const height: number = 1.88;

// string: TypeScript中的字符串类型
// String: JavaScript的字符串包装类的类型
const message: string = "Hello World";

// 默认情况下进行赋值时, 会将赋值的值的类型, 作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
let foo = "foo";
// foo = 123
```

## number 类型的使用

```ts
let num: number = 123;
num = 222;

let num1: number = 100;
// 十六进制
let num2: number = 0x100;
// 二进制
let num3: number = 0b100;
// 二进制
let num4: number = 0o100;

console.log(num1, num2, num3, num4);
```

## boolean 类型的使用

```ts
let flag: boolean = false;
flag = 20 > 30;

let flag1: boolean = true;
```

## string 类型的使用

```ts
let message1: string = "hello world";
let message2: string = "Hello World";

// 个人习惯: 默认情况下, 如果可以推导出对应的标识符的类型时, 一般情况下是不加
const name = "why";
const age = 18;
const height = 1.88;

let message3 = `name:${name} age:${age} height:${height}`;
console.log(message3);
```

## array 类型的使用

```ts
// 确定一个事实: names是一个数组类型, 但是数组中存放的是什么类型的元素呢?
// 不好的习惯: 一个数组中在TypeScript开发中, 最好存放的数据类型是固定的(string)
// 类型注解: type annotation
const names1: Array<string> = []; // 不推荐(react jsx中是有冲突   <div></div>)
const names2: string[] = []; // 推荐

// 在数组中存放不同的类型是不好的习惯
// names.push("abc")
// // names.push(123)
```

## object 类型的使用

```ts
const info = {
  name: "why",
  age: 18,
};

console.log(info.name);
// 后续详谈
```

## null 和 undefined 类型

```ts
let n1: null = null;

let n2: undefined = undefined;
```

## symbol 类型

```ts
let s1 = Symbol(1);

let s2: symbol = Symbol(2);
```

## any 类型的使用

```ts
// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时(原生的JavaScript代码是一样)
let a1: any = 1;

a1 = "aaa";
a1 = null;
a1 = 123;
a1 = {};

let arr1: any[] = [1, "2", null];
```

## unknown 类型

```ts
function foo(): number {
  return 1;
}

function bar(): string {
  return "1";
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let flag: boolean = true;

let result: unknown;

if (flag) {
  result = foo();
} else {
  result = bar();
}

let message: any = result;

// let m1: string = result
```

## void 类型

```ts
function foo() {
  console.log(1);
}

foo();

function bar(num1: number, num2: number): void {
  console.log(num1 + num2);
}

bar(1, 2);
```

## never 类型

```ts
function foo(): never {
  // 死循环 永远不会有返回结果
  while (true) {
    console.log(1);
  }
}

function bar(): never {
  // 抛出异常
  throw new Error("111");
}

// never 实际应用

function hanldeMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log("string类型");
      break;
    case "number":
      console.log("number类型");
      break;
    case "boolean":
      console.log("boolean类型");
      break;
    default:
      const check: never = message;
  }
}
```

## tuple 类型

```ts
// 元组类型
// tuple元组: 多种元素的组合

const t1: [string, number] = ["a", 1];

// 元组类型应用
// function useState(state: any) {
//   let currentState = state;

//   function changeState(newState) {
//     currentState = newState;
//   }

//   const tuple: [any, (newState: any) => void] = [currentState, changeState];

//   return tuple;
// }

// const [counter, setCounter] = useState(10);

// 优化
function useState<T>(state: T) {
  let currentState = state;

  function changeState(newState) {
    currentState = newState;
  }

  const tuple: [T, (newState: T) => void] = [currentState, changeState];

  return tuple;
}

const [counter, setCounter] = useState(10);
const [title, setTitle] = useState("abc");
```

## 函数的参数和返回值类型

```ts
// 给参数加上类型注解: num1: number, num2: number
// 给返回值加上类型注释: (): number
// 在开发中,通常情况下可以不写返回值的类型(自动推导)
function sum(num1: number, num2: number) {
  return num1 + num2;
}

// sum(123, 321)
```

## 匿名函数的参数类型

```ts
// 通常情况下, 在定义一个函数时, 都会给参数加上类型注解的
function foo(message: string) {}

const names = ["abc", "cba", "nba"];
// item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解
// 上下文中的函数: 可以不添加类型注解
names.forEach(function (item) {
  console.log(item.split(""));
});
```

## 对象类型 & 可选类型

```ts
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point);
}

printPoint({ x: 1, y: 1 });
printPoint({ x: 1, y: 1, z: 1 });
```

## 联合类型

```ts
// number|string 联合类型
function printID(id: number | string | boolean) {
  // 使用联合类型的值时, 需要特别的小心
  // narrow: 缩小
  if (typeof id === "string") {
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID("abc");
printID(true);
```

## 可选类型和联合类型的关系

```ts
// 让一个参数本身是可选的
// 一个参数一个可选类型的时候, 它其实类似于是这个参数是 类型|undefined 的联合类型
// function foo(message?: string) {
//   console.log(message)
// }

function foo(message?: string) {
  console.log(message);
}

foo();
```

## 类型别名

```ts
// type用于定义类型别名(type alias)
type IDType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printId(id: IDType) {}

function printPoint(point: PointType) {}
```

## 类型断言

```ts
// 类型断言 as

const el = document.getElementById("king") as HTMLImageElement;
el.src = "xxx";

class Person {}

class Student extends Person {
  studying() {}
}

function sayHellow(p: Person) {
  (p as Student).studying();
}

const stu = new Student();

sayHellow(stu);

// 不推荐
const message = "hellow";
const num: number = message as unknown as number;
```

## 非空类型断言

```ts
// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码
  console.log(message!.length);
}

printMessageLength("aaaa");
printMessageLength("hello world");
```

## 可选链的使用

```ts
type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFriend?: {
      name: string;
    };
  };
};

const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
    girlFriend: {
      name: "lily",
    },
  },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend!.name)
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

// if (info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }
```

## !! 的使用

```ts
const message = "Hello World";

// const flag = Boolean(message)
// console.log(flag)

const flag = !!message;
console.log(flag);
```

## ?? 的使用

```ts
let message: string | null = null;

let flag = message ?? "aaa";

console.log(flag); // aaa
```

## 字面量类型

```ts
// "Hello World"也是可以作为类型的, 叫做字面量类型
const message: "Hello World" = "Hello World";

// let num: 123 = 123
// num = 321

// 字面量类型的意义, 就是必须结合联合类型
type Alignment = "left" | "right" | "center";

let align: Alignment = "left";
align = "right";
align = "center";

// align = 'hehehehe'
```

## 字面量推理

```ts
type Method = "GET" | "POST";
function request(url: string, method: Method) {}

type Request = {
  url: string;
  method: Method;
};

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST",
} as const;

request(options.url, options.method);
```

## 类型缩小

```ts
// 1.typeof的类型缩小
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 2.平等的类型缩小(=== == !== !=/switch)
type Direction = "left" | "right" | "top" | "bottom";
function printDirection(direction: Direction) {
  // 1.if判断
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()
  // 2.switch判断
  // switch (direction) {
  //   case 'left':
  //     console.log(direction)
  //     break;
  //   case ...
  // }
}

// 3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

const stu = new Student();
work(stu);

// 4. in
type Fish = {
  swimming: () => void;
};

type Dog = {
  running: () => void;
};

function walk(animal: Fish | Dog) {
  if ("swimming" in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming");
  },
};

walk(fish);
```

## 函数的类型

```ts
// 1.函数作为参数时, 在参数中如何编写类型
function foo() {}

type FooFnType = () => void;
function bar(fn: FooFnType) {
  fn();
}

bar(foo);

// 2.定义常量时, 编写函数的类型
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2;
};

// 案例
function calc(
  n1: number,
  n2: number,
  fn: (num1: number, num2: number) => number
) {
  return fn(n1, n2);
}

const result1 = calc(20, 30, function (a1, a2) {
  return a1 + a2;
});
console.log(result1);

const result2 = calc(20, 30, function (a1, a2) {
  return a1 * a2;
});
console.log(result2);
```

## 参数的可选类型

```ts
// 可选类型是必须写在必选类型的后面的
// y -> undefined | number
function foo(x: number, y?: number) {}

foo(20, 30);
foo(20);
```

## 参数的默认值

```ts
// 必传参数 - 有默认值的参数 - 可选参数
function foo(y: number, x: number = 20) {
  console.log(x, y);
}

foo(30);
```

## 函数的默认值

```ts
function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(20, 30));
console.log(sum(20, 30, 40));
console.log(sum(20, 30, 40, 50));
```

## this 的默认推导

```ts
// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: "why",
  eating() {
    console.log(this.name + " eating");
  },
};

info.eating();

export {};
```

## this 的不明确类型

```ts
type ThisType = { name: string };

function eating(this: ThisType, ...message: string[]) {
  console.log(this.name + " eating", message);
}

const info = {
  name: "why",
  eating: eating,
};

// 隐式绑定
info.eating("哈哈哈");

// 显示绑定
eating.call({ name: "kobe" }, "呵呵呵", "aaaa");
eating.apply({ name: "james" }, ["嘿嘿嘿", "xxxx"]);
```

## 函数的重载

```ts
// 函数的重载 函数名称相同 参数不同
// type addType1 = (a1: number, a2: number) => number;
// type addType2 = (a1: string, a2: string) => string;

function add(a1: number, a2: number): number;

function add(a1: string, a2: string): string;

function add(a1: any, a2: any) {
  if (typeof a1 === "string" && typeof a2 === "string") {
    return a1.length + a2.length;
  }
  return a1 + a2;
}

console.log(add(20, 30));
console.log(add("a", "b"));

function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
  return args.length;
}

console.log(getLength("abc"));
console.log(getLength([1, 2, 3]));
```

## 类的定义

```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " eating");
  }
}

const p = new Person("why", 11);
p.eating();
```

## 类的继承

```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " eating");
  }
}

class Student extends Person {
  height: number;
  constructor(name: string, age: number, height: number) {
    super(name, age);
    this.height = height;
  }
}

const p = new Person("why", 11);
p.eating();

const stu = new Student("king", 12, 1.99);
```

## 类的多态

```ts
class Animal {
  action() {
    console.log(1);
  }
}

class Dog extends Animal {
  action() {
    console.log(2);
  }
}

class Fish extends Animal {
  action() {
    console.log(3);
  }
}

// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}

makeActions([new Dog(), new Fish()]);
```

## 成员修饰符 private

```ts
// 默认public 任何地方可用
// private 私有的 只有同一类中可访问
class Person {
  name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  getAge() {
    // 类内部访问
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}

const p = new Person("king", 12);

console.log(p.name); // king
// console.log(p.age); // 属性“age”为私有属性，只能在类“Person”中访问。

console.log(p.getAge());
```

## 成员修饰符 protected

```ts
// 默认public 任何地方可用
// protected 私有的 只有类内部及子类中可访问
class Person {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  getAge() {
    // 类内部访问
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  getName() {
    return this.name;
  }
}

const p = new Person("king", 12);

// console.log(p.name); //
// console.log(p.age); // 属性“age”受保护，只能在类“Person”及其子类中访问。

console.log(p.getAge());

const stu = new Student("xxz", 19);
// console.log(stu.name); // 属性“name”受保护，只能在类“Person”及其子类中访问。

console.log(stu.getName());
```

## 成员修饰符 readonly

```ts
class Person {
  // 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改
  // 2.属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
  readonly name: string;
  age?: number;
  readonly friend?: Person;
  constructor(name: string, friend?: Person) {
    this.name = name;
    this.friend = friend;
  }
}

const p = new Person("why", new Person("kobe"));
console.log(p.name);
console.log(p.friend);

// 不可以直接修改friend
// p.friend = new Person("james")
if (p.friend) {
  p.friend.age = 30;
}

// p.name = "123"
```

## getter setter

```ts
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const p = new Person("why");
p.name = "code";
console.log(p.name);
```

## 类的静态成员 static

```ts
class Student {
  static time: string = "20:00";

  static attendClass() {
    console.log("去学习~");
  }
}

console.log(Student.time);
Student.attendClass();
```

## 抽象类 abstract

```ts
function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象类不能被实例化
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea() {
    return this.r * this.r * 3.14;
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));
// makeArea(new Shape())

// makeArea(123)
// makeArea("123")
```

## 类的类型

```ts
class Person {
  name: string;
  eating() {}
}

const p = new Person();

const p1: Person = {
  name: "sss",
  eating() {},
};

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson({ name: "xxxx", eating() {} });
```

## 声明对象类型

```ts
type infoType = {
  name: string;
  age: number;
};

const info: infoType = {
  name: "why",
  age: 19,
};

interface IInfoType {
  readonly name: string;
  age?: number;
}

const info1: IInfoType = {
  name: "king",
};
```

## 索引类型

```ts
interface IIndexLanugeage {
  [index: number]: string;
}

const frontLanguage: IIndexLanugeage = {
  0: "js",
  1: "html",
  2: "css",
};

interface ILanguageYear {
  [name: string]: number;
}

const languageYear: ILanguageYear = {
  C: 1972,
  Java: 1995,
  JavaScript: 1996,
  TypeScript: 2014,
};
```

## 函数类型

```ts
interface ICalcFn {
  (n1: number, n2: number): number;
}

function calc(n1: number, n2: number, calcFn: ICalcFn) {
  return calcFn(n1, n2);
}

const add: ICalcFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(calc(1, 2, add));
```

## 接口的继承

```ts
interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

interface IAction extends ISwim, IFly {}

const ani: IAction = {
  swimming() {},
  flying() {},
};
```

## 交叉类型

```ts
// 一种组合类型的方式: 联合类型
type WhyType = number | string;
type Direction = "left" | "right" | "center";

type AA = string | number;
type BB = string | boolean;
type CC = AA & BB;

// 同时满足AA 和 BB
// 那么CC是string类型

// 另一种组合类型的方式: 交叉类型
//  WType 只能为never 类型
type WType = number & string;

interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  flying() {},
};

const obj2: MyType2 = {
  swimming() {},
  flying() {},
};
```

## 接口的实现

```ts
interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

interface IAction extends ISwim, IFly {}

class Animal {}

class Fish extends Animal implements IAction {
  swimming: () => {};
  flying: () => void;
}

function swimAction(swimable: ISwim) {
  swimable.swimming();
}

swimAction({ swimming: function () {} });
swimAction(new Fish());
```

## interface 和 type 的区别

```ts
// interface IFoo {
//   name: string
// }

// interface IFoo {
//   age: number
// }

// const foo: IFoo = {
//   name: "why",
//   age: 18
// }

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// interface Window {
//   age: number
// }
// window.age = 19
// console.log(window.age)

// type IBar = {
//   name: string
//   age: number
// }

// type IBar = {
// }

interface IPerson {}
```

## 字面量复值

```ts
interface IPerson {
  name: string;
  age: number;
  height: number;
}

// const info = {
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// }

// // freshness擦除
// const p: IPerson = info

// console.log(info)
// console.log(p)

function printInfo(person: IPerson) {
  console.log(person);
}

// 代码会报错
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// })

const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市",
};

printInfo(info);
```

## 枚举类型

```ts
// type Direction = "left" | "Right" | "Top" | "Bottom"

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左");
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右");
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上");
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下");
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);

console.log(Direction.BOTTOM); // 3

// ----------------------------------------------------------------------

// type Direction = "left" | "Right" | "Top" | "Bottom"

enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

let name: string = "abc";
let d: Direction = Direction.BOTTOM;

function turnDirection(direction: Direction) {
  console.log(direction);
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左");
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右");
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上");
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下");
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);
```

## 泛型

```ts
// 类型的参数化

// 在定义这个函数时, 我不决定这些参数的类型
// 而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型
function sum<Type>(num: Type): Type {
  return num;
}

// 1.调用方式一: 明确的传入类型
sum<number>(20);
sum<{ name: string }>({ name: "why" });
sum<any[]>(["abc"]);

// 2.调用方式二: 类型推到
sum(50);
sum("abc");
```

## 泛型接收参数类型

```ts
function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {}

foo<number, string, boolean>(10, "abc", true);
```

## 泛型接口

```ts
interface IPerson<T> {
  name: T;
}

const p: IPerson<string> = {
  name: "why",
};

interface IStudent<T = string> {
  name: T;
}

const stu: IStudent = {
  name: "why",
};
```

## 泛型类

```ts
class Point<T> {
  x: T;
  y: T;
  z: T;
  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p1 = new Point(1, 2, 3);

const p2: Point<string> = new Point("1", "2", "3");
const p3 = new Point<string>("1", "2", "3");
```

## 泛型的类型约束

```ts
interface ILength {
  length: number;
}

function getLength<T extends ILength>(n: T) {
  console.log(n.length);
}

getLength("abc");
getLength([1, 2, 3, 4]);
getLength({ length: 6 });
```

## 非空判断运算符 ??

```ts
const flag = "" ?? true;
console.log(flag); // ""
```

## 命名空间

```ts
namespace time {
  export function format(time: string) {
    return "2022-10-01";
  }
}

namespace price {
  export function format(price: number) {
    return 11.23;
  }
}

console.log(time.format("222"));
console.log(price.format(222));

// 不推荐使用
```

## .d.ts 文件

```ts
// 声明模块
declare module "lodash" {
  export function join(arr: any[]): void;
}

// 声明变量/函数/类
declare let whyName: string;
declare let whyAge: number;
declare let whyHeight: number;

declare function whyFoo(): void;

declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number);
}

// 声明文件
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.gif";

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any;
}
```
