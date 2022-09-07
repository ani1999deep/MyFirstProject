import React, { useEffect, useState } from 'react'

const UseEffectAni=()=> {
    const[count,setCount]=useState(0)

    useEffect(()=>{

        document.title=`Your Counter is  ${count}`
    })

   
  return (
    <div>
        <h1>Couter is {count}</h1>
      <button onClick={()=>setCount(count+100)}>Click here</button>
    </div>
  )
}

export default UseEffectAni
