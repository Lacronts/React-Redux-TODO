import { FETCH_ITEM_FAIL, FETCH_ITEM_FINISH, FETCH_ITEM_START } from '../../actionTypes';

import { TodoList, Actions } from 'types';

const initialState: TodoList = {
  items: [],
  isFetching: false,
  error: null,
};

export const todoList = (state = initialState, action: Actions): TodoList => {
  switch (action.type) {
    case FETCH_ITEM_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_ITEM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error || null,
      };
    case FETCH_ITEM_FINISH:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      };
    default:
      return state;
  }
};
