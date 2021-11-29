import {
  CREATE_STREAM,
  FETCH_STEAMS,
  FETCH_STEAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";
import _ from "lodash";

export const streamsReducer = (
  state: object = {},
  action: { type: string; payload: { id: number } }
) => {
  switch (action.type) {
    case FETCH_STEAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STEAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload.id); //here should be without id fix type if error
    default:
      return state;
  }
};
