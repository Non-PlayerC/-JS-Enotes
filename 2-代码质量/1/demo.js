function hello(name) {
    let phrase = `HELLO ${name}`;

    // debugger; //断点
    // F8 继续执行
    say(phrase);
}

function say(data) {
    alert(`** ${data} **`)
}

hello("jame")
