/**
 * @实现一个Readonly2范型
 * MyReadonly2<T, K> 
 * K指定T应设置为“只读”的属性集。如果K未提供，则应将所有属性设置为只读，就像normal一样Readonly<T>。
 */

import { MyExclude } from './MyExclude'
export type MyReadonly2<T, K extends keyof T  = keyof T> = {
  readonly[P in K] : T[P]
} & MyExclude<T, K>;


interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK