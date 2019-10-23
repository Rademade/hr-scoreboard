import { put, call } from "redux-saga/effects"
import { setRecruters } from "../actions"
import { getAllPersons } from "../../helpers/api"

const filterRecruters = recruiters => {
  const arr = []
  Object.keys(recruiters).forEach(key => {
    const recruter = recruiters[key]
    const { recrutRole } = recruter
    if (recrutRole === "admin" || recrutRole === "recruter") {
      arr.push(recruter)
    }
  })
  return arr
}

function* usersSaga() {
  const allPersonsResponse = yield call(getAllPersons)
  const allPersons = allPersonsResponse.data.object
  yield put(setRecruters(filterRecruters(allPersons)))
}

export default usersSaga
