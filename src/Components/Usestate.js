import React, { useState } from 'react'

const  Usestate=()=> {
    const [inputValue,newChangevalue]=useState('Anideep');

    const onChange=(event)=>{

const newVal=event.target.value;

newChangevalue(newVal)
    }

    console.log(inputValue);
  return (
    <div>
        <h1>{inputValue}</h1>
      <input type='text' value={inputValue} placeholder='Type something' onChange={onChange}/>
    </div>
  )
}

export default Usestate
