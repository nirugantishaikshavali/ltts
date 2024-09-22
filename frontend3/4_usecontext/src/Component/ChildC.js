import React,{useContext} from 'react';
import { data,data1 } from '../App';
const ChildC = () => {
    let firstName=useContext(data)
    let lastName=useContext(data1)
    return (
        <div>
            <h1>Hi My firstName is {firstName} and LastName is {lastName} </h1>
        </div>
    );
};

export default ChildC;