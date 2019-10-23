import { call, all, put, select } from "redux-saga/effects"
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
    [vacancyId]: statisticsObj
  }
}

function* reportsSaga() {
  const vacancies = yield select(state => state.vacancies)
  const stats = yield all(
    vacancies.map(vacancy => call(getDetailsSaga, vacancy))
  )
  yield put(setStatistics(stats))
}

export default reportsSaga
