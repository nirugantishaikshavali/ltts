import React, { useState, useEffect } from 'react';
import { fetchData, DelData, AddData,updateData } from './Components/api';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from './Components/Table';
import Forms from './Components/Forms';

const App = () => {
    let [table_data, set_tableData] = useState([]);
    let [form, setForm] = useState(false);
    let [form_data, setFormData] = useState({
        "emp_name": "",
        "skills": []
    });
    let [edit,setEdit]=useState(false)

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let data = await fetchData();
        set_tableData(data);
    };

    const delData = async (id) => {
        await DelData(id);
        getData();
    };

    const openForm = () => {
        setForm(true);
        setFormData(

          {
            "emp_name": "",
            "skills": []
        })


    };

    const closeForm = () => {
      setForm(false);
  };

    const AddDatas = async (data) => {
      if (edit){
        const {emp_id}=data
        await updateData(emp_id,data)
        
        setEdit(false)

      }
      else{
        await AddData(data);
        setEdit(false)

      }
        getData();
    };

    const EditForm=(data)=>{
      console.log("Edit Data--->",data)
      setEdit(true)
      setFormData(data)
      setForm(true);

    }

    return (
        <div>
            <div>
                <h3>Crud Operation</h3>
                <button onClick={openForm}>Add+</button>
            </div>
            {
                form && <Forms datas={AddDatas} form_datas={form_data} close={closeForm} />
            }
            <Table table_data={table_data} delete_id={delData} edits={EditForm}/>
        </div>
    );
};

export default App;
