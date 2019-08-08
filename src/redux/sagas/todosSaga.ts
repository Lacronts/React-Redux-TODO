import { takeEvery, call, all, put } from 'redux-saga/effects';
import {
  addItemFail,
  addItemFinish,
  fetchTodosFail,
  fetchTodosFinish,
  fetchTodosStart,
  deleteTodoItemFail,
  deleteTodoItemFinish,
} from '../actions/todosActions';
import { addNewTodo, getAllTodos, deleteTodoItem } from 'api/todo';
import { ADD_ITEM_START, FETCH_ITEM_START, DELETE_ITEM_START } from '../actionTypes';

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
    yield put(fetchTodosFinish(items.data.data.todos));
  } catch (e) {
    yield put(fetchTodosFail(e.response.data.error));
  }
}

function* tryDeleteTodo({ id }: Actions): any {
  try {
    yield call(deleteTodoItem, id || '');
    yield put(fetchTodosStart());
    yield put(deleteTodoItemFinish());
  } catch (e) {
    yield put(deleteTodoItemFail(e.response.data.error));
  }
}

export function* todoWatcher() {
  yield all([
    takeEvery(ADD_ITEM_START, tryAddTodo),
    takeEvery(FETCH_ITEM_START, tryGetTodos),
    takeEvery(DELETE_ITEM_START, tryDeleteTodo),
  ]);
}
