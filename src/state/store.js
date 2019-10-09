import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import appReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger({
      collapsed: true
    })
  )
);
sagaMiddleware.run(rootSaga);

export default store;
