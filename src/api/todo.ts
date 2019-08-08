import { getClient } from './client';

export function addNewTodo(todoText: string) {
  return getClient().post('/todos/', { todoText });
}

export function getAllTodos() {
  return getClient().get('/todos/');
}

export function deleteTodoItem(id: string) {
  return getClient().delete(`/todos/${id}`);
}
