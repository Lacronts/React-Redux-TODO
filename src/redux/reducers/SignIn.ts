import { SIGN_IN_FAIL, SIGN_IN_FINISH, SIGN_IN_START } from '../actionTypes';

const initialState = {
  inProcess: false,
  error: '',
};

export const signInProcess = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        inProcess: true,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error,
      };
    case SIGN_IN_FINISH: {
      return {
        ...state,
        inProcess: false,
      };
    }
    default:
      return state;
  }
};
