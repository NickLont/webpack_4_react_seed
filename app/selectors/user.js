import { createSelector } from 'reselect'

const getUserFromStore = state => state.get('user')

const getUserLoading = createSelector(
  getUserFromStore,
  (user) => user.get('loading')
)
const getUserError = createSelector(
  getUserFromStore,
  (user) => user.get('error')
)
const getUser = createSelector(
  getUserFromStore,
  (user) => user.get('data')
)

export {
  getUserFromStore,
  getUser,
  getUserError,
  getUserLoading
}
