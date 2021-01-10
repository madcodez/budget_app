import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

export default function ExpenseList() {
    const { expenseTransactions } = useContext(GlobalContext);

    return (
        <div className="transactions transactions-expense">
            <h2> Transaction History </h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction =>
                    (<ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />))}
            </ul>

        </div>
    )
}
