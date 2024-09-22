import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Forms from './Forms';
import Table from './Table';
import TransactionTable from './TransactionTable';
const App = () => {
  return (
    <div>
      <Forms/>
      <Table/>
      <TransactionTable/>
    </div>
  );
};

export default App;