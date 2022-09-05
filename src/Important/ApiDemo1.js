import React from "react";

import axios from "axios";

 export default class ApiDemo24 extends React.Component {
  state = {
    id: "",

    email: "",

    firstname: "",

    lastname: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://reqres.in/api/users/2",
        { id: this.state.id },
        { email: this.state.email },
        { firstname: this.state.first_name },
        { lastname: this.state.last_name }
      )

      .then((response) => {
        console.log("Perfectly Working");

        this.setState({
          id: response.data.data.id,

          email: response.data.data.email,

          firstname: response.data.data.first_name,

          lastname: response.data.data.last_name,
        });
      })

      .catch((error) => {
        console.log("error is arrise" + error);
      });
  }

  render() {
    return (
      <div>
        <table border='2'>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
          </tr>

          <tr>
            <td>{this.state.id}</td>
            <td>{this.state.email}</td>
            <td>{this.state.firstname}</td>
            <td>{this.state.lastname}</td>
          </tr>
        </table>
      </div>
    );
  }
}

