import React from 'react'
import { Link } from 'react-router-dom'

const Layout1=()=> {
  return (
    <>
      <ul>

            <li>
                  <Link to='/ani1'>Ani1</Link>
            </li>

            <li>
                  <Link to='/ani2'>Ani2</Link>
            </li>

            <li>
                  <Link to='/ani3'>Ani3</Link>
            </li>
      </ul>
    </>
  )
}

export default Layout1
