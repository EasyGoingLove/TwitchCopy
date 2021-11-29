import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { signInOut } from "./authReducer";
import { streamsReducer as streamReducer } from "./streamReducer";

export default combineReducers({
  auth: signInOut,
  form: formReducer,
  streams: streamReducer,
});
