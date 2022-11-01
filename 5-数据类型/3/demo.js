// let array1 = ["1", "2", '3'];
// // console.log(array1[2]);
// // console.log(array1.length);
// array1[3] = "2.5";
// // console.log(array1.length);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);


let arr = ['apple', { name: 'John' }, true, function () { console.log("hello"); }]

arr[3]();// 执行索引为 3 的函数
arr.at(-1)();// 负数索引，倒数
arr.pop()();// 取出并返回最后一个元素


arr.push("end element");
console.log(arr.at(-1));