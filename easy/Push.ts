
type Push<A extends unknown[], E extends unknown> = [...A, E]

type PushRes = Push<[1, 2], '3'> // [1, 2, '3']