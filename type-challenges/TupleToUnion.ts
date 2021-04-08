/**
 * @元组转合集
 * 实现泛型TupleToUnion<T>，它覆盖元组的值与其值联合
 */

export type TupleToUnion<T extends [...T]> = T[number]

type Arr = ['1','2','3']
const a: TupleToUnion<Arr> ='1'