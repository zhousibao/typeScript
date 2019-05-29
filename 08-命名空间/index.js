// 内部模块 => 命名空间
// 想在命名空间外使用空间内的变量，需要使用export
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidater = /** @class */ (function () {
        function LettersOnlyValidater() {
        }
        LettersOnlyValidater.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidater;
    }());
    Validation.LettersOnlyValidater = LettersOnlyValidater;
    var ZipCodeValidater = /** @class */ (function () {
        function ZipCodeValidater() {
        }
        ZipCodeValidater.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidater;
    }());
    Validation.ZipCodeValidater = ZipCodeValidater;
})(Validation || (Validation = {}));
var strings = ['Hello', '96052', '101'];
var validaters = {};
validaters['ZIP code'] = new Validation.ZipCodeValidater();
validaters['Letters only'] = new Validation.LettersOnlyValidater();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validaters) {
        console.log("\"" + s + "\" - " + (validaters[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
// 命名空间中的内容比较多的时候可以拆分命名空间。
// 使用引用标签 /// <reference path=""/> 来告诉编译器文件之间的联系
// 例子见demo
