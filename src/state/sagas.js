import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { setOnSync, setAuthStatus, setUserData, setVacancies } from "./actions";
import { authRequest, vacanciesRequest } from "../api";

function* appSyncSaga() {
  try {
    yield put(setOnSync(true));
    if (false) {
      const username = process.env.REACT_APP_USERNAME;
      const password = process.env.REACT_APP_PASSWORD;
      const authResponse = yield call(authRequest, { username, password });
      if (authResponse.status === 200) {
        yield put(setAuthStatus(true));
        yield put(setUserData(authResponse.data.user));
      }
    }

    const vacanciesResponse = yield call(vacanciesRequest)
    yield put(setVacancies(vacanciesResponse.data.objects))

    // vacanciesRequest
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
