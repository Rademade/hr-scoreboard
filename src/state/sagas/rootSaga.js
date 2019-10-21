import { takeLatest, put, call, select } from "redux-saga/effects"
import moment from "moment"
import * as actions from "../actions"
import { START_SYNC } from "../actionTypes"
import authSaga from "./authSaga"
import statesSaga from "./statesSaga"
import vacancySaga from "./vacancySaga"

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
    // const allPersonsResponse = yield call(api.allPersonsRequest)
    // const allPersons = allPersonsResponse.data.object
    // yield put(actions.setRecruters(filterRecruters(allPersons)))

    // const statisticsResponse = yield call(api.statisticsRequest, {
    //   personIds: formPersonsArray(vacancies),
    //   vacancyIds: vacancies.map(item => item.vacancyId),
    //   fromTimestamp: startDate.valueOf(),
    //   toTimestamp: endDate.valueOf()
    // })
    // console.log("statisticsResponse", statisticsResponse)
    // yield put(actions.setStatistics(statisticsResponse.data.object))
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
