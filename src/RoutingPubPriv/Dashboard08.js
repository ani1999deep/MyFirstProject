import React from 'react'

const Dashboard08=(props)=> {
    document.title='Dashboard';

    const onLogout=()=>{

      localStorage.removeItem('token')
        props.history.push('/')
    };
  return (
    <div style={{padding:"2rem"}}>
     <h1>Dashboard</h1>
     <button onClick={onLogout}>Log Out</button> 
    </div>
  )
}

export default Dashboard08
