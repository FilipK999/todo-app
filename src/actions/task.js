import { ADD_TASK, DELETE_TASK } from "../constants";

export const addTask = title => ({ type: ADD_TASK, taskTitle: title });

export const deleteTask = task => ({ type: DELETE_TASK, task });
