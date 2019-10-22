import { call, put } from "redux-saga/effects"
import { getInterviewStates } from "../../services/api"
import { setStates } from "../actions"

// TODO: some states are hardcoded
const commonStates = {
  longlist: {
    name: "Long List",
    type: "common"
  },
  interview: {
    name: "Interview",
    type: "interview"
  },
  test_task: {
    name: "Test Task",
    type: "common"
  },
  declinedoffer: {
    name: "Decline Offer",
    type: "common"
  },
  approved: {
    name: "Offer",
    type: "common"
  },
  notafit: {
    name: "Not fit",
    type: "common"
  }
}

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
  yield put(
    setStates({
      ...commonStates,
      ...customStates
    })
  )
}

export default statesSaga
