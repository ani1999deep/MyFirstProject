import React, { useState } from 'react'

const Hook2=()=> {

    const initialCount=0

     const[count,setCount]=useState(initialCount)

const incremenFive=()=>{

    for(let i=0;i<10;i++){

        setCount(prevCount=>prevCount+1)
    }
}
   
  return (
    <div>
        Count1:{count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>

      <button onClick={()=>setCount(count+1)}>Increment</button>

      <button onClick={()=>setCount(count-1)}>Decrement</button>

      <button onClick={incremenFive}>Increment by 10</button>
    </div>
  )
}

export default Hook2
