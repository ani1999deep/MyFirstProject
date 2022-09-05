// Restuns memorized value
import React, { useMemo, useState } from 'react'

const UseMemo=()=> {

    const[countOne,setCountone]=useState(0)

    const[countTwo,setCounttwo]=useState(0)

    const increment=()=>{

        setCountone(countOne+1)
    }

    const decrement=()=>{

        setCounttwo(countTwo+1)
    }

    // use of useMemo hook
    const isEven= useMemo(()=>{

        for(let i=0;i<1000000;i++){}

        return countOne%2===0
    },[countOne])

    
  return (
    <div>
        {/* Checking tarneary operator for useing odd and even */}
      <button onClick={increment}>Count One{countOne} </button>{isEven? 'even':'odd'}<br/>

      <button onClick={decrement}>Count Two {countTwo}</button>
    </div>
  )
}

export default UseMemo
