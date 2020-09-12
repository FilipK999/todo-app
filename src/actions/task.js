import { ADD_TASK } from "../constants";

export const addTask = title => ({ type: ADD_TASK, taskTitle: title });
