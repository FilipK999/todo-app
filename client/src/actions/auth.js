import { LOGIN_USER, CHECK_USER, LOGOUT_USER, AUTH_ERROR, CLEAR_ERROR } from "../constants";

import { getRequest, postRequest } from "../middleware/axios";

export const registerUser = user => async dispatch => {
  await postRequest("/users/register", user);
  const res = await postRequest("/users/login", {
    email: user.email,
    password: user.password
  });

  if (res.data.failure) {
    dispatch({
      type: AUTH_ERROR,
      message: res.data.message
    });
  } else {
    localStorage.setItem("auth-token", res.data.token);
    dispatch({
      type: LOGIN_USER,
      token: res.data.token,
      user: res.data.user
    });
  }
};

export const loginUser = credentials => async dispatch => {
  const loginRes = await postRequest("/users/login", credentials);

  if (loginRes.data.failure) {
    dispatch({
      type: AUTH_ERROR,
      message: loginRes.data.message
    });
  } else {
    localStorage.setItem("auth-token", loginRes.data.token);
    dispatch({
      type: LOGIN_USER,
      token: loginRes.data.token,
      user: loginRes.data.user
    });
  }
};

export const logoutUser = () => {
  localStorage.setItem("auth-token", "");

  return {
    type: LOGOUT_USER
  };
};

export const checkUser = () => async dispatch => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }

  const tokenRes = await postRequest("/users/tokenIsValid", null, {
    headers: { "x-auth-token": token }
  });

  if (tokenRes.data) {
    const userRes = await getRequest("/users", {
      headers: { "x-auth-token": token }
    });
    dispatch({
      type: CHECK_USER,
      token,
      user: userRes.data
    });
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR
});
