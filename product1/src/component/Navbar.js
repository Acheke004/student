import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <div>
      <div>
        <Link to='/student'>Student</Link>
        <Link to='/home'>home</Link>
        <Link to='/signup'>signup</Link>
      </div>
    </div>
  )
}

export default Navbar