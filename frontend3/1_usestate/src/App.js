import React,{useState} from 'react';

const App = () => {
  let [count,setCount]=useState(0)
  return (
    <div>
      <h1>Button clicked</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
};

export default App;