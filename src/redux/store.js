import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true
    })
  )
];

const enhancer = compose(...enhancers);
const store = createStore(reducer, {}, enhancer);

export default store;
