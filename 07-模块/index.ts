// 模块
//  “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”。
// 模块使用模块加载器去导入其它的模块。
// 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。
// 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
// TypeScript里。任何包含顶级import或者export的文件都被当成一个模块。
// TypeScript里，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的。



// 导出
// 导出声明
export interface StringValidator {
  isAcceptable(s: string): boolean;
}

// 导出语句
const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };


// 重新导出
// 重新导出功能并不会在当前模块导入那个模块或定义一个新的局部变量。
export {export_1 as RegExpBasedZipCodeValidator} from "./export";
export * from "./export";

// 默认导出
// 每个模块都可以有一个default导出。并且一个模块只能够有一个default导出。
// 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
const aaaa = 'aaa'
export default aaaa;





// 导入
import  { export_1 } from "./export";
const imp1 = export_1
import  { export_2 as im } from "./export";
const imp2 = im
import  * as obj from "./export";
const imp3 = obj.export_2



// 具有副作用的导入
import "./my-module"
console.log(imp2)



// export =  和 import = require()
// CommonJS和AMD的环境里都有一个exports变量，这个变量包含了一个模块的所有导出内容。
// 若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
import zip = require("./export1");
console.log(zip)