import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  SHOW_COMPLETED,
  FETCH_TASKS,
  CLEAR_TASKS,
  UNCOMPLETE_TASK
} from "../constants";
import { v4 as uuid } from "uuid";
import { getRequest, postRequest } from "../middleware/axios";

export const addTask = task => async dispatch => {
  const token = getToken();
  const id = uuid();
  dispatch({
    type: ADD_TASK,
    task: {
      ...task,
      id,
      completed: false
    }
  });

  await postRequest(
    "/users/addTask",
    { task: { ...task, id, completed: false } },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const deleteTask = task => async dispatch => {
  const token = getToken();
  dispatch({ type: DELETE_TASK, task });

  await postRequest(
    "/users/deleteTask",
    { task: task },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const completeTask = task => async dispatch => {
  const token = getToken();
  dispatch({ type: COMPLETE_TASK, task });

  await postRequest(
    "/users/completeTask",
    { task: task },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const uncompleteTask = task => async dispatch => {
  const token = getToken();
  dispatch({ type: UNCOMPLETE_TASK, task });

  await postRequest(
    "/users/uncompleteTask",
    { task: task },
    {
      headers: { "x-auth-token": token }
    }
  );
};

export const showCompleted = show => ({ type: SHOW_COMPLETED, show });

export const fetchTasks = () => async dispatch => {
  const token = getToken();

  const res = await getRequest("/users/tasks", {
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
