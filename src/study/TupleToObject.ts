/**
 * @实现元组转换为对象
 * 给定数组，转换为对象类型，键/值必须在给定数组中。
 */

const tuple = ['tesla', 'model3', 'modelX', 'modelY'] as const
// const result:TupleToObject<typeof tuple> 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}



export type TupleToObject<T extends readonly [...T]> = {
  [P in T[number]]:P
}

const result: TupleToObject<typeof tuple>  = {
  tesla: 'tesla',
  model3: 'model3', 
  modelX: 'modelX',
  modelY: 'modelY',
}