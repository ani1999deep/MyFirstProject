import React, { useState } from 'react';

import './Components/counter12.css'

const Counter12 = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='ab'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 100)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 100)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        RESET
      </button>
    </div>
  );
}

export default Counter12