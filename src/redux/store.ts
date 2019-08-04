import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const middleware = composeWithDevTools(applyMiddleware());

export const store = createStore(rootReducer, middleware);
