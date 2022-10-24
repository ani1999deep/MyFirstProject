import React, { useEffect, useState } from "react";
import axios from "axios";

const Apidemo = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")

      .then((response) => {
        console.log(response.data.data);

        setData(response.data.data);
      })

      .catch((error) => {
        console.log("Error arrise" + error);
      });
  }, []);
  return (
    <>
      <table border="2">
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>AVATAR</th>
        </tr>

  
         <tr>
        
            <td >{data.id}</td>
            <td>{data.email}</td>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td>{data.avatar}</td>
          </tr>
      
      </table>
    </>
  );
};

export default Apidemo;
