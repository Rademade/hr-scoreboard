import { takeLatest, takeEvery } from "redux-saga/effects"
import { START_SYNC, GET_VACANCY_LIST } from "../actionTypes"
import appSyncSaga from "./appSyncSaga"
import vacancySaga from "./vacancySaga"

function* rootSaga() {
  yield takeLatest(START_SYNC, appSyncSaga)
  yield takeEvery(GET_VACANCY_LIST, vacancySaga)
}

export default rootSaga
