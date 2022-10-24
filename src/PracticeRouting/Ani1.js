import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ani1=()=> {
      const navigate=useNavigate()

      const data1=()=>{

            navigate("/ani3")
      }
  return (
    <>
      <div>
            <h1 >OK1</h1>
            <button onClick={data1}>Press here</button>
      </div>
    </>
  )
}

export default Ani1
