import { spawn } from 'redux-saga/effects';
import { authWatcher } from './authSaga';

export function* rootSaga() {
  yield spawn(authWatcher);
}
