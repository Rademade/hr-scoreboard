import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";
import AppReducer from "./reducer";

const logger = createLogger({
  collapsed: true
});

const reducer = combineReducers({
  app: AppReducer
});

export default function() {
  return createStore(reducer, applyMiddleware(logger));
}
