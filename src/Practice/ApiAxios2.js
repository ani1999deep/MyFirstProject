import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiAxios2=()=>{
 const[api,setApi]=useState('')

 useEffect(()=>{

      axios
      .get('https://reqres.in/api/users/2')
      .then((res)=>{

            console.log(res.data.data)
            setApi(res.data.data)
      })

      .catch((err)=>{

            console.log(`the error is ${err}`)
      })

 },[])

      return(

            <div>
            <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Avatar</th>
            </tr>
            <tr>
                  <td>{api.id}</td>
                  <td>{api.email}</td>
                  <td>{api.first_name}</td>
                  <td>{api.last_name}</td>
                  <td>{api.avatar}</td>
                  <div>
                        <img src={api.avatar}/>
                  </div>
            </tr>
            </div>
      )
}
export default ApiAxios2