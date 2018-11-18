import { call, put, takeLatest } from "redux-saga/effects"
import { UserActions } from 'actions'
import * as Api from 'utils/api'

function* fetchUser(user) {
  try {
    yield put(UserActions.fetchUserRequest())
    // (user) is the object returned from fetchUser action creator, so it is { type: 'FETCH_USER', data: user }
    const data = yield call(Api.User.fetchUser, user.data)
    yield put(UserActions.fetchUserSuccess(data))
  } catch (error) {
    yield put(UserActions.fetchUserFailure(error))
    console.log('api call error: ', error)
  }
}

export function* userSagaWatcher() {
  yield takeLatest("FETCH_USER", fetchUser)
}
