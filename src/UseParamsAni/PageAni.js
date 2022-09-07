import React from 'react'
import { useParams } from 'react-router-dom'
const PageAni=()=> {
    let {pageId}=useParams()
  return (
    <div>
         <h1>This is Page {pageId}</h1>
    </div>
     
    
  )
}

export default PageAni
