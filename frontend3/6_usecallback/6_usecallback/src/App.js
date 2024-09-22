import React,{useState,useCallback} from 'react';
import ChildA from './ChildA';
const App = () => {
  const [add,setAdd]=useState(0);
  const [count,setCount]=useState(0)
  const Leaarning=useCallback(()=>{

  },[count])
  return (
    <div className='App'>
      <h1>Learning useCallBack</h1>
      <ChildA Leaarning={Leaarning}/>
      <h1>{add}</h1>
      <button  onClick={()=>setAdd(add+1)}>Addition</button>
      <h1>{count}</h1>
      <button  onClick={()=>setCount(count+1)}>Count</button>

    </div>
  );
};

export default App;