type Last<T extends any[]> = T extends [...infer K, infer V] ? V : never;

type lastArr1 = ["a", "b", "c"];
type lastArr2 = [3, 2, 1];

type tail1 = Last<lastArr1>; // expected to be 'c'
type tail2 = Last<lastArr2>; // expected to be 1
