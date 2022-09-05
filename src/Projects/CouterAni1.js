import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const CounterAni1=()=>{
  const[count,setCounter]=useState(0);
  return (
    <div>
        <h1>THE COUNTER IS: {count}</h1>
      <Button variant="primary" onClick={()=>setCounter(count+100)}>INCREMENT</Button>{' '}
      <Button variant="success"onClick={()=>setCounter(count-100)}>DECREMENT</Button>{' '}
      <Button variant="warning"onClick={()=>setCounter(0)}>RESET</Button>{' '}
    </div>
  )
}

export default CounterAni1
