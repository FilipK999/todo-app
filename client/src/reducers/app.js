import { FETCH_USER_DATA, SWITCH_THEME } from "../constants";

const initialState = {
  darkMode: true
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return Object.assign({}, state, {
        darkMode: !state.darkMode
      });

    case FETCH_USER_DATA:
      return Object.assign({}, state, {
        userData: action.userData,
        darkMode: action.userData.darkMode
      });
    default:
      return state;
  }
}
