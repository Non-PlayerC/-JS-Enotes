# 现代-JS-Enotes
重新学习 JS 的笔记(个人向)

[学习内容来自](https://zh.javascript.info/)

let n = 10;
bugin:// 标签是无法输出的
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue bugin
    }
    console.log(i)
}


// 函数的构造