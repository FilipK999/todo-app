import { REGISTER_USER } from "../constants";

const initialState = {
  token: undefined,
  user: undefined
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log({ token: action.token, user: action.user });
      return Object.assign({}, state, {
        token: action.token,
        user: action.user
      });

    default:
      return state;
  }
}
