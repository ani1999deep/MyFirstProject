import React, { useEffect, useState } from 'react'

const GetMethod=()=> {
  const[data,setData]=useState([])

      useEffect(()=>{


// Fetch method call
      fetch("https://jsonplaceholder.typicode.com/users")
      
      //one promise
      .then((result)=>{

      result.json()
      
      //anthor promise
      .then((resp)=>{

          console.log(resp)
          setData(resp)
            
      })

      })

      },[])
      console.log(data)
  return (
    <div>
      <table border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        </tr>
       
          {
            data.map((item)=>
            
            <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        </tr>
            )
          }
       
      </table>
    </div>
  )
}

export default GetMethod
