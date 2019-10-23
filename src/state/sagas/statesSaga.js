import { call, put } from "redux-saga/effects"
import { getInterviewStates } from "../../helpers/api"
import { setStates } from "../actions"

const validCustomStateKeys = [
  "e025c9f3fbf14cfb9c47cb09ec34adc3",
  "295efd0a033b42768d5416c849cd73c1"
]
const commonStates = [
  { id: "longlist", name: "Long List", type: "common" },
  { id: "test_task", name: "Test Task", type: "common" },
  { id: "interview", name: "Interview", type: "interview" },
  {
    id: "interview_with_the_boss",
    name: "Interview with CEO",
    type: "interview"
  }
]

function* statesSaga() {
  const response = yield call(getInterviewStates)
  const { interviewStates } = response.data.object
  const customStates = interviewStates
    .filter(state =>
      validCustomStateKeys.includes(state.customInterviewStateId)
    )
    .map(state => ({
      id: state.customInterviewStateId,
      name: state.name,
      type: state.type
    }))

  yield put(setStates([...customStates, ...commonStates]))
}

export default statesSaga
