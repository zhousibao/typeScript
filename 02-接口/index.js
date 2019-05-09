"use strict";
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = {
    label: 'size 10',
    size: 10
};
printLabel(myObj);
function createSquare(config) {
    // { color: string; area: number } 指函数返回值的类型
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "red", width: 100 });
var p1 = { x: 10, y: 20 };
var mySearch;
mySearch = function (src, subString) {
    var result = src.search(subString);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var myDictionary;
myDictionary = {
    "age": '177',
    'name': 'zhangsan'
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
