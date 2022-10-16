// let user = {
//     sai() {
//         console.log("hello")
//     }
// }

// // console.log(user?.address);// undefined
// // delete user?.sai
// // console.log(user?.sai);//undefined

// user.sai?.()


// =========================>

// let age = Symbol(26); //所有的 symbol 都是不同的，即使它们有相同的名字
// let user = {
//     name: "John",
//     [age]: "男孩子的年龄是密码"
// }

// for (let key in user) console.log(key); // name
// // Object.assign 会复制对象的字符串和 Symbol
// console.log(user[age]);// 男孩子的年龄是密码


// // 不同部分想要访问的 symbol "id" 指的是完全相同的属性。
// let id = Symbol.for("唯一 id");// 按名字返回一个 Symbol
// // let id2 = Symbol.for("唯一 id");
// // console.log(id === id2);// true

// //通过 Symbol 获取 name
// console.log(Symbol.keyFor(id))


// ======>
// var a = { value: 0 };
// a[Symbol.toPrimitive] = function (hint) {
//     console.log(hint); // default
//     return this.value += 1;
// }
// console.log(a == 1 && a == 2 && a == 3); // true


// var a = { value: 0 };
// a.valueOf = function () {
//     return this.value += 1;
// };
// console.log(a == 1 && a == 2 && a == 3); // true


// var a = { value: 0 };
// a.toString = function () {// 默认调用对象的 toString() 方法进行转换
//     return this.value += 1;
// };
// console.log(a == 1 && a == 2 && a == 3); // true

// 转换算法是：

// 调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在，
// 否则，如果 hint 是 "string"
// 尝试调用 obj.toString() 或 obj.valueOf()，无论哪个存在。
// 否则，如果 hint 是 "number" 或者 "default"
// 尝试调用 obj.valueOf() 或 obj.toString()，无论哪个存在。

// let user = {
//     name: "John",
//     money: 1000,

//     // 对于 hint="string"
//     toString() {
//         return `{name: "${this.name}"}`;
//     },

//     // 对于 hint="number" 或 "default"
//     valueOf() {
//         return this.money;
//     }

// };

// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500


//====> 实现 (a == 1 && a==2 && a==3)

// let a = { value: 0 };
// a.toString = function () {
//     return this.value += 1;
// }

// console.log(a == 1 && a == 2 && a == 3);




// ==============>

let user1 = {
    name: "user1",
    sai() {
        console.log("hello user1");
    }
}

function user2() {
    this.name = "user2";
    this.sai = function () {
        console.log("hello user2")
    }
}

user1.sai();
let user3 = new user2();
user3.sai();