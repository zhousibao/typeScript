// 函数
// 有名函数
function myAdd(x, y) {
    return x + y;
}
// 匿名函数
var myAdd1 = function (x, y) { return x + y; };
// 完整函数类型
// 函数类型包含两部分：参数类型和返回值类型。
var myAllAdd = function (x, y) { return x + y; };
// 推断类型
var myAllAdd1 = function (x, y) { return x + y; }; // ts编译器会自动识别x和y的类型为number
// 可选参数和默认参数
// 可选参数必须跟在必须参数后面。
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var allName = buildName1("bob", undefined);
console.log(allName);
