import { combineReducers } from 'redux';
import { signUpProcess } from './SignUp';
import { signInProcess } from './SignIn';

export const auth = combineReducers({
  signUpProcess,
  signInProcess,
});
