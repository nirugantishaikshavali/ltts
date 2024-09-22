import React from 'react';

const Table = ({table_data,delete_id,edits}) => {
    return (
        <div>
            <table className='table table-bordered w-50'>
                <thead>
                    <tr>
                        <th>
                            Emp_Id
                        </th>
                        <th>
                            Emp Name
                        </th>
                        <th>
                            Skills
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        table_data.map((item)=><tr key={item.emp_id}>
                            <td>{item.emp_id}</td>
                            <td>{item.emp_name}</td>
                            <td>{item.skills}</td>
                            <td>
                                <button className='btn btn-danger mx-2' onClick={()=>delete_id(item.emp_id)}>Del</button>
                                <button className='btn btn-primary' onClick={()=>edits(item)}>Edit</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default Table;