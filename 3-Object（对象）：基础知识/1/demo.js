// let user = new Object();
// // ==>
// let user = {}

// let user = {
//     value: "key is null"
// }

// user["fuck you"] = "sorry";

// console.log(user["fuck you"])// 字符类型的 key 不能使用 . 的方法获取其属性


// let fruit = prompt("place input data: ", apple);
// let bag = {
//     [fruit]: 5
// }
// alert(bag.apple)


// let user = {
//     name: "user",
//     like: '',
//     test: undefined,
//     "23": "代码 23",
//     "33": "代码 33",
//     "8": "代码 8",
//     "+1": "USA"
// };
// console.log("like" in user);// true 使用 in 查询时应该使用字符类型

// console.log(user.test);// undefined
// console.log("test" in user)//true 当属性存在但是为 unfefined 时，无法使用 undefined 进行测试

// console.log(typeof user.like);// string

// for (let key in user) {// 遍历循环没有值的时候返回 flase
//     // console.log(key)// 对于 数字字符的输入时会自动进行排比 ("+40",和"1.2"这种无法直接转换整数的是不行的)
//     console.log(+key);// +key 会将属性有 + 的按字符进行排序,转换成字符，但是无法识别字符类型了 NaN
//     // 不是整数会按原来顺序进行排序
//     //     8 23 33 name like test
//     //+    8 23 33 NAN NAN NAN 1
// }



// ==========================>

// let user = {}
// user.add = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name

// ===========================>

// let schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

// function isEmpty() {
//     console.log("start");
//     if (1) {
//         for (let i = 0; i < 3; i++) {
//             if (i = 2) {
//                 return true//函数中只要 return 了就会停止并返回，函数结束
//             }
//         }
//         console.log("第一层");
//     }
// }
// (isEmpty()) ? console.log("yes") : console.log("no");



// for (let i in schedule) {
//     return false// return 直接退出该函数

// }
// return true
// }

// =====================================>
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = '';// hh 如果是 '' 100160130
// console.log(typeof sum)
// for (let i in salaries) {
//     sum += salaries[i]
// }
// console.log(sum);


// ===================================>

// 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// 调用函数之后
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        (typeof menu[key] == "number") ? menu[key] *= 2 : null
        console.log(menu[key]);
        // 400
        // 600
        // My menu
    }
}