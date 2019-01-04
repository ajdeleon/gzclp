import { FETCH_WORKOUT, FETCH_WORKOUT_BY_NAME } from '../actions/types.js'
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WORKOUT:
      return action.payload || false
    case FETCH_WORKOUT_BY_NAME:
      return action.payload || false
    default:
      return state
  }
}
