import { SWITCH_THEME } from "../constants";

const initialState = {
  theme: false //true = light, false = dark
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return Object.assign({}, state, {
        theme: !state.theme
      });

    default:
      return state;
  }
}
