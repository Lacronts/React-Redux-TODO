import { takeEvery, call, all } from 'redux-saga/effects';
import { addItemFail, AddItemFinish } from '../actions/todosActions';
import { addNewTodo } from 'api/todo';
import { ADD_ITEM_START } from '../actionTypes';

function* tryAddTodo({ todoText }: any) {
  console.log(todoText);
  // const result = yield call(addNewTodo, todoText);
}

export function* todoWatcher() {
  yield all([takeEvery(ADD_ITEM_START, tryAddTodo)]);
}
