import {
  SIGN_IN_FAIL,
  SIGN_IN_FINISH,
  SIGN_IN_START,
  SIGN_UP_FAIL,
  SIGN_UP_FINISH,
  SIGN_UP_START,
} from '../actionTypes';

export const signInStart = (email: string, password: string) => ({
  type: SIGN_IN_START,
  email,
  password,
});

export const signInFail = (error: string) => ({
  type: SIGN_IN_FAIL,
  error,
});

export const signInFinish = () => ({
  type: SIGN_IN_FINISH,
});

export const signUpStart = (name: string, email: string, password: string) => ({
  type: SIGN_UP_START,
  name,
  email,
  password,
});

export const signUpFail = (error: string) => ({
  type: SIGN_UP_FAIL,
  error,
});

export const signUpFinish = () => ({
  type: SIGN_UP_FINISH,
});
