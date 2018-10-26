import React from 'react'
import TierContainer from './components/TierContainer'

const Workout = ({lifts}) => {
  return lifts.map((lift, index) => {
    return <TierContainer tier={index + 1} lift={lift} key={lift} />
  })
}

export default Workout
