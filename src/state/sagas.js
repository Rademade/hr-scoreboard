import { call, put, select, takeLatest } from "redux-saga/effects";
import { authRequest, vacanciesRequest } from "../api";
import { START_SYNC } from "./actionTypes";
import {
  endSync,
  setAuthStatus,
  setUserData,
  setVacancies,
  setFirstLaunch
} from "./actions";

function* appSyncSaga() {
  try {
    if (false) {
      const username = process.env.REACT_APP_USERNAME;
      const password = process.env.REACT_APP_PASSWORD;
      const authResponse = yield call(authRequest, { username, password });
      if (authResponse.status === 200) {
        yield put(setAuthStatus(true));
        yield put(setUserData(authResponse.data.user));
      }
    }

    const vacanciesResponse = yield call(vacanciesRequest);
    yield put(setVacancies(vacanciesResponse.data.objects));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(endSync());
    const isFirstLaunch = yield select(state => state.isFirstLaunch);
    if (isFirstLaunch) {
      yield put(setFirstLaunch(false));
    }
  }
}

function* rootSaga() {
  yield takeLatest(START_SYNC, appSyncSaga);
}

export default rootSaga;
