import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { setOnSync, setAuthStatus, setUserData } from "./actions";
import { authRequest } from "../api";

function* appSyncSaga() {
  try {
    yield put(setOnSync(true));
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    const response = yield call(authRequest, { username, password });
    console.log("authSaga", response);
    if (response.status === 200) {
      yield put(setAuthStatus(true));
      yield put(setUserData(response.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setOnSync(false));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.START_SYNC, appSyncSaga);
}

export default rootSaga;
