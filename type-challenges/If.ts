/**
 * @实现一个If
 */
export type If<T, A, B> = T extends true ? A : B

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'