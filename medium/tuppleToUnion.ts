type TupleToUnion<T extends any[]> = T extends (infer K)[] ? K : never;

type TupleArray = ["1", "2", "3"];

type TupleToUnionTest = TupleToUnion<TupleArray>; // expected to be '1' | '2' | '3'
