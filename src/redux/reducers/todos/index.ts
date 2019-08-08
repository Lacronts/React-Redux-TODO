import { combineReducers } from 'redux';
import { addingProcess } from './addingProcess';
import { todoList } from './todoList';
import { deletingProcess } from './deletingProcess';

export const todos = combineReducers({
  addingProcess,
  deletingProcess,
  todoList,
});
