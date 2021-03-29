/**
 * @实现Omit
 * 实现原生Omit<T, K>
 * 通过从T中移除属性集K来构造新类型 // 和Pick相反
 */

import { MyExclude } from './MyExclude'
type MyOmit<T, K> = { 
  [P in MyExclude<keyof T, K>]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false
}