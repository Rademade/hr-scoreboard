import { call, put, all, select } from "redux-saga/effects"
import moment from "moment"
import { getVacancyDetails, getVacancies } from "../../helpers/api"
import { setVacancies } from "../actions"

const formStatesArray = (interviewStatus, customInterviewStates) =>
  interviewStatus.split(",").map(key => {
    const customState = customInterviewStates[key]
    const emptyState = { id: key, name: null, type: null, count: 0 }
    return {
      ...emptyState,
      ...customState
    }
  })

const appendWithStatistics = (vacancyStatesArray, vacancyDetails) =>
  vacancyStatesArray.map(state => {
    const personsArray = vacancyDetails[state.id]
    const count = personsArray ? personsArray.length : 0
    state.count = count
    return state
  })

function* vacancyDetailsSaga(vacancyId) {
  const response = yield call(getVacancyDetails, { vacancyId })
  return response.data.vacancyInterviewDetalInfo
}

function* appendWithStatisticsSaga(vacancyData) {
  const { vacancyId, dc, dm, position, status, interviewStatus } = vacancyData
  const vacancyDetails = yield call(vacancyDetailsSaga, vacancyId)
  const customInterviewStates = yield select(state => state.interviewStates)
  const statistics = appendWithStatistics(
    formStatesArray(interviewStatus, customInterviewStates),
    vacancyDetails
  )
  return {
    vacancyId,
    position,
    status,
    created: moment(dc),
    modified: moment(dm),
    statistics
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
