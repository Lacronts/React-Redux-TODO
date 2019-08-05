import { combineReducers } from 'redux';
import { signInProcess } from './reducers/SignIn';

export const rootReducer = combineReducers({
  signInProcess,
});
