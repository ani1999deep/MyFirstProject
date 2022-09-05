import React, { useState } from "react";

const GetInput = () => {
  const [print, setPrint] = useState(false);
  const [data, setData] = useState(null);
  const getdata = (val) => {
    console.log(val.target.value);
    setData(val.target.value);
  };
  return (
    <div>
      <h1>Get Input Box!</h1>

      {print ? <h1>THE INPUT DATA- {data}</h1> : null}
      <br></br>
      <input type="text" onChange={getdata} />
      <button onClick={() => setPrint(true)}>Print data</button>
    </div>
  );
};

export default GetInput;
