import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { setAuth, setError } from "./actions";

function* authSaga() {
  try {
    // const response = await axios.get("/authPing", { withCredentials: true })
    // const response = await axios.post(
    //             "/auth",
    //             {
    //               username: process.env.REACT_APP_USERNAME,
    //               password: process.env.REACT_APP_PASSWORD
    //             },
    //             { withCredentials: true }
    //           )
    yield put(setAuth(true));
  } catch (error) {
    yield put(setError(error));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.AUTH, authSaga);
}

export default rootSaga;
