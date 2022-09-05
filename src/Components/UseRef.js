// When Manupulation of DOM element then we use useRef

import React, { useRef } from 'react'

const UseRef=()=> {
 
const inputRef=useRef()

    const handleClick=()=>{

        console.log(inputRef,'OKey the ref is working')



        // focus() is a method
        // inputRef.current.focus()

        // when the value is show into the box

        // inputRef.current.value='Ani';

        // When get input from user
        console.log(inputRef.current.value)

        // When add css 

        inputRef.current.style.color='red'

        // When input hide
        inputRef.current.style.display='none'

       
    }
  return (
    <div>

      <input ref={inputRef} type='text'/>

      <button onClick={handleClick}>Click Here</button>

    </div>
  )
}

export default UseRef
