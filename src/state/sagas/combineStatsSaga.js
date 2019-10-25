import { select } from "redux-saga/effects"

function* combineStatsSaga() {
  const weekStatistic = yield select(state => state.weekStatistic)
  console.log(weekStatistic)

  // const vacancyKeys = Object.keys(weekStatistic)
}

export default combineStatsSaga
