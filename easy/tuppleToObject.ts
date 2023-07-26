const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends ReadonlyArray<string | number | symbol>> = {
  [key in T[number]]: key;
};

type TupleToObjectRes = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
