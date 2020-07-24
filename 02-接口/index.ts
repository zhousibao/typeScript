// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
// 它有时被称做“鸭式辨型法”或“结构性子类型化”
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// interface 用于定义接口
interface LabelValue {
  label: String
}
function printLabel(labelObj: LabelValue){
  console.log(labelObj.label)
}
let myObj = {
  label: 'size 10',
  size: 10
}
printLabel(myObj)


// 可选属性，属性名称后添加？
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // { color: string; area: number } 指函数返回值的类型
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "red", width: 100 });



// 只读属性，属性名称前添加readonly 
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
 // error  p1.x = 5;


// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用 const，若做为属性则使用readonly。


interface LabelledValue {
  like: ReadonlyArray<number>; // 确保数组创建后再也不能被修改。
}
let ra:LabelledValue = {'like': [1,2,3]}
// ra.like.length = 5 // 报错了
// ra.like[0] = 5 // 报错了



// 额外的属性检查
interface SquareConfig1 {
  color?: string;
  width?: number;
  [propName: string]: any;
}



// 函数类型
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, subString: string) {
  let result = src.search(subString);
  return result > -1;
}



// 可索引的类型
// TypeScript支持两种索引签名：字符串和数字。
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

interface NumberDictionary  {
  [index: string]: string;
  name: string
}
let myDictionary: NumberDictionary ;
myDictionary = {
  "age":'177',
  'name':'zhangsan'
};



// 类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h?: number, m?: number) {
    this.currentTime = new Date()
  }
}



// 接口的继承
// 一个接口可以继承多个接口
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;