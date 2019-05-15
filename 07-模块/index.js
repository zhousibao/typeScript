"use strict";
// 模块
//  “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”。
// 模块使用模块加载器去导入其它的模块。
// 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。
// 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
// TypeScript里，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的。
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
// 导出语句
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
// 重新导出
// 重新导出功能并不会在当前模块导入那个模块或定义一个新的局部变量。
var export_3 = require("./export");
exports.RegExpBasedZipCodeValidator = export_3.export_1;
__export(require("./export"));
// 默认导出
// 每个模块都可以有一个default导出。并且一个模块只能够有一个default导出。
// 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
var aaaa = 'aaa';
exports["default"] = aaaa;
// 导入
var export_4 = require("./export");
var imp1 = export_4.export_1;
var export_5 = require("./export");
var imp2 = export_5.export_2;
var obj = require("./export");
var imp3 = obj.export_2;
// export =  和 import = require()
// CommonJS和AMD的环境里都有一个exports变量，这个变量包含了一个模块的所有导出内容。
// 若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
var zip = require("./export1");
console.log(zip);
