import {
  ADD_ITEM_FAIL,
  ADD_ITEM_FINISH,
  ADD_ITEM_START,
  CLEAR_ALERTS,
} from '../../actionTypes';

import { Actions, AddingProcess } from 'types';

const inititalState: AddingProcess = {
  inProcess: false,
  error: null,
};

export const addingProcess = (state = inititalState, action: Actions): AddingProcess => {
  switch (action.type) {
    case ADD_ITEM_START:
      return {
        ...state,
        inProcess: true,
        error: null,
      };

    case ADD_ITEM_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error || null,
      };

    case ADD_ITEM_FINISH:
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
