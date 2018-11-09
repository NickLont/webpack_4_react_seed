import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

function* exampleSaga() {
  try {
    yield console.log("success")
  } catch (e) {
    yield console.log("error")
  }
}

function* sagas() {
  yield takeLatest("EXAMPLE_ACTION", exampleSaga)
}

export default exampleSaga
