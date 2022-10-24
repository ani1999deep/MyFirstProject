import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiAxios3 = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")

      .then((res) => {
        console.log(res.data.data);
        setApi(res.data.data);
      })

      .catch((err) => {
        console.log(`the ${err}`);
      });
  }, []);
  return (
    <div>
      <select>
        <option>--select the value--</option>
        {api.map((aniOk) => (
          <option>{aniOk.first_name}</option>
        ))}
      </select>
    </div>
  );
};

export default ApiAxios3;
