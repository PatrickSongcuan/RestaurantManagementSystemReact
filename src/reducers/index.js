import { combineReducers } from 'redux'
import Auth from './authReducer'
import Another from './anotherReducer'

export default combineReducers({
  Auth,
  Another
})