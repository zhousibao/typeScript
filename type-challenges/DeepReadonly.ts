/**
 * @实现DeepReadonly
 * 将对象的每个参数及其子对象递归地设为只读
 */
type Primitive = string | number | boolean | bigint | symbol | undefined | null

export type DeepReadonly<T> = {
  readonly[K in keyof T]:T[K] extends Primitive ?  T[K] : DeepReadonly<T[K]>;
}

type X = { 
  x: { 
    a: string
    b: number
  }
  y: number
}

const todo: DeepReadonly<X>  = {
  x: {
    a:'a',
    b:12,
  },
  y:1
}
//todo.y = 123 // 无法分配到 "y" ，因为它是只读属性