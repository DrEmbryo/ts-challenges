type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K];

type concatRes = Concat<[1], [2]>; // expected to be [1, 2]
