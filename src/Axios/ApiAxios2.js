import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
const ApiAxios2 = () => {
  const [apireq, setApireq] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")

      .then((res) => {
        console.log(res.data.data);
        setApireq(res.data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
    
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>

          {apireq.map((apiOk) => (
            <tr>
              <td>{apiOk.id}</td>
              <td>{apiOk.email}</td>
              <td>{apiOk.first_name}</td>
              <td>{apiOk.last_name}</td>
              <td>{apiOk.avatar}</td>
              <div>
    <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={apiOk.avatar} />
                </Card>
    </div>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default ApiAxios2;
