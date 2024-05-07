
import React, { useState } from 'react';
import Transaction from './Transaction';
import './Home.css';

const initialTransactions = [];

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (description, amount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      description,
      amount: +amount,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const calculateTotal = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <div className='Underline'></div>
      <div>
        <h3>Add New Transaction</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          const description = e.target.elements.description.value;
          const amount = e.target.elements.amount.value;
          addTransaction(description, amount);
          e.target.reset();
        }}>
        <div className='data'>
          <input type="text" name="description" placeholder="Description" />
          <input type="number" name="amount" placeholder="Amount" />
          <button type="submit">Add Transaction</button>
        </div>
         
        </form>
      </div>
      <div>
        <h3>Transactions</h3>
        <ul className="transaction-list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </ul>
      </div>
      <h3>Total Balance: ${calculateTotal()}</h3>
    </div>
  );
};

export default ExpenseTracker;
