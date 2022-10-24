import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosAni=()=>{

const[api,setApi]=useState('');
useEffect(()=>{

      axios 
      .get('https://reqres.in/api/users/2')

      .then((res)=>{

            console.log(res.data.data)
            setApi(res.data.data)
      })

      .catch((err)=>{

            console.log(`The error arrise ${err}`)
      })
})
      return(


            <>
           <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Nmae</th>
            <th>Last Name</th>
            <th>Avatar</th>
           </tr>
           <tr>

            <td>{api.id}</td>
            <td>{api.email}</td>
            <td>{api.first_name}</td>
            <td>{api.last_name}</td>
            <td>{api.avatar}</td>
           </tr>
            </>
      )
}

export default AxiosAni;