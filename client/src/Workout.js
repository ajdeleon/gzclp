import React from 'react'
import TierContainer from './components/TierContainer'

const Workout = ({t1lift, t2lift, t3lift}) => (
  <>
    <TierContainer tier="t1" lift={t1lift}/>
    <TierContainer tier="t2" lift={t2lift}/>
    <TierContainer tier="t3" lift={t3lift}/>
  </>
)

export default Workout
