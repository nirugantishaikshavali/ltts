import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../store';

const Table = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  let data = useSelector((state) => state.user.users);
  let status=useSelector((state)=>state.user.status)
  let error=useSelector((state)=>state.user.error)

  console.log("data---->", data);
  console.log("status--->",status)
  console.log("Error--->",error)

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "completed" && (
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>
                    <button className='btn btn-danger mx-2'>Del</button>
                    <button className='btn btn-primary'>Edit</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {status === "error" && <p>Error: {data.error}</p>}
    </div>
  );
};

export default Table;
