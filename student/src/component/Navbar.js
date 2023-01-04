import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div>
            <nav>
                <Link to ="/Student" name="Student">Student</Link>
                <Link to ="/User" name="User">User</Link>
                <Link to ="/" name="Home">Home</Link>
            </nav>

        </div>

    </div>

  )
}

export default Navbar