import { put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import * as actionTypes from "./actionTypes";
import { setAuth, setError } from "./actions";

const authRequest = creds => axios.post("/auth", {
  username: creds.username,
  password: creds.password
}, { withCredentials: true })

const authPingRequest = () => axios.get("/authPing",  { withCredentials: true })

function* authSaga() {
  try {
    const username = process.env.REACT_APP_USERNAME
    const password = process.env.REACT_APP_PASSWORD
    const response = yield call(authRequest, { username, password })
    console.log('auth', response);

    yield put(setAuth(true));
  } catch (error) {
    yield put(setError(error));
  }
}

function* authPingSaga() {
  try {
    const response = yield call(authPingRequest)
    console.log('authPing', response);

  } catch(error) {
    yield put(setError(error));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.AUTH, authSaga);
  yield takeLatest(actionTypes.AUTH_PING, authPingSaga)
}

export default rootSaga;
