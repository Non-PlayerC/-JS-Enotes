// let user = {
//     name: "John"
// }
// let user1 = user;
// user = null; // 当 user 为空时地址仍然拷贝在 user1 当中
// console.log(user1.name)



// ======================================> 垃圾回收
let family = marry({ name: "老公" }, { name: "老婆" })
function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;

    return {
        father: man,
        mother: woman
    }
}
console.log(family)
// {
//     father: <ref *1> {
//       name: '老公',
//       wife: { name: '老婆', husband: [Circular *1] }
//     },
//     mother: <ref *2> {
//       name: '老婆',
//       husband: <ref *1> { name: '老公', wife: [Circular *2] }
//     }
// }

// 而当某个属性不可达(没有其他的指向该属性)比如 father
// ==> 
delete family.father;
delete mother.husband;
// ==> 没有属性指向 father 时，father 将从内存删除