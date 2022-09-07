import React, { useState } from 'react'

const UseEffectAni2=()=> {
    const[message,setMessage]=useState('Hi! How are you? ')

    setTimeout(()=>{

        setMessage('I am Fine!')
    },3000)
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default UseEffectAni2
