"use strict";
// npm install -g typescript
// tsc greeter.ts
// 例1
// function greeter(person: string){
//   return "Hello, " + person
// }
// let allName = "aaa"
// document.body.innerHTML = greeter(allName)
// 例2
// interface Person {
//   firstName: string
//   lastName: string
// }
// function greeter(person: Person){
//   return "Hello, " + person.firstName + ' ' + person.lastName
// }
// let user = {
//   firstName: 'hello',
//   lastName: 'world'
// }
// document.body.innerHTML = greeter(user)
// 例3
var Student = /** @class */ (function () {
    // public 公共的，自动参数添加成类的属性
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
