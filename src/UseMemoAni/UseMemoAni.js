
import { useState, useMemo } from "react";
 const UseMemoAni=()=> {
  const [grade, setGrade] = useState(6);
  const countPopulation = (grade) => {
    return grade ** 2;
  };

  const memoizedVal = useMemo(() => countPopulation(grade), []);

  return (
    <div className="App">
      <p>Current Grade: {grade}</p>
      <p>Current Population: {memoizedVal}</p>
    </div>
  );
}

export default UseMemoAni
