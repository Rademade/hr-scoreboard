import { takeLatest } from "redux-saga/effects"
import { START_SYNC } from "../actionTypes"
import appSyncSaga from "./appSyncSaga"
// import vacancySaga from "./vacancySaga"

function* rootSaga() {
  yield takeLatest(START_SYNC, appSyncSaga)
  // yield takeEvery(GET_VACANCY_LIST, vacancySaga)
}

export default rootSaga
