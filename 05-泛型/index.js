// 泛型
// 泛型 可以用来创建可重用的组件，使组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型。
function identity(arg) {
    return arg;
}
var output = identity("myString");
var output1 = identity("myString"); // 类型推论 -- 编译器会根据传入的参数自动地帮助我们确定T的类型
// 创建泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型
function loggingIdentity(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentityArr(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// 泛型函数的类型
function identity1(arg) {
    return arg;
}
var myIdentity1 = identity1;
function identity2(arg) {
    return arg;
}
var myIdentity2 = identity2;
// 约束泛型T必须有length属性
function logging(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型有了约束之后就不再使用任何类型
