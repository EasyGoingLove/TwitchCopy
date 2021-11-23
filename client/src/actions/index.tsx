import {SIGN_IN , SIGN_OUT} from './types';


type ActionFnc = (userId? : number) => void;

export const signIn: ActionFnc = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut:ActionFnc = () => {
  return {
    type: SIGN_OUT,
  };
};
