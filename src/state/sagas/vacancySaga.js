import { call, put, select } from "redux-saga/effects"
import moment from "moment"
import { getVacancies } from "../../helpers/api"
import { setVacancies } from "../actions"

const statesToDelete = [
  "applied_people",
  "shortlist",
  "sent_offer",
  "accept_offer",
  "approved",
  "declinedoffer",
  "no_response",
  "is_not_looking_for_job",
  "notafit"
]

function* vacancySaga() {
  const allVacancyResponse = yield call(getVacancies)
  const vacancies = allVacancyResponse.data.objects
  const customStates = yield select(state => state.customStates)
  const formatedVacancies = vacancies.map(vacancy => {
    const { vacancyId, dc, dm, position, status, interviewStatus } = vacancy
    const filteredStates = interviewStatus
      .split(",")
      .filter(state => !statesToDelete.includes(state))
      .filter(state => {
        const customState = customStates[state]
        return !customState || customState.type !== "refuse"
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
