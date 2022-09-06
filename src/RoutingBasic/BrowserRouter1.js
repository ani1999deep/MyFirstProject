import React from 'react'
import { Link } from 'react-router-dom'

const BrowserRouter1=()=> {
  return (
    <>
      <ul>
<li>
    <Link to='/microsoft'>Microsoft</Link>
</li>
<li>

    <Link to='/twitter'>Twitter</Link>
</li>
<li>

    <Link to='/google'>google</Link>
</li>

      </ul>
    </>
  )
}

export default BrowserRouter1
