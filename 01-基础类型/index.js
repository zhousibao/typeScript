// 布尔值
var isDone = false;
// 数字
// 和JavaScript一样，TypeScript里的所有数字都是浮点数。
var decLi = 6;
// 字符串
var fullname = 'bob';
var sentence = "Hello, my name is " + fullname + ".";
console.log(sentence);
// 数组
var list = [1, 2, 3];
var list1 = [1, 2, 3];
var list2 = ['1', '2', '3'];
var list3 = [1, 2, '3'];
// 元组Tuple: 表示一个已知元素数量和类型的数组
var x = ['hello', 10]; // 且顺序一一对应
// 枚举: enum类型是对JavaScript标准数据类型的一个补充。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c); // 显示1,因为Color.Green = 1
console.log(colorName); // 显示'Blue',因为上面代码里它的值是2
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// Void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable = undefined;
// Null 和 Undefined 
// undefined和null两者各自有自己的类型分别叫做undefined和null。
var u = undefined;
var n = null;
// 在 --strictNullChecks = false （不严格null模式） 的情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。即：let num: number = u
// Never
// never类型表示的是那些永不存在的值的类型。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 类型断言
var someValue = "this is a string";
// “尖括号”语法：
var strLength = someValue.length;
// as语法
var strLength1 = someValue.length;
