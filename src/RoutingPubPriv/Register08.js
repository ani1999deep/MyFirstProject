import React from 'react'
import { Link } from 'react-router-dom'

function Register08() {
    const onSubmit=()=>{

        
    }
  return (
    <div style={{padding:'2rem'}}>
      <h1>Register</h1>
      <div>
        <div>Email</div>
        <div><input type='email'/></div>
      </div>

      <div>
        <div>PassWord</div>
        <div><input type='password'/></div>
      </div>
      <div>
        <Link to='/login'>Login</Link>
        &nbps;

        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Register08
