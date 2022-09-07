import React from 'react'
import { useParams } from 'react-router-dom'

const ContactAni=()=> {
    let {contactId}=useParams()
  return (
    <div>
      <h1>This is out Contact Page {contactId}</h1>
    </div>
  )
}

export default ContactAni
