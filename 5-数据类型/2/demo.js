// //  字符大小写
// let str1 = 'As sly as a fox, as strong as an ox';
// // console.log(str1.toLowerCase());
// // console.log(str1.toUpperCase());
// // change this text
// // CHANGE THIS TEXT

// // console.log(str1.indexOf('a'));
// //! 如果找到会返回下标值，无则返回- 1
// //' .indexof(,n);   从 n 开始检索
// // let flage = true;
// // let add = 0;
// // while (flage) {
// //     let text_tag = str1.indexOf('as', add);
// //     (text_tag == -1) ? flage = false : console.log(text_tag);
// //     add = text_tag + 1;
// // }

// // let sear = 'as';
// // let add = -1;
// // while ((add = str1.indexOf(sear, add + 1)) != -1) {
// //     console.log(add)
// // }


// let str = "stringify";
// let str2 = "abcdef";
// // console.log(~str2.indexOf('g'));// 0
// if (~str2.indexOf('a')) console.log("can");// 如果字符串 str2 中有 'a' 则输出 can

// console.log(str2.slice(0, 3));//  abc
// console.log(str.slice(-4, -3));//  g



// // 从右边的第四个位置开始，在右边的第一个位置结束
// console.log(str.slice(-4, -1)); // 'gif' 从右边的第四个位置开始，在右边的第一个位置结束 start<end


// ============>
// ucFirst("john") == "John";

// function ucFirst(str) {
//     let out = str[0].toUpperCase() + str.slice(1)
//     console.log(out)
// }





// ===========>
// checkSpam('buy ViAgRA now') //== true
// checkSpam('free xxxxx') //== true
// checkSpam("innocent rabbit") //== false

// function checkSpam(str) {
//     let low_text = str.toLowerCase();
//     // includes 返回 booleam 值
//     console.log(low_text.includes('viagra') || low_text.includes('xxx'))
// }


// ==============>
// truncate("What I'd like to tell on this topic is:", 20) //= "What I'd like to te…"

// truncate("Hi everyone!", 20) //= "Hi everyone!"


// function truncate(str, num) {
//     // 当 str 比 num要长的时候要进行截断,不然就返回原数据
//     console.log((str.length > num) ? str.slice(0, num - 1) + '...' : str);
//     // length 是原始属性的属性无法调用
// }

// =========>
extractCurrencyValue('$120') === 120; // true

function extractCurrencyValue(str) {
    console.log(str.slice(1))
}



console.log(`
    真
    的
    可
    以
    直
    接
    瑟瑟瑟瑟瑟瑟
`);
