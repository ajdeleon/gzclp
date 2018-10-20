import React from 'react'

const TierContainer = ({ tier, lift }) => (
  <div className="flex center w-90 h-25 mh2">
    <div className="flex outline w-25 f2 items-center justify-center">
      t{tier}
    </div>
    <div className="flex flex-column outline w-50 f3 items-center pt2">
      <div className=" mb2">{lift}</div>
      <div className="">This many pounds</div>
    </div>
    <div className="flex flex-column outline w-25">
      <div className="outline h-50">
        <button className="w-100 h-100">Completed</button>
      </div>
      <div className="outline h-50">
        <button className="w-100 h-100">Failed</button>
      </div>
    </div>
  </div>
)

export default TierContainer
