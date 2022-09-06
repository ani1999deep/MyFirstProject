import React from "react";

import { useState } from "react";

const Conditional3 = () => {
    const [isPreview, setIsPreview] = useState(true);
  
    if (isPreview) {
      return (
        <div>
        
          <button onClick={() => setIsPreview(false)}>flip is false</button>
          <h1>This is false Condtion</h1>
        </div>
      );
    } else {
      return (
        <div>
        <button onClick={() => setIsPreview(true)}>Flip is true</button>
        <h1>This is True Condtion</h1>
        </div>
      );
    }
  };
  
  export default  Conditional3;