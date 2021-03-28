/**
 * @实现内置的Exclude <T，U>
 * 从T中排除可分配给U的那些类型
 */

// 如果 T是 U的子类返回never类型，如果不是返回T类型。
// 当T为联合类型的时候，它会自动分发条件。
export type MyExclude<T,U> = T extends U ? never : T

type a = 'a' | 'b' | 'c' | 'e'
type b = 'a' | 'c' | 'd' | 'f'
type ab = MyExclude<a,b>
