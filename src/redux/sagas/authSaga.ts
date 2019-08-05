import { takeEvery } from 'redux-saga/effects';
import { SIGN_IN_START } from '../actionTypes';

function* authSaga(): any {
  console.log('there');
}

export function* authWatcher() {
  yield takeEvery(SIGN_IN_START, authSaga);
}
