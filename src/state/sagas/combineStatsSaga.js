import { select } from "redux-saga/effects"

function* combineStatsSaga() {
  const weekStatistic = yield select(state => state.weekStatistic)
  console.log(weekStatistic)
}

export default combineStatsSaga
