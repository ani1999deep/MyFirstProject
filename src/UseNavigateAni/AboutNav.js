 import React from 'react'
import { useNavigate } from 'react-router-dom'
 
const AboutNav=()=> {
    const navigate=useNavigate();
   return (
     <div>
       <h1 style={{color:'green'}}>This is an About Page</h1>
       <button onClick={()=>navigate('/')}>Click Here</button>
     </div>
   )
 }
 
 export default AboutNav
 