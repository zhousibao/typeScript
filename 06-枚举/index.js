// 枚举
// 数字枚举 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// 我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 即 Down为 2， Left为 3， Right为 4。
// 不使用初始化器
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// Up的值为 0， Down的值为 1等等
var Direction11;
(function (Direction11) {
    Direction11[Direction11["Up"] = 0] = "Up";
    Direction11[Direction11["Down"] = 1] = "Down";
    Direction11[Direction11["Left"] = 2] = "Left";
    Direction11[Direction11["Right"] = 1] = "Right";
    Direction11[Direction11["top"] = 2] = "top";
})(Direction11 || (Direction11 = {}));
console.log(Direction11[1]); // 'Right' // 后面会替换前面的
// 字符串枚举 
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// 异构枚举  枚举可以混合字符串和数字成员
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// 反向映射
// 数字枚举成员具有反向映射
// 字符串枚举成员没有反向映射
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a];
