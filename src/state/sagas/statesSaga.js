import { call, put } from "redux-saga/effects"
import { getInterviewStates } from "../../helpers/api"
import { setStates } from "../actions"

function* statesSaga() {
  const response = yield call(getInterviewStates)
  const { interviewStates } = response.data.object
  const customStates = {}
  interviewStates.forEach(state => {
    customStates[state.customInterviewStateId] = {
      name: state.name,
      type: state.type
    }
  })

  yield put(setStates(customStates))
}

export default statesSaga
