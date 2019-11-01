import { put, call } from "redux-saga/effects"
import { setAuthStatus } from "../actions"
import { authPing } from "../../helpers/api"

function* authPingSaga() {
  try {
    const pingResponse = yield call(authPing)
    yield put(
      setAuthStatus(pingResponse.data && pingResponse.data.status === "ok")
    )
  } catch (error) {
    yield put(setAuthStatus(false))
  }
}

export default authPingSaga
