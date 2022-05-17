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
