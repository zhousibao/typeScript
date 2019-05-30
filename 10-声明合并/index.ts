// “声明合并”是指编译器将针对同一个名字的两个独立声明合并为单一声明。 合并后的声明同时拥有原先两个声明的特性。
// 任何数量的声明都可被合并；不局限于两个声明。
// TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值。 

// 创建命名空间的声明会新建一个命名空间，它包含了用（.）符号来访问时使用的名字。
// 创建类型的声明是：用声明的模型创建一个类型并绑定到给定的名字上。 
// 创建值的声明会创建在JavaScript输出中看到的值。


// 接口合并
// 接口的非函数的成员应该是唯一的。如果它们不是唯一的，那么它们必须是相同的类型。如果两个接口中同时声明了同名的非函数成员且它们的类型不同，则编译器会报错。
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = {height: 5, width: 6, scale: 10};

// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 后面接口的函数成员具有更高的优先级。
// 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。
interface Sheep1 {
  name: string
}
interface Sheep2 {
  name: string
}
interface Sheep3 {
  name: string
}

interface Cloner {
  clone(animal: Sheep1): Sheep1;
}
interface Cloner {
  clone(animal: Sheep2): Sheep2;
  clone(animal: Sheep3): Sheep3;
}
interface Cloner {
  clone(animal: Sheep2): Sheep2;
  clone(animal: Sheep3): Sheep3;
  clone(animal: Sheep1): Sheep1;
}



// 合并命名空间
// 对于命名空间的合并，模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口。
namespace Animals {
  export class Sheep1 { }
}

namespace Animals {
  export interface Legged { numberOfLegs: number; }
  export class Sheep2 { }
}

// 等于
// namespace Animals {
//   export interface Legged { numberOfLegs: number; }

//   export class Sheep1 { }
//   export class Sheep2 { }
// }

// 非导出成员仅在其原有的（合并前的）命名空间内可见。