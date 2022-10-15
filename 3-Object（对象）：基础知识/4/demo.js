// let user = {
//     name: "John",
//     age: 30
// };
// // user.sayHi(); // error  需要先声明属性才能使用

// user.sayHi = function () {
//     console.log("Hello!");
// };

// // 首先，声明函数
// function sayHi() {
//     console.log("Hello!");
// }

// // 然后将其作为一个方法添加
// user.sayHi = sayHi;

// user.sayHi(); // Hello!


//  ===================>
// 当复制变量时

// let user1 = {
//     name: "John",
//     age: 30,
// };
// let user2 = {
//     name: "Ann",
//     age: 30,
// };
// function sayhi() {
//     // console.log(user.name);// 当 user 被删除时找不到属性
//     console.log(this.name);// 使用 this 指向的是当前的对象
// }
// user1.s = sayhi;
// user2.s = sayhi;

// user1.s();// John
// user2.s();// Ann

// let admin = user;
// user = null;
// admin.sayhi();



// ==============================>
// let user = {
//     name: "name 1",
//     sayHi() {
//         name: "name 2"
//         let arrow = () => console.log(this.name)
//         arrow()
//     }
// }
// user.sayHi();// name 1

// ===========================>


// function makeUser() {
//     // return {
//     //     name: "John",
//     //     ref: this// undefined
//     // };
//     //=>
//     // return this;


//     return {
//         name: "John",
//         ref() {
//             return this// this 触发的时候获取作用域,this 是对于整个函数的
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref().name); // 结果是什么？


// ====================================>

let test = {
    name: "this is test",
    getdata() {
        return this
    },
}

console.log(test.getdata().name);// this is test
// 返回了 this 函数中的上下文