import React,{createContext} from 'react';
import ChildA from './Component/ChildA';
const data=createContext()
const data1=createContext()

const App = () => {
  const name="Rama"
  const name2="Shaikshavali"
  return (
    <div>
      <data.Provider value={name}>
      <data1.Provider value={name2}>
      <ChildA/>
        </data1.Provider>
      </data.Provider>
      
    </div>
  );
};

export default App;

export {data,data1}