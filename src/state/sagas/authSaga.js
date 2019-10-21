import { put, call } from "redux-saga/effects"
import { setAuthStatus } from "../actions"
import { auth } from "../../services/api"

function* authSaga() {
  const username = process.env.REACT_APP_USERNAME
  const password = process.env.REACT_APP_PASSWORD
  const authResponse = yield call(auth, { username, password })
  if (authResponse.status === 200) {
    yield put(setAuthStatus(true))
  } else {
    throw authResponse.data
  }
}

export default authSaga
