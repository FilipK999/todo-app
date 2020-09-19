import { LOGIN_USER, CHECK_USER, LOGOUT_USER } from "../constants";

const initialState = {
  token: undefined,
  user: undefined
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

    default:
      return state;
  }
}
