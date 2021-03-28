/**
 * @实现一个Concat范型
 * 同数组的concat方法
 */

 export type Concat<T extends any[], K extends any[]> = [...T, ...K]

 type a = Concat<[1], [2]>
 type b = Concat<[1,2,3], [2,4]>