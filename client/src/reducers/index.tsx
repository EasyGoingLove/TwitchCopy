import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { signInOut } from "./authReducer";

export default combineReducers({
  auth: signInOut,
  form: formReducer,
});
