import React, { useState } from 'react'

const FormAni=()=> {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[error,setError]=useState(false)

  const handleSubmit=(e)=>{

if(firstName.length==0||lastName.length==0){

  setError(true)
}

      e.preventDefault()

    if(firstName&&lastName){

      console.log("The First Name is:",firstName,"The Last Name is",lastName)
    }
  }
      
  return (
    <>
<form onSubmit={handleSubmit}>
      <div>
        <input onChange={e=>setFirstName(e.target.value)}/>
      </div>

      <div>{error&&firstName.length<=0?
        <label>The Fist Name can not be empty</label>:''}
      </div>

      <div>
        <input onChange={e=>setLastName(e.target.value)}/>
      </div>

      <div>{error&&lastName.length<=0?
        <label>The Last Name can not be empty</label>:""}
      </div>

      <div>
        <button>
        Submit
        </button>
        
      </div>
      </form>

    </>
  )
}

export default FormAni
