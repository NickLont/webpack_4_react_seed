import { combineReducers } from 'redux'
import UserReducer from './user'

// combine all reducers here and optionally give key for store
export default combineReducers({
  user: UserReducer
})
