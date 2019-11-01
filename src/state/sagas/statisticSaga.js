import { call, all, put, select } from "redux-saga/effects"
import reduce from "lodash/reduce"
import { getVacancyDetails } from "../../helpers/api"
import { setStatistics, setWeekStatistic } from "../actions"

const formObject = stats =>
  reduce(
    stats,
    (obj, stat) => {
      obj[stat.vacancyId] = stat.statisticsObj
      return obj
    },
    {}
  )

const formatStatistics = (vacancyId, states, inverviewInfo) => {
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

function* getDetailsSaga(vacancy) {
  const { vacancyId, states } = vacancy
  const response = yield call(getVacancyDetails, { vacancyId })
  const inverviewInfo = response.data.vacancyInterviewDetalInfo
  return formatStatistics(vacancyId, states, inverviewInfo)
}

function* getWeekDetailsSaga(vacancy) {
  const { vacancyId, states } = vacancy
  const { startDate, endDate } = yield select(state => state.datesRange)
  const response = yield call(getVacancyDetails, {
    vacancyId,
    from: startDate.valueOf(),
    to: endDate.valueOf()
  })
  const inverviewInfo = response.data.vacancyInterviewDetalInfo
  return formatStatistics(vacancyId, states, inverviewInfo)
}

function* statisticSaga() {
  const vacancies = yield select(state => state.vacancies)
  const [stats, weekStats] = yield all([
    all(vacancies.map(vacancy => call(getDetailsSaga, vacancy))),
    all(vacancies.map(vacancy => call(getWeekDetailsSaga, vacancy)))
  ])
  yield put(setStatistics(formObject(stats)))
  yield put(setWeekStatistic(formObject(weekStats)))
}

export default statisticSaga
