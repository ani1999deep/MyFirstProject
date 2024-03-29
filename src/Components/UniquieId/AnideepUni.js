import { v4 as uuid } from 'uuid';
  
export default function AnideepUni() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,4)
  return (
    <div className="App">
      <h1>Unique ID</h1>
      <p>{unique_id}</p>
      <h1>Sliced Unique ID</h1>
      <p>{small_id}</p>
    </div>
  );
}