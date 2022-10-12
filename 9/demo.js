let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
    case b + 2:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;// 两个 case 显示相同的信息

    // case 严格要求数据的类型 prompt 中返回的字符类型需要设置 case 也为字符类型才能进行比较(或者 +prompt)
    default:
        console.log("this doesn't run");
}