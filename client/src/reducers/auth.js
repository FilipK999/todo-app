import { LOGIN_USER, CHECK_USER } from "../constants";

const initialState = {
  token: undefined,
  user: undefined
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log({ token: action.token, user: action.user });
      return Object.assign({}, state, {
        token: action.token,
        user: action.user
      });
    case CHECK_USER:
      console.log("Check User");
      console.log({ token: action.token, user: action.user });
      return Object.assign({}, state, {
        token: action.token,
        user: action.user
      });

    default:
      return state;
  }
}
