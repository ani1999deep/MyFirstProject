import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomeNav=()=> {
    const navigate=useNavigate()
  return (
    <div>
      <h1 style={{color:'red'}}>This is HOME PAGE</h1>
      <button onClick={()=>navigate('/aboutnav')}>Click Here</button>
    </div>
  )
}

export default HomeNav
