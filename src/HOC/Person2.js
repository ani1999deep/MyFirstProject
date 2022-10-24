import React from 'react'
import { useState } from 'react'

function Person2(money,handleIncrease) {
      
  return (
    <div>
      <h1>Babuli is offering ${money}</h1>
      <button onClick={handleIncrease}>Increasing Money</button>
    </div>
  )
}

export default Person2
