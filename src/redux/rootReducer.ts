import { combineReducers } from 'redux';
import { auth } from './reducers/auth';

export const rootReducer = combineReducers({
  auth,
});
