import { LOGIN_ADMIN } from "../actions/login";
import { LOGOUT_ADMIN } from "../actions/logout";

const initalState = {
  admin: null,
  token: localStorage.getItem("usertoken") || null,
  isLogged: false,
};

const loginReducer = (state = initalState, action) => {
    console.log(action);
  switch (action.type) {
    case LOGIN_ADMIN:
      localStorage.setItem("usertoken", action.payload.token);
      return {
        ...state,
        admin: action.payload.username,
        token: action.payload.token,
        isLogged: true,
      };
    case LOGOUT_ADMIN:
      localStorage.removeItem("usertoken");
      return {
        ...state,
        admin: null,
        token: "",
        isLogged: false,
      };
      default:
          return state
  }
};

export { loginReducer };
