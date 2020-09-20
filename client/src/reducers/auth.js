import { LOGIN_USER, CHECK_USER, LOGOUT_USER, AUTH_ERROR, CLEAR_ERROR } from "../constants";

const initialState = {
  token: undefined,
  user: undefined,
  errorMessage: undefined
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        token: action.token,
        user: action.user
      });

    case CHECK_USER:
      return Object.assign({}, state, {
        token: action.token,
        user: action.user
      });

    case LOGOUT_USER:
      return Object.assign({}, state, {
        token: undefined,
        user: undefined
      });

    case AUTH_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.message
      });

    case CLEAR_ERROR:
      return Object.assign({}, state, {
        errorMessage: undefined
      });

    default:
      return state;
  }
}
