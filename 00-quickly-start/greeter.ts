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
class Student {
  fullName: string
  // public 公共的，自动参数添加成类的属性
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}
interface Person {
  firstName: string
  lastName: string
}
function greeter(person: Person){
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')
document.body.innerHTML = greeter(user)