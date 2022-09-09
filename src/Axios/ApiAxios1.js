import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiAxios1 = () => {
  const [apireq, setApireq] = useState();
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")

      .then((response) => {
        console.log(response.data.data);
        setApireq(response.data.data);
      })

      .catch((error) => {
        // console.log('the error'+ error)
        console.log(`the error ${error}`);
      });
  });
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Frist Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        <tr>
          <td>{apireq.id}</td>
          <td>{apireq.email}</td>
          <td>{apireq.first_name}</td>
          <td>{apireq.last_name}</td>
          <td>{apireq.avatar}</td>
        </tr>
      </table>
    </div>
  );
};
export default ApiAxios1;
