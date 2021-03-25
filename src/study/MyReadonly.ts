/**
 * @实现Readonly
 * 无需使用内置的Readonly<T>泛型即可。
 */

export type MyReadonly<T> = {
  readonly[P in keyof T]: T[P]
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = '你好' // Error: cannot reassign a readonly property