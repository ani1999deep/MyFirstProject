import React, { useState } from 'react'

const UseStateAni=()=> {
    const[name,setName]=useState("IVAN")
  return (
    <div>
      <h1>This is a Usestate Example-{name}</h1>
      <button onClick={()=>setName('Ivan2')}>Click here</button>
    </div>
  )
}

export default UseStateAni
