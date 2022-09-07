import React, { useCallback } from 'react'

const UseCallbackAni=()=> {
  const handleClick=useCallback(()=>{

    console.log('You are Clicked')
  })
  return (
    <div>
      <button onClick={()=>handleClick()}>Click Me</button>
    </div>
  )
}

export default UseCallbackAni
