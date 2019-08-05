import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { SIGN_IN_START, SIGN_UP_START } from '../actionTypes';
import { signIn, signUp } from 'api/auth';
import {
  signInFail,
  signInFinish,
  signUpFail,
  signUpFinish,
} from '../actions/authActions';

function* signInSaga(action: any): any {
  try {
    const result = yield call(signIn, action.email, action.password);
  } catch (e) {
    yield put(signInFail(e.response.data.error));
  }
}

function* signUpSaga(action: any): any {
  try {
    const result = yield call(signUp, action.name, action.email, action.password);
    console.log(result);
  } catch (e) {
    yield put(signUpFail(e.response.data.error));
  }
}

export function* authWatcher() {
  yield all([takeEvery(SIGN_IN_START, signInSaga), takeEvery(SIGN_UP_START, signUpSaga)]);
}
