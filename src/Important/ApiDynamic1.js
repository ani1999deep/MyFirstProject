import React, { useState } from "react";
import axios from "axios";
const ApiDynamic1 = () => {
  const [apis, setApi] = useState([]);

  const fetchapi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        console.log(response.data);

        setApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        {/* <button onClick={fetchapi}>Click me Haga</button> */}

        <div>
          <select>
            {apis.map((api) => {
              <option value={api.id}>{api.name}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default ApiDynamic1;
