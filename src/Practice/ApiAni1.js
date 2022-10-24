import axios from 'axios'
import React, { useEffect, useState } from 'react'
const ApiAni1=()=> {

      const[api,setApi]=useState([])

      useEffect(()=>{

                  axios
                  .get('https://reqres.in/api/users?page=2')

                  .then((res)=>{

                        console.log(res.data.data)
                        setApi(res.data.data)
                  })

                  .catch((err)=>{

                        console.log(`the error is ${err}`)
                  })
      },[])
  return (
    <div>
     
      <tr>
            <th>id</th>
            <th>email</th>
            <th>first</th>
            <th>last</th>
            <th>avatar</th>
      </tr>
{api.map((aniOk)=>(
<tr>

<td>{aniOk.id}</td>
      <td>{aniOk.email}</td>
      <td>{aniOk.first_name}</td>
      <td>{aniOk.last_name}</td>
      <td>{aniOk.avatar}</td>
      <div>
            <img src={aniOk.avatar}/>
      </div>
</tr>
     
))}


    </div>
  )
}

export default ApiAni1
