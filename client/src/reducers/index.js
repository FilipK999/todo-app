import { combineReducers } from "redux";
import task from "./task";
import app from "./app";
import auth from "./auth";

const rootReducer = combineReducers({ task, app, auth });

export default rootReducer;
