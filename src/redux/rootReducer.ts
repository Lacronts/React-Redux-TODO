import { combineReducers } from 'redux';
import { auth } from './reducers/auth';
import { todos } from './reducers/todos';

export const rootReducer = combineReducers({
  auth,
  todos,
});
