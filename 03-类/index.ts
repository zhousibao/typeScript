// 类
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting; 
  }
}
let greeterA = new Greeter('world');
greeterA.greet()



//继承1
// 基类、超类
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
// 子类、 派生类
class Dog extends Animal {
  brak() {
    console.log('woof! woof!');
  }
}
const dog = new Dog('nihao');
console.log(dog.name)

dog.brak();
dog.move(10);
dog.brak();



// 继承2
// 如果派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数。
// 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。
class Animal1 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(m: number =0) {
    console.log(`Animal moved ${m}m.`);
  }
}
class Snake extends Animal1 {
  constructor(name: string){
    super(name)
  }
  move(m = 5){
    console.log("slitering...");
    super.move(m)
  }
}
class Horse extends Animal1 {
  constructor(name: string){
    super(name)
  }
  move(m = 45){
    console.log("Galloping...");
    super.move(m)
  }
}
let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
