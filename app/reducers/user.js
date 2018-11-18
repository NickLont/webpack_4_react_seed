const initialState  = {
  loading: false,
  error: null,
  data: null
}

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_REQUEST' :
      return {
        loading: true,
        error: null,
        data: null
      }
    case 'FETCH_USER_SUCCESS' :
      return {
        loading: false,
        error: null,
        data: action.data
      }
    case 'FETCH_USER_FAILURE' :
      return {
        loading: false,
        error: action.error,
        data: null
      }
    default:
      return state
  }
}
