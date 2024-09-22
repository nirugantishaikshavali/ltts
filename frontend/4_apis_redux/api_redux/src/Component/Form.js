import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {insertUsers} from "../store"

const Form = () => {
    let [name,setName]=useState("")
    let [gender,setGender]=useState("")
    let [data,setData]=useState({
        name:"",
        gender:""
    })
    let dispatch=useDispatch()
    const handleSubmit=()=>{
        setData({...data,name:name,gender:gender})
        dispatch(insertUsers(data))
        // setName("")
        // setGender("")
    }
    console.log("Form Data--->",data)
    return (
        <div style={{width:"400px"}}>
            <div>
                <label>Name</label>
                <input type='text' className='form-control' value={name} placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Gender</label>
                <select type='text' className='form-control' value={gender} placeholder='Enter Your Name' onChange={(e)=>setGender(e.target.value)}>
                    <option></option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>

                </select>
            </div>

            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
            
        </div>
    );
};

export default Form;