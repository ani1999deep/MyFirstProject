import React, { useState } from 'react'

const FormVal2=()=> {
      const[name,setName]=useState('');
      const[interest,setInterest]=useState('');
      const[TnC,setTnC]=useState(false);

       const handleSubmit=(e)=>{
            e.preventDefault()

            console.warn(`All data are: ${name} ${interest} ${TnC}`)
       }
  return (
    <div>
     <h1>Form Validation</h1>
     <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br></br>
      <select onChange={(e)=>setInterest(e.target.value)}>
            <option>Marvel</option>
            <option>DC</option>
      </select><br></br>
      <input type='checkbox' onChange={(e)=>setTnC(e.target.value)}/><span>Agree with terms and conditions</span><br></br>
      <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default FormVal2
