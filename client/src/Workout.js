import React from 'react'
import TierContainer from './components/TierContainer'

// const Workout = ({lifts}) => (
//   {lifts.map((lift, i) => {
//     return <TierContainer tier={i + 1} lift={lift}/>
//   })}
// )

const Workout = ({lifts}) => {
  return lifts.map((lift, index) => {
    return <TierContainer tier={index + 1} lift={lift} />
  })
}

export default Workout
