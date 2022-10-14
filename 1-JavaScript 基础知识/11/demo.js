// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function () { alert("You agreed."); },// 函数是表示一个"行为的值""
//     function () { alert("You canceled the execution."); }
// )


// let 函数声明并不会像全局的函数一样被调用
// test1();
// test2(); //这时 test2 并没有被创建

// function test1() {
//     console.log("test1 被调用了");
// }// 全局变量开始便会被创建

// let test2 = function () {
//     console.log("test2 被调用了")
// };// let a = x; 分号表示该为表达式
// test2()// test2 被调用了
// // test1();
// // test2();

"use strict";
// let test1;
// if (1) {
//     test1 = function () {// 函数表达式
//         console.log("test 被调用");
//     }
//     test1()// test被调用
//     function welcome() {     //函数声明  |
//         console.log("Hello!");       //  |  函数声明在声明它的代码块内任意位置都可用
//     }
// } else {
//     console.log("error");
// }

// test1();
// welcome();;

let test = function () {
    console.log("test 被调用");
}
test = "10";
console.log(test)// 10