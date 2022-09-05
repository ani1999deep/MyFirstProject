import React, { useState } from "react";

import Button from "react-bootstrap/Button";

const Counter241 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>YOUR COUNTER COUNT IS: {count}</h1>
      <Button variant="success" onClick={() => setCount(count + 100)}>
        Increment
      </Button>{" "}
      <Button variant="danger" onClick={() => setCount(count - 100)}>
        Decrement
      </Button>{" "}
      <Button variant="warning" onClick={() => setCount(0)}>
        Reset
      </Button>{" "}
    </div>
  );
};

export default Counter241;
