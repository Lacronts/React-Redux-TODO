type ErrorsDetails = {
  email?: string;
  password?: string;
  authenticate?: string;
  todoText?: string;
  id?: string;
};

type Errors = {
  details: ErrorsDetails;
};

export interface SignInProcess {
  inProcess: boolean;
  error: Errors | null;
}

export interface DeletingProcess extends SignInProcess {}

export interface SignUpProcess extends SignInProcess {
  message: string;
}

type AuthState = {
  signUpProcess: SignUpProcess;
  signInProcess: SignInProcess;
};

export interface AddingProcess {
  inProcess: boolean;
  error: Errors | null;
}

export type TodoItemType = {
  id: string;
  todoText: string;
  status: 'active' | 'completed';
  createdAt: string;
  updatedAt: string;
};

export interface TodoList {
  items: TodoItemType[];
  isFetching: boolean;
  error: Errors | null;
}

export type TodosState = {
  addingProcess: AddingProcess;
  todoList: TodoList;
  deletingProcess: DeletingProcess;
};

type Store = {
  todos: TodosState;
  auth: AuthState;
};

export type Actions = {
  type: string;
  data?: any;
  error?: Errors;
  successMessage?: string;
  todoText?: string;
  email?: string;
  password?: string;
  name?: string;
  id?: string;
};
