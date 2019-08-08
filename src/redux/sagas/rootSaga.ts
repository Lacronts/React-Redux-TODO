import { spawn } from 'redux-saga/effects';
import { authWatcher } from './authSaga';
import { todoWatcher } from './todosSaga';

export function* rootSaga() {
  yield spawn(authWatcher);
  yield spawn(todoWatcher);
}
