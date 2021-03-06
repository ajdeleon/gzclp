import axios from 'axios'
import { FETCH_USER, FETCH_WORKOUT, FETCH_WORKOUT_BY_NAME } from './types'

export const fetchUser = userId => async dispatch => {
  const res = await axios.get(`/api/users/${userId}`)

  dispatch({ type: FETCH_USER, payload: res.data[0] })
}

export const fetchWorkout = userId => async dispatch => {
  const res = await axios.get(`/api/users/${userId}/workouts`)

  dispatch({ type: FETCH_WORKOUT, payload: res.data })
}

export const fetchWorkoutByName = (userId, workout) => async dispatch => {
  const res = await axios.get(`/api/users/${userId}/workouts/${workout}`)

  dispatch({ type: FETCH_WORKOUT_BY_NAME, payload: res.data })
}
