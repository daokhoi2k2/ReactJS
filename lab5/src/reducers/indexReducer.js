import { combineReducers } from "redux";
import sachReducer from "./sachReducer";
import loaisachReducer from "./loaisachReducer";
export default combineReducers({
  loaisach: loaisachReducer,
  sach: sachReducer,
});
