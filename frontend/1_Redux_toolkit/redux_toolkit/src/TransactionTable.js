import React from 'react';
import { useSelector } from 'react-redux';

const TransactionTable = () => {
    const data = useSelector((state) => state.transaction);
    console.log("Transaction_Table--->", data);

    return (
        <div>
            <table className='table table-bordered w-50'>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>TimeStamp</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.type}</td>
                            <td>{transaction.timeStamp.toString()}</td>
                            <td>{transaction.account}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
