let user1 = {
    name: "user A",
    age: 30
};

let user2 = { flag: true, name: "user B" };


for (let data in user1) {
    // console.log(user1[data]);// user A
    // console.log(user2[data]);// undefined
    // user1[data] = user2[data]; // 先写要拷贝的对象,创建写入的空间
    user2[data] = user1[data];
    // console.log(user2[data]);// user A -> 会被拷贝的对象覆盖
}

let user = Object.assign({}, user1, user2)//将对象的属性全部拷贝到 user name: "user A"会覆盖
console.log(user)

// 但是当我们需要一个全新的对象时，则需要使用深拷贝