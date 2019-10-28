import { select, put } from "redux-saga/effects"
import { setGeneralStatistic } from "../actions"

function* combineStatsSaga() {
  const weekStatistic = yield select(state => state.weekStatistic)
  const statsArray = []
  Object.keys(weekStatistic).forEach(key => {
    statsArray.push(weekStatistic[key])
  })
  const result = statsArray.reduce((accumulator, item) => {
    for (let [key, value] of Object.entries(item)) {
      if (accumulator.hasOwnProperty(key)) {
        accumulator[key] = accumulator[key] + value
      } else {
        accumulator[key] = value
      }
    }
    return { ...accumulator }
  })
  yield put(setGeneralStatistic(result))
}

export default combineStatsSaga
