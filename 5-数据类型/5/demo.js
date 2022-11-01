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

function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('')
}
console.log(camelize("background-color")) //== 'backgroundColor';
console.log(camelize("list-style-image")) // == 'listStyleImage';
console.log(camelize("-webkit-transition")) // == 'WebkitTransition';;