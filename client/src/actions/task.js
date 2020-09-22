import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  SHOW_COMPLETED,
  FETCH_TASKS,
  CLEAR_TASKS
} from "../constants";
import Axios from "axios";
import { v4 as uuid } from "uuid";

export const addTask = task => async dispatch => {
  const token = getToken();
  const id = uuid();
  dispatch({
    type: ADD_TASK,
    task: {
      ...task,
      id
    }
  });
  const userRes = await Axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users/addTask",
    { task: { ...task, id } },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const deleteTask = task => async dispatch => {
  const token = getToken();

  dispatch({ type: DELETE_TASK, task });
  await Axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users/deleteTask",
    { task: task },
    {
      headers: { "x-auth-token": token, "Content-Type": "application/json" }
    }
  );
};

export const completeTask = task => ({ type: COMPLETE_TASK, task });

export const showCompleted = show => ({ type: SHOW_COMPLETED, show });

export const fetchTasks = () => async dispatch => {
  const token = getToken();

  const res = await Axios.get(process.env.REACT_APP_API_ENDPOINT + "/users/tasks", {
    headers: { "x-auth-token": token }
  });
  dispatch({ type: FETCH_TASKS, tasks: [...res.data.tasks] });
};

export const clearTasks = () => ({ type: CLEAR_TASKS });

const getToken = () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }

  return token;
};
