import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosAni1=()=>{

const[api,setApi]=useState([])

useEffect(()=>{

      axios
      .get('https://reqres.in/api/users?page=2')

      .then((res)=>{

            console.log(res.data.data)
            setApi(res.data.data)
      })

      .catch((err)=>{

            console.log(`The error arrise${err}`)
      })
},[])
      return(
            <div>
                  <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first name</th>
                        <th>last_name</th>
                        <th>avatar</th>
                  </tr>
                  {api.map((apiOk)=>(

                        <tr>
                              <td>{apiOk.id}</td>
                              <td>{apiOk.email}</td>
                              <td>{apiOk.first_name}</td>
                              <td>{apiOk.last_name}</td>
                              <td>{apiOk.avatar}</td>

                              <div>
                                    <img src={apiOk.avatar}/>
                              </div>
                        </tr>
                        
                  ))}

            
            </div>
      )
}

export default AxiosAni1