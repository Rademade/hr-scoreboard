import { takeLatest, put, call, select } from "redux-saga/effects"
import moment from "moment"
import * as actions from "../actions"
import { START_SYNC } from "../actionTypes"
import authSaga from "./authSaga"
import statesSaga from "./statesSaga"
import vacancySaga from "./vacancySaga"
import usersSaga from "./usersSaga"
import reportsSaga from "./reportsSaga"

function* syncSaga() {
  try {
    if (false) {
      yield call(authSaga)
    }
    yield put(
      actions.setDatesRange({
        startDate: moment().startOf("week"),
        endDate: moment().endOf("day")
      })
    )
    yield call(statesSaga)
    yield call(vacancySaga)
    yield call(usersSaga)
    yield call(reportsSaga)
  } catch (error) {
    yield put(actions.setError(error))
  } finally {
    yield put(actions.endSync())
    const isFirstLaunch = yield select(state => state.isFirstLaunch)
    if (isFirstLaunch) {
      yield put(actions.setFirstLaunch(false))
    }
  }
}

function* rootSaga() {
  yield takeLatest(START_SYNC, syncSaga)
}

export default rootSaga
