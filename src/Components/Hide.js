import React, { useState } from 'react'

import "./Components/hide.css"

const Hide=()=> {

    const[hide,setHide,oho]=useState(true)
  return(

<div className='ac'>
  {
//  This is if else statement write like this'hide?<h1></h1>:null'

hide?<h1 >Hello!</h1>:null
  }
<button onClick={()=>setHide(true)}>Show</button>

<button onClick={()=>setHide(false)}>Hide</button>

</div>

  )
 
    
}

export default Hide
