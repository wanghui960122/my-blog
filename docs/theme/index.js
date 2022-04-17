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
