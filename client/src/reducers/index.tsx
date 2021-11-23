import { combineReducers } from "redux";
import {signInOut} from './authReducer';

export default combineReducers({
    auth:signInOut
});