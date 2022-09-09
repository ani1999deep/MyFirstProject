import React from 'react'
import { Link } from 'react-router-dom'

function Login08(props) {
    const onSubmit=()=>{
localStorage.setItem('token','randomValue')
       
props.history.push('/dashboard')
    }
  return (
    <div style={{padding:'2rem'}}>
      <h1>Login</h1>
      <div>
        <div>Email</div>
        <div><input type='email'/></div>
      </div>

      <div>
        <div>PassWord</div>
        <div><input type='password'/></div>
      </div>
      <div>
        <Link to='/register'>Register</Link>
        &nbps;

        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login08
