import {
  ADD_ITEM_FAIL,
  ADD_ITEM_FINISH,
  ADD_ITEM_START,
  FETCH_ITEM_FAIL,
  FETCH_ITEM_FINISH,
  FETCH_ITEM_START,
  DELETE_ITEM_FAIL,
  DELETE_ITEM_FINISH,
  DELETE_ITEM_START,
  EDIT_ITEM_FAIL,
  EDIT_ITEM_FINISH,
  EDIT_ITEM_START,
} from '../actionTypes';

import { Errors, TodoItemType } from 'types';

export const addItemStart = (todoText: string) => ({
  type: ADD_ITEM_START,
  todoText,
});

export const addItemFail = (error: Errors) => ({
  type: ADD_ITEM_FAIL,
  error,
});

export const addItemFinish = () => ({
  type: ADD_ITEM_FINISH,
});

export const fetchTodosStart = () => ({
  type: FETCH_ITEM_START,
});

export const fetchTodosFail = (error: Errors) => ({
  type: FETCH_ITEM_FAIL,
  error,
});

export const fetchTodosFinish = (data: TodoItemType[]) => ({
  type: FETCH_ITEM_FINISH,
  data,
});

export const deleteTodoItemStart = (todoId: string) => ({
  type: DELETE_ITEM_START,
  todoId,
});

export const deleteTodoItemFail = (error: Errors) => ({
  type: DELETE_ITEM_FAIL,
  error,
});

export const deleteTodoItemFinish = () => ({
  type: DELETE_ITEM_FINISH,
});

export const editTodoItemStart = (todoId: string, todoText: string, status: string) => ({
  type: EDIT_ITEM_START,
  todoId,
  todoText,
  status,
});

export const editTodoItemFail = (error: Errors) => ({
  type: EDIT_ITEM_FAIL,
  error,
});

export const editTodoItemFinish = () => ({
  type: EDIT_ITEM_FINISH,
});
