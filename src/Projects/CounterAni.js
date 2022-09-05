import React, { useState } from 'react'

const CounterAni=() =>{
    const[count,setCount]=useState(0)
  return (
    <div>
      <h1>The counter is:{count}</h1>
      <br></br>
      <button onClick={()=>setCount(count+10)}>Click here for Increment Counter</button>
      <br></br>
      <button onClick={()=>setCount(count-10)}>Click here for Decrement Counter</button>
      <br></br>
      <button onClick={()=>setCount(0)}>Click here for Rest Counter</button>
    </div>
  )
}

export default CounterAni
