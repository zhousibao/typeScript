"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public 公共 （默认）
// private 私有 (只能自己使用, 子类和实例不可使用)
// protected 受保护 (只能自己或子类使用，例不可使用)
// readonly 只读修饰
var Man = /** @class */ (function () {
    function Man(theName, year, pover) {
        if (year === void 0) { year = 10; }
        if (pover === void 0) { pover = 100; }
        this.name = theName;
        this.year = year;
        this.pover = pover;
    }
    Man.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log(this.name + " " + this.pover + " moved " + distanceInMeters + "m.");
    };
    return Man;
}());
//当我们比较带有 private或 protected成员的类型的时候。 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
var Coo = /** @class */ (function () {
    function Coo(theName) {
        this.name = theName;
    }
    return Coo;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Coo));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Coo("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
// animal = rhino; //正确
// animal = employee;  // 错误: Animal 与 Employee 不兼容.
// protected 子类可以使用
var Personson = /** @class */ (function () {
    function Personson(name) {
        this.name = name;
    }
    return Personson;
}());
var Eee = /** @class */ (function (_super) {
    __extends(Eee, _super);
    function Eee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Eee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Eee;
}(Personson));
var howard = new Eee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//构造函数也可以被标记成 protected。 这意味着这个类不能实例化，但是可以被子类继承。
var Son = /** @class */ (function () {
    function Son(theName) {
        this.name = theName;
    }
    return Son;
}());
var Woo = /** @class */ (function (_super) {
    __extends(Woo, _super);
    function Woo(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Woo.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Woo;
}(Son));
var woo = new Woo("Howard", "Sales");
// let john = new Son("John"); // 错误: 'Person' 的构造函数是被保护的.
// readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
//参数属性  参数属性可以方便地让我们在一个地方定义并初始化一个成员。
var Octopus1 = /** @class */ (function () {
    function Octopus1(name, year) {
        this.name = name;
        this.year = year;
        this.numberOfLegs = 8;
    }
    return Octopus1;
}());
// readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
// private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
// 存取器
// 存取器要求你将编译器设置为输出ECMAScript 5或更高。
// let passcode = "secret passcode";
// class One {
//     constructor(private _fullName: string) {
//     }
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let one = new One("Bob Smith");
// one.fullName = "Bob Smithaaaaa";
// static 静态属性
// 类具有 实例部分与 静态部分这两个部分
// 静态属性不用实例化即可访问。
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
console.log(Grid.origin);
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类    抽象类一般不会直接被实例化，一般做为基类使用
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// 如果子类还坚持抽象就不一定要实现所有的抽象方法,如果子类不愿再抽象了就必须实现所有的抽象方法
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 类可以当借口使用
// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
