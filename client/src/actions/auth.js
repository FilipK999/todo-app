import { REGISTER_USER } from "../constants";
import Axios from "axios";

export const registerUser = user => async dispatch => {
  await Axios.post("http://localhost:5000/users/register", user);
  const loginRes = await Axios.post("http://localhost:5000/users/login", {
    email: user.email,
    password: user.password
  });

  localStorage.setItem("auth-token", loginRes.data.token);

  dispatch({
    type: REGISTER_USER,
    token: loginRes.data.token,
    user: loginRes.data.user
  });
};
