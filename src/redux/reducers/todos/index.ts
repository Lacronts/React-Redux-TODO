import { combineReducers } from 'redux';
import { addingProcess } from './addingProcess';
import { todoList } from './todoList';
import { deletingProcess } from './deletingProcess';
import { editingProcess } from './editingProcess';

export const todos = combineReducers({
  addingProcess,
  deletingProcess,
  todoList,
  editingProcess,
});
