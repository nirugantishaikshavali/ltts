import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  let [name,setName]=useState("")
  let [gender,setGender]=useState("")
  let [id,setId]=useState(3)
  const [data,setData]=useState([
    {
      id:1,
    name:"Ram",
    gender:"male"
    },
    {
      id:2,
    name:"Baby",
    gender:"female"
    }
    ])
  
    const [edit,setEdit]=useState(false)
    const [searchItem,setSearchItem]=useState("")
    const [genderSelection,setGenderSelection]=useState({
      male:false,
      female:false
    })

  
  const handleSubmit=()=>{
    setId(id+1)
    setData([...data,{id:id,name:name,gender:gender}])
    setName("")
    setGender("")
  }

  const handleDelete=(selectedId)=>{
    const filterData=data.filter((item)=>item.id!==selectedId)
    setData(filterData)
  }

  const handleSave=()=>{
    console.log("Current Id--->",id)
    if(id){
      console.log("id---->",id)
      console.log("name---->",name)
      console.log("gender---->",gender)
      const updateData=data.map((item)=>item.id===id?{...item,name:name,gender:gender}:item)
      console.log("updateData--->",updateData)
      setData(updateData)
    }

  }

  const handleEdit=(selectedId)=>{
    const filterData=data.find((item)=>item.id===selectedId)
    console.log("filterData--->",filterData)
    setId(filterData.id)
    setName(filterData.name)
    setGender(filterData.gender)
    setEdit(true)
  }


  const handleGender = (selectedGender) => {
    setGenderSelection((prevSelection) => ({
      ...prevSelection,
      [selectedGender]: !prevSelection[selectedGender]
    }));
  };


  
  const filterTableData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchItem.toLowerCase());
    const genderMatch = (genderSelection.male && item.gender === "male") ||
                        (genderSelection.female && item.gender === "female") ||
                        (!genderSelection.male && !genderSelection.female);
    return nameMatch && genderMatch;
  });


  console.log("selection Gender----->",genderSelection)


  return (
    <div>
      <h1>Objects</h1>

      <div>
        <label>Search Items</label>
      <input type='text'  className='form-control' style={{width:"300px"}} placeholder='Search Items Here'
       value={searchItem}
       onChange={(e)=>setSearchItem(e.target.value)}/>

      </div>

      <div>
        <input type='radio' onChange={()=>handleGender("male")}/>
        <label>Male</label>

        <input type='radio' onChange={()=>handleGender("female")}/>
        <label>FeMale</label>
      </div>


    <div style={{width:"400px",border:"2px solid black",display:"flex",flexDirection:"column",padding:"10px"}}>

      <div >


      <label>Name</label>
      <input type='text' placeholder='Enter Your Name' className='form-control'
      onChange={(e)=>setName(e.target.value)}
       name="name" value={name}/>
      </div>

      <div>
        <label>Gender</label>
        <select className='form-control' name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option></option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>

        </select>
      </div>

      {/* <button className='btn btn-primary float-end mt-2' onClick={()=>handleSubmit()}>Submit</button> */}

      {
        edit?      <button className='btn btn-primary float-end mt-2' onClick={()=>handleSave()}>Save</button>

        :      <button className='btn btn-primary float-end mt-2' onClick={()=>handleSubmit()}>Submit</button>

      }


      </div>


     <table className='table table-bordered w-50 mt-5'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          
        </tr>
      </thead>
      <tbody>
        {
          // data.filter((item)=>item.name.toLowerCase().includes(searchItem.toLowerCase()))

          filterTableData
          .map((item)=><tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>
              <button className='btn btn-primary mx-2 float-end' onClick={()=>handleEdit(item.id)}>Edit</button>
              <button className='btn btn-danger mx-2 float-end'  onClick={()=>handleDelete(item.id)}>Delete</button>
            </td>

          </tr>)
        }
      </tbody>
     </table>
      
    </div>
  );
};

export default App;