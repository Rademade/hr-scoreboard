import { call, all, put, select } from "redux-saga/effects"
import reduce from "lodash/reduce"
import { getVacancyDetails } from "../../helpers/api"
import { setStatistics } from "../actions"

function* getDetailsSaga(vacancy) {
  const { vacancyId, states } = vacancy
  const response = yield call(getVacancyDetails, { vacancyId })
  const inverviewInfo = response.data.vacancyInterviewDetalInfo
  const statisticsObj = {}
  states.forEach(state => {
    const info = inverviewInfo[state]
    const count = info ? info.length : 0
    statisticsObj[state] = count
  })
  return {
    vacancyId,
    statisticsObj
  }
}

function* reportsSaga() {
  const vacancies = yield select(state => state.vacancies)
  const stats = yield all(
    vacancies.map(vacancy => call(getDetailsSaga, vacancy))
  )
  yield put(
    setStatistics(
      reduce(
        stats,
        (obj, stat) => {
          obj[stat.vacancyId] = stat.statisticsObj
          return obj
        },
        {}
      )
    )
  )
}

export default reportsSaga
