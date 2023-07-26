interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<O, K extends keyof O> = {
  [key in K]: O[key];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
