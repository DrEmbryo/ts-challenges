interface TodoReadonly {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

const todoReadonly: MyReadonly<TodoReadonly> = {
  title: "Hey",
  description: "foobar",
};

// todoReadonly.title = "Hello" // Error: cannot reassign a readonly property
// todoReadonly.description = "barFoo" // Error: cannot reassign a readonly property
