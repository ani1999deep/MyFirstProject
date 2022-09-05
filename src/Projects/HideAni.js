import React from 'react'

const HideAni=()=> {
    const[status,setStatus]=React.useState(true)
  return (
    <div>
        {
            status?<h1>Hello!</h1> :null
        }
     
     <button onClick={()=>setStatus(false)}>Hide</button>
     <button onClick={()=>setStatus(true)}>Show</button>
    </div>
  )
}

export default HideAni
