import {
  SIGN_UP_FAIL,
  SIGN_UP_FINISH,
  SIGN_UP_START,
  CLEAR_ALERTS,
} from '../../actionTypes';

import { SignUpProcess, Actions } from 'types';

const initialState: SignUpProcess = {
  inProcess: false,
  error: null,
  message: '',
};

export const signUpProcess = (state = initialState, action: Actions): SignUpProcess => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        inProcess: true,
        error: null,
        message: '',
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error || null,
      };
    case SIGN_UP_FINISH: {
      return {
        ...state,
        inProcess: false,
        message: action.successMessage || '',
      };
    }
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
