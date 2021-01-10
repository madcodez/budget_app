import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

    const incomeAmts = incomeTransactions.map(it => it.incomeAmount);
    const expenseAmts = expenseTransactions.map(et => et.expenseAmount);

    const totalIncomeAmt = incomeAmts.reduce((acc, i) => acc += i, 0);
    const totalExpenseAmt = expenseAmts.reduce((acc, i) => acc += i, 0);
    console.log(totalIncomeAmt);
    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h3>$ {(totalIncomeAmt - totalExpenseAmt)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+$ {totalIncomeAmt}</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-$ {totalExpenseAmt}</p>
                </div>
            </div>
        </div>
    )
}
