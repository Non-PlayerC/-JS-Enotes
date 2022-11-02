// // function somperSort(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;
// // }
// // let arr = [1, 2, 3, 5, 6];
// // arr.sort(somperSort);
// // console.log(arr);


// // let arr = [1, 2, 15, 19, 6];
// let arr = "a,b,c,d,e,f";

// // console.log(arr.sort((a, b) => a - b));// [ 1, 2, 6, 15, 19 ]

// let arr1 = arr.split(',');
// // for (let item of arr1) {
// //     console.log(item);
// // }

// //=> 将字符拆分成字符数组
// console.log(arr.split(''));//'a', ',', 'b', ',',



// ==============>

// function camelize(str) {
//     return str.split('-').map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     ).join('')
// }
// console.log(camelize("background-color")) //== 'backgroundColor';
// console.log(camelize("list-style-image")) // == 'listStyleImage';
// console.log(camelize("-webkit-transition")) // == 'WebkitTransition';


// =============>
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1（匹配值）

// console.log(arr); // 5,3,8,1（未修改）


// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }

// =====>
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        //超出范围则删除
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--
        }
    }
}