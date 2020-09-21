import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SHOW_COMPLETED } from "../constants";
import Axios from "axios";

export const addTask = task => async dispatch => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }
  const tokenRes = await Axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users/tokenIsValid",
    null,
    {
      headers: { "x-auth-token": token }
    }
  );
  if (tokenRes.data) {
    dispatch({ type: ADD_TASK, task });
    const userRes = await Axios.post(
      process.env.REACT_APP_API_ENDPOINT + "/users/addTodo",
      { todo: task },
      {
        headers: { "x-auth-token": token }
      }
    );
  }
};

export const deleteTask = task => ({ type: DELETE_TASK, task });

export const completeTask = task => ({ type: COMPLETE_TASK, task });

export const showCompleted = show => ({ type: SHOW_COMPLETED, show });
