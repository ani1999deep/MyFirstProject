import React, { useState } from "react";


const Form23=()=>{

    // useState is for name,id,option,TnC

    const[name,setName]=useState("")
    const[id,setId]=useState("")
    const[option,setOption]=useState("")
    const[Tnc,setTnc]=useState(false)



    // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    // Clicking on a "Submit" button, prevent it from submitting a form

    const handleData=(e)=>{

        e.preventDefault()

        console.log("All data",name,id,option,Tnc)
    }

return(

    <div>
<h1>Hello!</h1>

<form onSubmit={handleData}>
<input type='text' placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
<br></br>
<br></br>
<input type='text' placeholder="Enter your id" onChange={(e)=>setId(e.target.value)}/>
<br></br>
<br></br>
<label>Select your company you want to go:</label>
<select onChange={(e)=>setOption(e.target.value)}>
    <option>Microsft</option>
    <option>Google</option>
    <option>Apple</option>
</select>
<br></br>
<br></br>
<input type='checkbox' onChange={(e)=>setTnc(e.target.value)} /><span>Agree with terms and conditions</span>
<br></br>
<br></br>
<button type="submit">Click here</button>
</form>


    </div>

)

}
export default Form23;