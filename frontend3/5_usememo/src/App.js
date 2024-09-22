import React,{useState,useMemo} from 'react';

const App = () => {
  let [add,setAdd]=useState(0)
  let [sub,setSub]=useState(100)

  // const mulfun=()=>{
  //   console.log("*****")
  //   return add*100
  // }

  const mulfun=useMemo(()=>{
    console.log("*****")
    return add*100
  },[add])

  return (
    <div>
      <p>{mulfun}</p>
      <p>{add}</p>
      <br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <br/>

      <p>{sub}</p>
      <button onClick={()=>setSub(sub-1)}>Substraction</button>

    </div>
  );
};

export default App;