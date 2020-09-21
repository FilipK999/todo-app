import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SHOW_COMPLETED, FETCH_TASKS } from "../constants";
import Axios from "axios";

export const addTask = task => async dispatch => {
  const token = getToken();

  dispatch({ type: ADD_TASK, task });
  const userRes = await Axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users/addTask",
    { todo: task },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const deleteTask = task => ({ type: DELETE_TASK, task });

export const completeTask = task => ({ type: COMPLETE_TASK, task });

export const showCompleted = show => ({ type: SHOW_COMPLETED, show });

export const fetchTasks = () => async dispatch => {
  console.log("test");
  const token = getToken();

  const res = await Axios.get(process.env.REACT_APP_API_ENDPOINT + "/users/tasks", {
    headers: { "x-auth-token": token }
  });
  console.log(res);
  console.log({ ...res.data.tasks });
  dispatch({ type: FETCH_TASKS, tasks: [...res.data.tasks] });
};

const getToken = () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }

  return token;
};
