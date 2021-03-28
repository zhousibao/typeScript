/**
 * @实现一个Includes范型
 * 同数组的includes方法
 */

 export type Includes<T extends any[], K> = K extends T[number] ? true : false

 type a = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>
 type b = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>