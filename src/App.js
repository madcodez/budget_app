import React from 'react';
import logo from './logo.svg';
import Header from './componenets/Header';
import Balance from './componenets/Balance';
import Transactions from './componenets/Transactions';
import IncomeList from './componenets/IncomeList';
import ExpenseList from './componenets/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <Transactions />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
