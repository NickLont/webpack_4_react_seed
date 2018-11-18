// action creators returning action objects
const fetchUserRequest = () => {
  return { type: 'API_CALL_REQUEST' }
}
const fetchUserSuccess = (data) => {
  return { type: 'API_CALL_SUCCESS', data }
}
const fetchUserFailure = (error) => {
  return { type: 'API_CALL_FAILURE', error }
}
const fetchUser = () => {
  return { type: 'FETCH_USER' }
}

export {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUser
}
