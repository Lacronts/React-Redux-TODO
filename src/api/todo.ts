import { getClient } from './client';

export function addNewTodo(todoText: string) {
  return getClient().post('/todos/', { todoText });
}
