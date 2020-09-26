import { FETCH_USER_DATA, SWITCH_THEME } from "../constants";
import Axios from "axios";

export const switchTheme = () => async dispatch => {
  const token = getToken();
  dispatch({ type: SWITCH_THEME });

  await Axios.get(process.env.REACT_APP_API_ENDPOINT + "/users/darkMode", {
    headers: { "x-auth-token": token }
  });
};

export const fetchUserData = () => async dispatch => {
  const token = getToken();

  const res = await Axios.get(process.env.REACT_APP_API_ENDPOINT + "/users/userData", {
    headers: { "x-auth-token": token }
  });
  console.log(res.data.userData);
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
