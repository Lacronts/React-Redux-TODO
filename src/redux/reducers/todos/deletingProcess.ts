import {
  DELETE_ITEM_FAIL,
  DELETE_ITEM_FINISH,
  DELETE_ITEM_START,
  CLEAR_ALERTS,
} from '../../actionTypes';
import { Actions, DeletingProcess } from 'types';

const initialState: DeletingProcess = {
  inProcess: false,
  error: null,
};

export const deletingProcess = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DELETE_ITEM_START:
      return {
        ...state,
        inProcess: true,
        error: null,
      };
    case DELETE_ITEM_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error || null,
      };
    case DELETE_ITEM_FINISH:
      return {
        ...state,
        inProcess: false,
        error: null,
      };
    case CLEAR_ALERTS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
