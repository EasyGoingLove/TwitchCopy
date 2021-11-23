import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE: object = {
  isSignedIn: null,
  userId: null,
};
export const signInOut = (state: object = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
