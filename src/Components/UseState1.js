import React, { useState } from 'react'

const UseState1=()=> {
 const[inputvalue,updatedValue]=useState('Ajay');

 const changeVal=(event)=>{

    const newValu=event.target.value;
    updatedValue(newValu)
 }

  return (
    <div>
        <h1>{inputvalue}</h1>
      <input type='text' placeholder='Insert text' onChange={changeVal}></input>
    </div>
  )
}

export default UseState1
