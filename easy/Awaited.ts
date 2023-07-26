type ExampleType = Promise<number>;

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer P>
  ? P extends PromiseLike<any>
    ? MyAwaited<P>
    : P
  : never;

type AwaitedRes = MyAwaited<ExampleType>; // string
