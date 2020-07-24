// 布尔值
let isDone: boolean = false

// 数字 : JavaScript一样，TypeScript里的所有数字都是浮点数。
let decLi: number = 6

// 字符串
let name: string = 'bob'
let sentence: string = `Hello, my name is ${ name }`

// 数组
let list: number[] = [1,2,3]
let list1: Array<number> = [1,2,3]
let list2: Array<string> = ['1','2','3']
let list3: Array<any> = [1,2,'3'] 

// 元组Tuple: 表示一个已知元素数量和类型的数组
let x: [string, number] = ['hello', 10]; // 且顺序一一对应

// 枚举: enum类型是对JavaScript标准数据类型的一个补充。
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(c);  // 显示1,因为Color.Green = 1
console.log(colorName);  // 显示'Blue',因为上面代码里它的值是2


// Any
let notSure: any = 4;
notSure = "maybe a string instead"
notSure = false
notSure

// Void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
  console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined

// Null 和 Undefined 
// undefined 和null 两者各自有自己的类型分别叫做undefined和null。
let u: undefined = undefined;
let n: null = null;
// 在 --strictNullChecks = false （不严格null模式） 的情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。即：let num: number = u


// Never
// never类型表示的是那些永不存在的值的类型。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}


// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;


// 类型断言
let someValue: any = "this is a string";
// “尖括号”语法：
let strLength: number = (<string>someValue).length;
// as语法
let strLength1: number = (someValue as string).length;



// 联合类型
let someval: number | string | boolean = 1
someval = 'smoeval'


// 其他类型
function test (){
  console.log(arguments)
  let arg:IArguments = arguments
  let htmlCollection: HTMLCollection
  let nodeList: NodeList
}


// 存在 export 会认为模块文件，否者是全局定义
export {};