import { combineReducers } from 'redux'
import userReducer from './userReducer'
import workoutReducer from './workoutReducer'

export default combineReducers({
  user: userReducer,
  workout: workoutReducer,
})
