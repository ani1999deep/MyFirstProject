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
          <td>ID</td>
          <td>EMAIL</td>
          <td>FIRST NAME</td>
          <td>LAST NAME</td>
          <td>AVATAR</td>
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
