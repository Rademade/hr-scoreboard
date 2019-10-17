import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import * as api from "../../services/api"

function* vacancySaga(action) {
  try {
    const vacanciesResponse = yield call(api.vacanciesRequest, {
      personId: action.personId
    })
    yield put(
      actions.setVacancies({
        vacancyList: vacanciesResponse.data.objects,
        personId: action.personId
      })
    )
  } catch (error) {
    yield put(actions.setError(error))
  }
}

export default vacancySaga
