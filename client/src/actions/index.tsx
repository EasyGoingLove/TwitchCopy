import http from "../services/http";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STEAMS,
  FETCH_STEAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

type ActionFnc = (id?: number, update?: any) => void;
type ActionCreateFnc = (update:object) => void;

export const signIn: ActionFnc = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut: ActionFnc = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream: ActionCreateFnc =
  (formValues) => async (dispatch: any, getState: any) => {
    const { userId } = getState().auth;
    console.log({...formValues,userId}, {formValues});
    
    const response = await http.post("/streams", {...formValues,userId});
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };

export const fetchStreams: ActionFnc = () => async (dispatch: any) => {
  const response = await http.get("/streams");
  dispatch({ type: FETCH_STEAMS, payload: response.data });
};

export const fetchStream: ActionFnc = (id) => async (dispatch: any) => {
  const response = await http.get(`/streams/${id}`);
  dispatch({ type: FETCH_STEAM, payload: response.data });
};

export const editStream: ActionFnc =
  (id, formValues) => async (dispatch: any) => {
    const response = await http.put(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
  };

export const deleteStream: ActionFnc = (id) => async (dispatch: any) => {
  await http.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
