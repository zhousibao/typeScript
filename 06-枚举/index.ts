// 枚举

// 数字枚举 
enum Direction {
  Up = 1, // 初始化器
  Down,
  Left,
  Right
}
// 我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 即 Down为 2， Left为 3， Right为 4。

// 不使用初始化器
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
// Up的值为 0， Down的值为 1等等

enum Direction11 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right = 1, // 1
  top, // 2
}
console.log(Direction11[1]) // 'Right' // 后面会替换前面的

// 字符串枚举 
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}



// 异构枚举  枚举可以混合字符串和数字成员
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}



// 反向映射
// 数字枚举成员具有反向映射
// 字符串枚举成员没有反向映射
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a];


