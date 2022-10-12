// // console.log("typeOf: " + typeof ("6" / "2"));// -> number

// // let a = 5;//const 是不变常数
// // console.log(a++);
// // // a++ 实际上是 return a的旧值5
// // console.log(a);//a 已经自增


// // 严格比较 == 和 ===
// // == 会将要比较的值变成数字型进行比较
// console.log(0 == false);// ture
// console.log('' == false);// ture
// console.log('' === false);// === 会比较数据的类型 false

// console.log(Number(undefined));// NaN
// console.log(Number(null));// 0
// console.log(undefined == null);//true  undefined只与null == 相等,只有它们不会进行任何的转换
// //! undefined 不该与任何值比较
// console.log(Number(undefined) == Number(null));// false

// console.log("======================");
// console.log("2" > "12");// 比较首位字符 2>1
// console.log(null == "\n0\n");// false -> null 只与 undefined 相等
// console.log(null === +"\n0\n");// false 严格不相等


console.log('' == 0);// true
console.log('  ' == 0);// true
console.log(' 2 ' == 0);// false