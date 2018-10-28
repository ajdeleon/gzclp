import { FETCH_WORKOUT } from '../actions/types.js'
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WORKOUT:
      return action.payload || false
    default:
      return state
  }
}
