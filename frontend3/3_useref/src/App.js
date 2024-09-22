import React,{useState,useRef} from 'react';

const App = () => {
  const [name,setName] = useState("rohit")
  const refElement=useRef("")
  const handleSubmit=()=>{
    // setName("")
    refElement.current.style.color="pink"
  }
  return (
    <div>
      <h1>Learning useRef</h1>
      <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Reset</button>
      
    </div>
  );
};

export default App;