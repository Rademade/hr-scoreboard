import { select, put } from "redux-saga/effects"
import { setGeneralStatistic } from "../actions"

const summOf = objects =>
  objects.reduce((a, b) => {
    for (let k in b) {
      a[k] = (a[k] || 0) + b[k]
    }
    return a
  }, {})

function* combineStatsSaga() {
  const weekStatistic = yield select(state => state.weekStatistic)
  const combined = summOf(Object.values(weekStatistic))
  yield put(setGeneralStatistic(combined))
}

export default combineStatsSaga
