import React from 'react';
import { useSelector } from 'react-redux';
const Table = () => {
    let data=useSelector((data)=>data.user)
    console.log("data---->",data)

    return (
        <div>
            <table className='table table-bordered w-50 mt-2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.fullName}</td>
                        <td>{data.balance}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default Table;