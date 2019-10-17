import { call, put, select } from "redux-saga/effects"
import moment from "moment"
import * as api from "../../services/api"
import * as actions from "../actions"
import { filterRecruters } from "../../services/utils"

function* appSyncSaga() {
  try {
    if (false) {
      const username = process.env.REACT_APP_USERNAME
      const password = process.env.REACT_APP_PASSWORD
      const authResponse = yield call(api.authRequest, { username, password })
      if (authResponse.status === 200) {
        yield put(actions.setAuthStatus(true))
        yield put(actions.setUserData(authResponse.data.user))
      }
    }

    const allPersonsResponse = yield call(api.allPersonsRequest)
    const allPersons = allPersonsResponse.data.object
    yield put(actions.setRecruters(filterRecruters(allPersons)))
    const startDate = moment().startOf("week")
    const endDate = moment().endOf("day")
    yield put(actions.setDatesRange({ startDate, endDate }))

    // const vacancies = yield select(state => state.vacancies)
    // const statisticsResponse = yield call(api.statisticsRequest, {
    //   personIds: formPersonsArray(vacancies),
    //   vacancyIds: vacancies.map(item => item.vacancyId),
    //   fromTimestamp: startDate.valueOf(),
    //   toTimestamp: endDate.valueOf()
    // })
    // yield put(actions.setStatistics(statisticsResponse.data.object))

    // const statesResponse = yield call(api.statesRequest)
    // yield put(actions.setStates(statesResponse.data.object.interviewStates))
  } catch (error) {
    yield put(actions.setError(error))
  } finally {
    // yield put(actions.endSync())
    const isFirstLaunch = yield select(state => state.isFirstLaunch)
    if (isFirstLaunch) {
      yield put(actions.setFirstLaunch(false))
    }
  }
}

export default appSyncSaga
