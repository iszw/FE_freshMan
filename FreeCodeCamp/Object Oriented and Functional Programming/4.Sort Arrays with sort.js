var array = [1, 21, 12, 2];

array.sort(function(a, b) {
  return b - a;
}); // 将数组元素从大到小排序

console.log(array); //[ 21, 12, 2, 1 ]

// sort() 方法将改变原数组，返回被排序后的数组。

// sort() 可以把比较函数作为参数传入。比较函数有返回值，当 a 小于 b，返回一个负数；当 a 大于 b ，返回一个正数；相等时返回0。

// 如果没有传入比较函数，它将把值全部转成字符串，并按照字母顺序进行排序。