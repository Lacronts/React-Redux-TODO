import { SIGN_IN_FAIL, SIGN_IN_FINISH, SIGN_IN_START } from '../actionTypes';

export const signInStart = () => ({
  type: SIGN_IN_START,
});

export const signInFail = () => ({
  type: SIGN_IN_FAIL,
});

export const signInFinish = () => ({
  type: SIGN_IN_FINISH,
});
