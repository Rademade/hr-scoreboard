import { call, put } from "redux-saga/effects"
import moment from "moment"
import { getVacancies } from "../../helpers/api"
import { setVacancies } from "../actions"

// const appendWithStatistics = (vacancyStatesArray, vacancyDetails) =>
//   vacancyStatesArray.map(state => {
//     const personsArray = vacancyDetails[state.id]
//     const count = personsArray ? personsArray.length : 0
//     state.count = count
//     return state
//   })

// function* vacancyDetailsSaga(vacancyId) {
//   const response = yield call(getVacancyDetails, { vacancyId })
//   return response.data.vacancyInterviewDetalInfo
// }

// function* appendWithStatisticsSaga(vacancyData) {
//   const { vacancyId, dc, dm, position, status } = vacancyData
//   const vacancyDetails = yield call(vacancyDetailsSaga, vacancyId)
//   const interviewStates = yield select(state => state.interviewStates)
//   const statistics = appendWithStatistics(interviewStates, vacancyDetails)
//   return {
//     vacancyId,
//     position,
//     status,
//     created: moment(dc),
//     modified: moment(dm),
//     statistics
//   }
// }

function* vacancySaga() {
  const allVacancyResponse = yield call(getVacancies)
  const vacancies = allVacancyResponse.data.objects
  const preparedVacancyList = vacancies.map(
    ({ vacancyId, dc, dm, position, status }) => ({
      vacancyId,
      position,
      status,
      created: moment(dc),
      modified: moment(dm)
    })
  )
  yield put(setVacancies(preparedVacancyList))
}

export default vacancySaga
