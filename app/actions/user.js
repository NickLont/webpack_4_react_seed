// action creators returning action objects
const fetchUserRequest = () => {
  return { type: 'FETCH_USER_REQUEST' }
}
const fetchUserSuccess = (data) => {
  return { type: 'FETCH_USER_SUCCESS', data }
}
const fetchUserFailure = (error) => {
  return { type: 'FETCH_USER_FAILURE', error }
}
const fetchUser = (user) => {
  return { type: 'FETCH_USER', data: user }
}

export {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUser
}
