type Unshift<A extends unknown[], E> = [E, ...A] 

type UnshiftRes = Unshift<[1, 2], 0> // [0, 1, 2,]