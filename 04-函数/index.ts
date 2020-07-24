// 函数
// 有名函数
function myAdd(x: number, y: number): number {
  return x + y;
}
// 匿名函数
let myAdd1 = function(x: number, y: number): number { return x + y; }

// 完整函数类型
// 函数类型包含两部分：参数类型和返回值类型。
let myAllAdd: (baseValue: number, increment: number) => number =
function(x: number, y: number): number { return x + y; }

// 推断类型
let myAllAdd1: (baseValue: number, increment: number) => number =
function(x, y) { return x + y; }; // ts编译器会自动识别x和y的类型为number

// 可选参数和默认参数
// 可选参数必须跟在必须参数后面。
function buildName(firstName: string, lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}
function buildName1(firstName: string, lastName: string = "Smith") {
  return firstName + " " + lastName;
}

// 剩余参数
// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
function playName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = playName("Joseph", "Samuel", "Lucas", "MacKinzie");