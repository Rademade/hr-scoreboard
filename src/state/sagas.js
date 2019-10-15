import { call, put, select, takeLatest } from "redux-saga/effects"
import moment from "moment"
import { formPersonsArray } from "../utils"
import { authRequest, vacanciesRequest, statisticsRequest } from "../api"
import { START_SYNC } from "./actionTypes"
import {
  endSync,
  setAuthStatus,
  setUserData,
  setVacancies,
  setDatesRange,
  setStatistics,
  setFirstLaunch
} from "./actions"

function* appSyncSaga() {
  try {
    if (false) {
      const username = process.env.REACT_APP_USERNAME
      const password = process.env.REACT_APP_PASSWORD
      const authResponse = yield call(authRequest, { username, password })
      if (authResponse.status === 200) {
        yield put(setAuthStatus(true))
        yield put(setUserData(authResponse.data.user))
      }
    }

    const vacanciesResponse = yield call(vacanciesRequest)
    yield put(setVacancies(vacanciesResponse.data.objects))

    const vacancies = yield select(state => state.vacancies)
    const startDate = moment().startOf("week")
    const endDate = moment().endOf("day")
    yield put(setDatesRange({ startDate, endDate }))

    const statisticsResponse = yield call(statisticsRequest, {
      personIds: formPersonsArray(vacancies),
      vacancyIds: vacancies.map(item => item.vacancyId),
      fromTimestamp: startDate.valueOf(),
      toTimestamp: endDate.valueOf()
    })
    yield put(setStatistics(statisticsResponse.data.object))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(endSync())
    const isFirstLaunch = yield select(state => state.isFirstLaunch)
    if (isFirstLaunch) {
      yield put(setFirstLaunch(false))
    }
  }
}

function* rootSaga() {
  yield takeLatest(START_SYNC, appSyncSaga)
}

export default rootSaga
