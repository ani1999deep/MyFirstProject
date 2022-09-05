import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Apireqres1 = () => {
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        console.log(response.data.data);

        setDemo(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      }, []);
  });
  return (
    <>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>EMAIL</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
            </tr>
          </thead>
          <tbody>
            {demo.map((demo1) => (
               <tr key={demo1.id}>
                <td>{demo1.id}</td>
                <td>{demo1.email}</td>
                <td>{demo1.first_name}</td>
                <td>{demo1.last_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Apireqres1;
