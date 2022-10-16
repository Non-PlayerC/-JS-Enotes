// function User(name) {
//     // this = {}; //隐式创建
//     console.log("create User");
//     this.name = name;
//     this.isAdmin = false;

//     // return this;
// }

// User();
// new User();


// =========================>
// function user(name) {
//     if (!new.target) {
//         return "**&^^HHHJUIJ"
//     }
//     this.name = name
// }
// let aim = user("aim");
// let john = new user("john");
// console.log(john.name)// john
// console.log(aim.name)// undefined

// console.log(john);// user { name: 'john' }
// console.log(aim)// &^^HHHJUIJ



// ===============>
// 填写"TO DO"处的内容让下面代码支持 a.name = "name1"; b.name = "name2";

// function Obj(name) {
//     // TO DO
// }
// obj. /* TO DO */ = "name2";
// var a = Obj("name1");
// var b = new Obj;





// ======================>
// function obj1(name) {
//     this.name = name
// }
// // let a = obj1("user A");// 没有 new 的情况下不会返回 this  a 处在未定义的状态
// let a = new obj1("user A");
// console.log(a);// obj1 { name: 'user A' } 隐式的返回了 this



// =======================>

// function user() {
//     this.name = "John";
// }

// console.log(new user().name)


// =======================>

// function A() {
//     return obj
// }
// function B() {
//     return obj
// }
// let obj = {};
// let a = new A;
// let b = new B;
// console.log(a == b); // true



// ===================>


function Calculator() {
    this.result = 0;
    this.read = function () {
        this.x = prompt("请输入 x", null)
        this.y = prompt("请输入 y", null)
    }
    this.sum = "这是个函数";
    this.sum = function () {
        this.result = this.x + this.y
        return this
    }
    this.mul = function () {
        this.result = this.x + this.y
        return this
    }
    this.show = function () {
        alert("最后运算的结果是 :" + this.result)
    }
}

let calculator = new Calculator();

alert(calculator.sum)

calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


