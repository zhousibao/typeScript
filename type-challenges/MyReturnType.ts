/**
 * @MyReturnType
 * 获取函数返回类型ReturnType
 */

type MyReturnType<T> = T extends ( ...args: any[] ) => infer R ? R :never

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

// typeof 获取实例的类型
// type b = typeof fn
type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"