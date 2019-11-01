import { put, call, select } from "redux-saga/effects"
import { setAuthStatus } from "../actions"
import { auth } from "../../helpers/api"

function* authRequest() {
  const username = process.env.REACT_APP_USERNAME
  const password = process.env.REACT_APP_PASSWORD
  const authResponse = yield call(auth, { username, password })
  return authResponse
}

function* authSaga() {
  const isAuthenticated = yield select(state => state.isAuthenticated)
  if (!isAuthenticated) {
    const authResponse = yield call(authRequest)
    if (authResponse.status === 200) {
      yield put(setAuthStatus(true))
    } else {
      throw authResponse.data
    }
  }
}

export default authSaga
