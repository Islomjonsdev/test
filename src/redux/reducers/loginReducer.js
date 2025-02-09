import { LOGIN_ADMIN } from "../actions/login";
import { LOGOUT_ADMIN } from "../actions/logout";

const initalState = {
  token: localStorage.getItem("usertoken") || null,
  isLogged: false,
};

const loginReducer = (state = initalState, action) => {
    console.log(action);
  switch (action.type) {
    case LOGIN_ADMIN:
      localStorage.setItem("usertoken", action.payload);
      return {
        ...state,
        token: action.payload,
        isLogged: true,
      };
    case LOGOUT_ADMIN:
      localStorage.removeItem("usertoken");
      return {
        ...state,
        token: "",
        isLogged: false,
      };
      default:
          return state
  }
};

export { loginReducer };
