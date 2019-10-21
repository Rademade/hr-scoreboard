import { call, put, all } from "redux-saga/effects"
import moment from "moment"
import { getVacancyStatistic, getVacancies } from "../../services/api"
import { setVacancies } from "../actions"

function* appendWithStatisticsSaga(vacancyData) {
  const { vacancyId, dc, dm, position, status } = vacancyData
  const response = yield call(getVacancyStatistic, { vacancyId })
  console.log("StatisticsSaga", response)
  const detailedInfo = {}
  return {
    vacancyId,
    position,
    status,
    created: moment(dc),
    modified: moment(dm),
    detailedInfo
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
