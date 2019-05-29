// 内部模块 => 命名空间

// 想在命名空间外使用空间内的变量，需要使用export
namespace Validation {
  export interface StringValidater {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidater implements StringValidater {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidater implements StringValidater {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

let strings = ['Hello', '96052', '101'];

let validaters: { [s:string]: Validation.StringValidater} = {};
validaters['ZIP code'] = new Validation.ZipCodeValidater();
validaters['Letters only'] = new Validation.LettersOnlyValidater();


for(let s of strings){
  for (let name in validaters){
    console.log(`"${s}" - ${validaters[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`)
  }
}


// 命名空间中的内容比较多的时候可以拆分命名空间。
// 使用引用标签 /// <reference path=""/> 来告诉编译器文件之间的联系
// 例子见demo Test.ts
// 把所有输出编译为一个输出文件，需要使用--outFile  ==>  tsc --outFile sample.js Test.ts