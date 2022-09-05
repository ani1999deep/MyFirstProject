import axios from 'axios'
import React, { useEffect, useState } from 'react'


import Table from 'react-bootstrap/Table';

const  Apidemoic=() =>{

    const[apio,setApio]=useState({})

    useEffect(()=>{

        axios.get('https://reqres.in/api/users/2')
        .then((response)=>{

            console.log(response.data.data)

            setApio(response.data.data)
        })

        .catch((error)=>{

            console.log(error)
        })
    })
  return (
    <div>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>AVATAR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{apio.id}</td>
          <td>{apio.email}</td>
          <td>{apio.first_name}</td>
          <td>{apio.last_name}</td>
          <td>{apio.avatar}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default Apidemoic
