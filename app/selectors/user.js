import { createSelector } from 'reselect'

const getUserFromStore = state => state.get('user')

// Reselect memoized selectors. If the values of the input-selectors are the same as the previous call to the selector,
//  it will return the previously computed value instead of calling the transform function.
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
