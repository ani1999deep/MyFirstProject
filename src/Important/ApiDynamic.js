import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiDynamic = () => {
  const [users, setUsers] = useState([]);

  

useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        
        console.log(error);
      },[]);
  });
  return (
<>
   
    <div>
     
      <h1>Dynamic List Rendering</h1>
      <select>
        <option value='0'>--Select the User--</option>
        {
            users.map(user=>
                
                <option key={user.id} value={user.id}>{user.name}</option>
                )
        }
      </select>
    </div>
    </>
  );
};

export default ApiDynamic;
