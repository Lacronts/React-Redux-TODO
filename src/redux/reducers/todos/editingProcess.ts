import {
  EDIT_ITEM_FAIL,
  EDIT_ITEM_FINISH,
  EDIT_ITEM_START,
  CLEAR_ALERTS,
} from '../../actionTypes';
import { Actions, EditingProcess } from 'types';

const initialState: EditingProcess = {
  inProcess: false,
  error: null,
};

export const editingProcess = (state = initialState, action: Actions) => {
  switch (action.type) {
    case EDIT_ITEM_START:
      return {
        ...state,
        inProcess: true,
        error: null,
      };
    case EDIT_ITEM_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error || null,
      };
    case EDIT_ITEM_FINISH:
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
