// Transaction.js
import React from 'react';

const Transaction = ({ id, description, amount }) => {
  return (
    <li className={amount < 0 ? 'expense' : 'income'}>
      {description} - ${Math.abs(amount)}
    </li>
  );
};

export default Transaction;
