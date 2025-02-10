import { LOGIN_ADMIN } from "../actions/login";

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
      default:
          return state
  }
};

export { loginReducer };
