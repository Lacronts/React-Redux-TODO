import { combineReducers } from 'redux'
import { CEDReducer } from './action'
import { viewReducer } from './isCompleted'


export const rootReducer = combineReducers({
  tasks: CEDReducer,
  view: viewReducer,
})
