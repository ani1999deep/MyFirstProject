import React from 'react'
import UpdatedCompnent from './HOC.JS'

function Person1({money,handleIncrease}) {

      
  return (
    <div>
      <h1>Anideep is offering ${money}</h1>
      <button onClick={handleIncrease}>Increasing Money</button>
    </div>
  )
}

export default UpdatedCompnent(Person1);
