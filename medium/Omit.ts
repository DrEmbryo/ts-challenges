interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
}

type ExcludeField<T, U> = T extends U ? never : T;

type MyOmit<T, K> = {
  [key in ExcludeField<keyof T, K>]: T[key];
};

type OmitRes = MyOmit<TodoOmit, "description" | "title">;

const todoOmit: OmitRes = {
  completed: false,
};
