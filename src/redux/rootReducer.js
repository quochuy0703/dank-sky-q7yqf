import { combineReducers } from "redux";
import ButtonReducer from "./ButtonReducer";

const rootReducer = combineReducers({
  button: ButtonReducer
});
export default rootReducer;
