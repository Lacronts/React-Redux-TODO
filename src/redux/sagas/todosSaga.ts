import { takeEvery, call, all, put } from 'redux-saga/effects';
import {
  addItemFail,
  addItemFinish,
  fetchTodosFail,
  fetchTodosFinish,
  fetchTodosStart,
  deleteTodoItemFail,
  deleteTodoItemFinish,
  editTodoItemFinish,
} from '../actions/todosActions';
import { addNewTodo, getAllTodos, deleteTodoItem, editTodoItem } from 'api/todo';
import {
  ADD_ITEM_START,
  FETCH_ITEM_START,
  DELETE_ITEM_START,
  EDIT_ITEM_START,
} from '../actionTypes';

import { Actions } from 'types';

function* tryAddTodo({ todoText }: Actions) {
  try {
    yield call(addNewTodo, todoText || '');
    yield put(addItemFinish());
    yield put(fetchTodosStart());
  } catch (e) {
    yield put(addItemFail(e.response.data.error));
  }
}

function* tryGetTodos(): any {
  try {
    const items = yield call(getAllTodos);
    yield put(fetchTodosFinish(items.data.data));
  } catch (e) {
    yield put(fetchTodosFail(e.response.data.error));
  }
}

function* tryDeleteTodo({ todoId }: Actions): any {
  try {
    yield call(deleteTodoItem, todoId || '');
    yield put(fetchTodosStart());
    yield put(deleteTodoItemFinish());
  } catch (e) {
    yield put(deleteTodoItemFail(e.response.data.error));
  }
}

function* tryEditTodo({ todoId, todoText, status }: Actions): any {
  try {
    yield call(editTodoItem, todoId || '', todoText || '', status || '');
    yield put(fetchTodosStart());
    yield put(editTodoItemFinish());
  } catch (e) {
    console.log(e.response.data);
  }
}

export function* todoWatcher() {
  yield all([
    takeEvery(ADD_ITEM_START, tryAddTodo),
    takeEvery(FETCH_ITEM_START, tryGetTodos),
    takeEvery(DELETE_ITEM_START, tryDeleteTodo),
    takeEvery(EDIT_ITEM_START, tryEditTodo),
  ]);
}
