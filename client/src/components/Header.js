import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="flex center justify-between f3 w-90 ph3 mb1">
    <Link to="a1" className="link blue">
      <div>A1</div>
    </Link>
    <Link to="b1" className="link blue">
      <div>B1</div>
    </Link>
    <Link to="a2" className="link blue">
      <div>A2</div>
    </Link>
    <Link to="b2" className="link blue">
      <div>B2</div>
    </Link>
  </div>
)

export default Header
