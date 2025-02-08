import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";

const combinedReducers = combineReducers({
  login: loginReducer,
});

export { combinedReducers };
