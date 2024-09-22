import React, { useState } from 'react';

const Forms = ({ datas, form_datas,close }) => {
    let [emp, setEmp] = useState(form_datas);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "skills") {
            setEmp((prev) => ({
                ...prev,
                skills: [...prev.skills, value]
            }));
        } else {
            setEmp((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    console.log("emp--->", emp);

    const handleSubmit = () => {
        datas(emp);
        close()
    };

    return (
        <div>
            <div>
                <label>Emp Name</label>
                <input type='text' value={emp.emp_name} name="emp_name" className='form-control' placeholder='Enter your Name' onChange={handleChange} />
            </div>

            <div>
                <label>Skills</label>
                <select name="skills"  value={emp.skills} className='form-control' placeholder='Enter your skills' onChange={handleChange}>
                    <option value={""}></option>
                    <option value={"python"}>python</option>
                    <option value={"react"}>react</option>
                    <option value={"restapis"}>restapis</option>
                </select>
            </div>

            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Forms;
