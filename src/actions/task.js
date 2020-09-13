import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SHOW_COMPLETED } from "../constants";

export const addTask = task => ({ type: ADD_TASK, task });

export const deleteTask = task => ({ type: DELETE_TASK, task });

export const completeTask = task => ({ type: COMPLETE_TASK, task });

export const showCompleted = show => ({ type: SHOW_COMPLETED, show });
