// "use strict";
// let num = ["1", "2", "3", "4"];
// // num.splice(1, 2, "2.5", "3.5");// 从索引 1 开始删除 2 个元素 并替换他们

// // num.splice(1, 0, "1.1", "1.2", "1.3");// 直接插入不删除元素

// // num.splice(-1, 0, 5, 6); //倒序插入
// // console.log(num);


// // console.log(num.slice(3, 4));// 获取副本,不影响原始数组的转换

// // //数组合并

// let arr = [1, 2];

// let arrayLike = {
//     0: "something",
//     1: "else",
//     length: 2
// };

// console.log(arr.concat(arrayLike)); // 1,2,something,else
// // [ 1, 2, { '0': 'something', '1': 'else', length: 2 } ]
// // 添加元素时无法合并对象中的元素，除非设置 [Symbol.isConcatSpreadable]: true,





// forEach 方法为每个元素都进行一个函数
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
    // item 遍历的每个元素
    // index 对应的下标值
    // array 返回总的数组
});
