import { getClient } from './client';

export function addNewTodo(todoText: string) {
  return getClient().post('/todos/', { todoText });
}

export function getAllTodos() {
  return getClient().get('/todos/');
}

export function deleteTodoItem(todoId: string) {
  return getClient().delete(`/todos/${todoId}`);
}

export function editTodoItem(todoId: string, todoText: string, status: string) {
  return getClient().put(`/todos/${todoId}`, { todoText, status });
}
