import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import { SIGN_IN_START, SIGN_UP_START } from '../actionTypes';
import { signIn, signUp } from 'api/auth';
import { history } from 'helpers/history';
import {
  signInFail,
  signInFinish,
  signUpFail,
  signUpFinish,
} from '../actions/authActions';

function* signInSaga(action: any): any {
  try {
    const result = yield call(signIn, action.email, action.password);
    const data = result.data.data;
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    yield put(signInFinish());
    history.push('/');
  } catch (e) {
    yield put(signInFail(e.response.data.error));
  }
}

function* signUpSaga(action: any): any {
  try {
    const result = yield call(signUp, action.name, action.email, action.password);
    yield put(signUpFinish(result.data.message));
    yield delay(2500);
    history.push('/sign-in/');
  } catch (e) {
    yield put(signUpFail(e.response.data.error));
  }
}

export function* authWatcher() {
  yield all([takeEvery(SIGN_IN_START, signInSaga), takeEvery(SIGN_UP_START, signUpSaga)]);
}
