import { combineReducers } from "redux";
import task from "./task";
import app from "./app";

const rootReducer = combineReducers({ task, app });

export default rootReducer;
