// 泛型
// 泛型 可以用来创建可重用的组件，使组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型。

function identity<T>(arg: T): T {   // <T> 类型变量
  return arg;
}
let output = identity<string>("myString")
let output1 = identity("myString") // 类型推论 -- 编译器会根据传入的参数自动地帮助我们确定T的类型



// 创建泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
function loggingIdentityArr<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}


// 泛型函数的类型
function identity1<T>(arg: T): T {
  return arg;
}
let myIdentity1: <T>(arg: T) => T = identity1;


//  泛型借口
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity2: GenericIdentityFn = identity2;

//  泛型借口2
interface GenericIdentityFn1<T> {
  (arg: T): T;
}


// 泛型约束
interface Lengthwise {
  length: number;
}
// 约束泛型T必须有length属性
function logging<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 泛型有了约束之后就不再使用任何类型


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let xx = { a: 1, b: 2, c: 3, d: 4 };

getProperty(xx, "a"); // okay
// getProperty(xx, "m"); // error




// 范型类
class Queue <T> {
  private list:T[] = [];
  push(item:T){
    this.list.push(item)
  }
  shift(): T | undefined {
    return this.list.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.shift()?.toFixed())


const queue1= new Queue<string>()
queue1.push('name')
console.log(queue1.shift()?.length)