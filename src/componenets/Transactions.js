import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

export default function Transactions() {
    const { addIncome, addExpense } = useContext(GlobalContext);

    const [income, setIncome] = useState({
        id: 0,
        incomeText: '',
        incomeAmount: 0
    });

    const [expense, setExpense] = useState({
        id: 0,
        expenseText: '',
        expenseAmount: 0
    });

    const changeIncome = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value })
        console.log(income);
    }

    const submitIncome = (e) => {
        e.preventDefault();
        const newIncomeTransaction = {
            id: uuidv4(),
            incomeText: income.incomeText,
            incomeAmount: income.incomeAmount * 1
        };
        //  console.log(newIncomeTransaction)
        addIncome(newIncomeTransaction);
        setIncome({ [e.target.name]: '' })

    }

    const changeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }

    const submitExpense = (e) => {
        e.preventDefault();
        const newExpenseTransaction = {
            id: uuidv4(),
            expenseText: expense.expenseText,
            expenseAmount: expense.expenseAmount * 1
        }
        addExpense(newExpenseTransaction);
    }

    return (
        <div className="form-wrapper" >
            <form className="input-group income" onSubmit={submitIncome}>
                <input type="text" placeholder="Add Income" autoComplete="off" name="incomeText" onChange={changeIncome} />
                <input type="number" placeholder="Amount" autoComplete="off" name="incomeAmount" onChange={changeIncome} />
                <input type="submit" value="submit" />
            </form>
            <form className="input-group expense" onSubmit={submitExpense}>
                <input type="text" placeholder="Add Expense" autoComplete="off" name="expenseText" onChange={changeExpense} />
                <input type="number" placeholder="Amount" autoComplete="off" name="expenseAmount" onChange={changeExpense} />
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}
