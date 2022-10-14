// let call, admin;
// call = "John";
// // name = admin;
// // console.log(admin)
// admin = call;
// console.log(admin);


let name = "Ilya";

console.log(`hello ${1}`); // ?

console.log(`hello ${"name"}`); // ?

console.log(`hello ${name}`); // ?

const bigInt = 1n;
console.log(typeof bigInt);// bigInt --> BigInt 可以表示任意大的整数。大于所有的 Number 类型数
console.log(typeof Object(1n) === 'object');// true
console.log("bifInt:" + typeof 1n === 'bigint');
console.log("bifInt:" + typeof BigInt('1') === 'bigint');