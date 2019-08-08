import {
  SIGN_IN_FAIL,
  SIGN_IN_FINISH,
  SIGN_IN_START,
  CLEAR_ALERTS,
} from '../../actionTypes';

import { SignInProcess, Actions } from 'types';

const initialState: SignInProcess = {
  inProcess: false,
  error: null,
};

export const signInProcess = (state = initialState, action: Actions): SignInProcess => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        inProcess: true,
        error: null,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        inProcess: false,
        error: action.error || null,
      };
    case SIGN_IN_FINISH: {
      return {
        ...state,
        inProcess: false,
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
