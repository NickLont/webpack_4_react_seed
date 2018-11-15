import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects"

function* exampleSaga() {
  try {
    yield put({ type: 'INCREMENT' })
    yield console.log("success")
  } catch (e) {
    yield console.log("error")
  }
}

function* sagaWatcher() {
  yield takeEvery("EXAMPLE_ACTION", exampleSaga)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    sagaWatcher()
  ])
}
