import { ADD_ITEM_FAIL, ADD_ITEM_FINISH, ADD_ITEM_START } from '../../actionTypes';

const inititalState = {
  inProcess: false,
  error: '',
};

export const addingProcess = (state = inititalState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_START:
      return {
        ...state,
        inProcess: true,
        error: '',
      };

    case ADD_ITEM_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error,
      };

    case ADD_ITEM_FINISH:
      return {
        ...state,
        inProcess: false,
        error: '',
      };
    default:
      return state;
  }
};
