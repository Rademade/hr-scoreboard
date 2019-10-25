import { call, put, select } from "redux-saga/effects"
import moment from "moment"
import { getVacancies } from "../../helpers/api"
import { setVacancies } from "../actions"

const statesToDelete = [
  "applied_people",
  "shortlist",
  "approved",
  "declinedoffer",
  "no_response",
  "is_not_looking_for_job",
  "notafit",
  "accept_offer",
  "test_task",
  "interview_with_the_boss"
]

function* vacancySaga() {
  const allVacancyResponse = yield call(getVacancies)
  const vacancies = allVacancyResponse.data.objects
  console.log(vacancies)
  const customStates = yield select(state => state.customStates)
  const formatedVacancies = vacancies.map(vacancy => {
    const { vacancyId, dc, dm, position, status, interviewStatus } = vacancy
    const filteredStates = interviewStatus
      .split(",")
      .filter(state => !statesToDelete.includes(state))
      .filter(state => {
        const customState = customStates[state]
        return (
          !customState ||
          (customState.type !== "refuse" &&
            customState.name !== "Under consideration" &&
            customState.name !== "Interview with the team")
        )
      })
    return {
      vacancyId,
      position,
      status,
      created: moment(dc),
      modified: moment(dm),
      states: filteredStates
    }
  })
  yield put(setVacancies(formatedVacancies))
}

export default vacancySaga
