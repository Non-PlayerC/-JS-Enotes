// let array1 = ["1", "2", '3'];
// // console.log(array1[2]);
// // console.log(array1.length);
// array1[3] = "2.5";
// // console.log(array1.length);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);


// let arr = ['apple', { name: 'John' }, true, function () { console.log("hello"); }]

// arr[3]();// 执行索引为 3 的函数
// arr.at(-1)();// 负数索引，倒数
// arr.pop()();// 取出并返回最后一个元素


// arr.push("end element");// 添加至数组的末端
// console.log(arr.at(-1));

// //取出数组的第一个元素并返回
// console.log(arr.shift());
// arr.unshift("one", "two");
// console.log(arr)


// ======>
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// // styles[(styles.length - 1) / 2] = "Classics"; //Math.floor() 函数总是返回小于等于一个给定数字的最大整数。

// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// console.log(styles.shift());// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// styles.unshift("Rap", "Reggae");
// console.log(styles);
// // console.log(Math.floor(2.5));// -> 2


// ======>
// let arr = ["a", "b"];
// arr.push(function () {
//     console.log(this)
// })

// arr[2]();
// //[ 'a', 'b', [Function (anonymous)] ]




// ===========>
//! 获取最大的连续数

function getMax(arr) {
    // 定义一个储存值的数和一个累加值的数
    let max = 0;
    let add = 0;
    for (let item of arr) {
        add += item;
        max = Math.max(max, add);
        if (add < 0) add = 0;
    }
    return max;
}

console.log(getMax([-1, 2, 3, -6]));