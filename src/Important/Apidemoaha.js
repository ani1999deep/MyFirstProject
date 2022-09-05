import React, { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';

import axios from "axios";

const Apidemoaha = () => {
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
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>AVATAR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.email}</td>
          <td>{data.first_name}</td>
          <td>{data.last_name}</td>
          <td>{data.avatar}</td>
        </tr>
        
      </tbody>
    </Table>
    </>
  );
};

export default Apidemoaha;
