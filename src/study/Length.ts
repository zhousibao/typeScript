/**
 * @获取元组的长度
 */
// export type Length<T extends any[]> = T['length']
export type Length<T extends {length: number}> = T['length']

type tesla = ['tesla', 'model3', 'modelX', 'modelY']
type spaceX = ['FALCON9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5