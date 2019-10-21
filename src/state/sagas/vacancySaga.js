import { call, put } from "redux-saga/effects"
import { setVacancyDetails, setError } from "../actions"
import { detailsRequest } from "../../services/api"

function* vacancySaga(action) {
  try {
    const vacanciesResponse = yield call(detailsRequest, {
      vacancyId: action.vacancyId
    })
    yield put(
      setVacancyDetails({
        vacancyId: action.vacancyId,
        detailedInfo: vacanciesResponse.data.vacancyInterviewDetalInfo
      })
    )
  } catch (error) {
    yield put(setError(error))
  }
}

export default vacancySaga
