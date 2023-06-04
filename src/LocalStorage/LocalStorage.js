import React, { useRef } from 'react'

const LocalStorage=()=> {

  const data=useRef()

  const handleClick=()=>{

    console.log(data.current.value,"initial value")
    localStorage.setItem("inputvalue",data.current.value)
  }

  console.log(localStorage.getItem("initialvalue"),"****")
  
  return (
    <>
      <input ref={data}/>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default LocalStorage
