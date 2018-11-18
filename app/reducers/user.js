const initialState  = {
  fetching: false,
  error: null,
  user: null
}

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL_REQUEST' :
      return {
        fetching: true,
        error: null,
        user: null
      }
    case 'API_CALL_SUCCESS' :
      return {
        fetching: false,
        error: null,
        user: action.data
      }
    case 'API_CALL_FAILURE' :
      return {
        fetching: false,
        error: action.error,
        user: null
      }
    default:
      return state
  }
}
