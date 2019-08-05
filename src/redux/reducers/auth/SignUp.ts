import { SIGN_UP_FAIL, SIGN_UP_FINISH, SIGN_UP_START } from '../../actionTypes';

const initialState = {
  inProcess: false,
  error: '',
  message: '',
};

export const signUpProcess = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        inProcess: true,
        error: '',
        message: '',
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error,
      };
    case SIGN_UP_FINISH: {
      return {
        ...state,
        inProcess: false,
        message: action.successMessage,
      };
    }
    default:
      return state;
  }
};
