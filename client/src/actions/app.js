import { FETCH_USER_DATA, SWITCH_THEME } from "../constants";
import { getRequest } from "../middleware/axios";

export const switchTheme = () => async dispatch => {
  const token = getToken();
  dispatch({ type: SWITCH_THEME });

  await getRequest("/users/darkMode", {
    headers: { "x-auth-token": token }
  });
};

export const fetchUserData = () => async dispatch => {
  const token = getToken();

  const res = await getRequest("/users/userData", {
    headers: { "x-auth-token": token }
  });

  dispatch({ type: FETCH_USER_DATA, userData: res.data.userData });
};

const getToken = () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }

  return token;
};
