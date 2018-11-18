import { call, put, takeLatest } from "redux-saga/effects"
import { UserActions } from 'actions'
import * as Api from 'utils/api'

function* fetchUser() {
  try {
    yield put(UserActions.fetchUserRequest())
    const data = yield call(Api.User.fetchUser('someUrl'))
    yield put(UserActions.fetchUserSuccess(data.toJS()))
  } catch (error) {
    yield put(UserActions.fetchUserFailure(error))
  }
}

export function* userSagaWatcher() {
  yield takeLatest("FETCH_USER", fetchUser)
}
