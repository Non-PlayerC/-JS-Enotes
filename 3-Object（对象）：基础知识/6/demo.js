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

// let age = Symbol(26);/所有的 symbol 都是不同的，即使它们有相同的名字
let user = {
    name: "John",
    [age]: "男孩子的年龄是密码"
}

for (let key in user) console.log(key); // name
// Object.assign 会复制对象的字符串和 Symbol
console.log(user[age]);// 男孩子的年龄是密码


// 不同部分想要访问的 symbol "id" 指的是完全相同的属性。
let id = Symbol.for("唯一 id");// 按名字返回一个 Symbol
// let id2 = Symbol.for("唯一 id");
// console.log(id === id2);// true

//通过 Symbol 获取 name
console.log(Symbol.keyFor(id))