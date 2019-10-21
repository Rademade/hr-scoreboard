import { call, put } from "redux-saga/effects"
import { getInterviewStates } from "../../services/api"
import { setStates } from "../actions"

function* statesSaga() {
  const response = yield call(getInterviewStates)
  const { interviewStates } = response.data.object
  const object = {}
  interviewStates.forEach(state => {
    object[state.customInterviewStateId] = {
      name: state.name,
      value: state.value
    }
  })
  yield put(setStates(object))
}

export default statesSaga
