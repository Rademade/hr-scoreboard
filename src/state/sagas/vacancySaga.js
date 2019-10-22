import { call, put, all, select } from "redux-saga/effects"
import moment from "moment"
import { getVacancyStatistic, getVacancies } from "../../services/api"
import { setVacancies } from "../actions"

function* vacancyStatisticsSaga(vacancyId) {
  const response = yield call(getVacancyStatistic, { vacancyId })
  return response.data.object
}

function* appendWithStatisticsSaga(vacancyData) {
  const { vacancyId, dc, dm, position, status } = vacancyData
  const vacancyStatistics = yield call(vacancyStatisticsSaga, vacancyId)
  const interviewStates = yield select(state => state.interviewStates)
  const preparedStatistics = vacancyStatistics.map(vacancyItem => {
    const interviewState = interviewStates[vacancyItem.item]
    return {
      ...interviewState,
      count: vacancyItem.count,
      key: vacancyItem.item
    }
  })
  return {
    vacancyId,
    position,
    status,
    created: moment(dc),
    modified: moment(dm),
    statistic: preparedStatistics
  }
}

function* vacancySaga() {
  const allVacancyResponse = yield call(getVacancies)
  const vacancies = allVacancyResponse.data.objects
  const preparedVacancyList = yield all(
    vacancies.map(vacancy => call(appendWithStatisticsSaga, vacancy))
  )
  yield put(setVacancies(preparedVacancyList))
}

export default vacancySaga
