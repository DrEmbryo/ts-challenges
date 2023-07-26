type MyExclude<T, U> = T extends U ? never : T;

type excludeRes = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
