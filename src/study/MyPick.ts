
/**
 * @实现Pick
 * 无需使用内置的Pick<T, K>泛型即可, 通过从K中选择属性T来构造类型
 */
export type MyPick<T,K extends keyof T> = {
  [P in K]: T[P]
}


// 例子
interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

type a = MyPick<Todo, 'title'>
type b = Pick<Todo, 'title'>