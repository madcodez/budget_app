import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    incomeTransactions: JSON.parse(localStorage.getItem('IncomeTransactions')) || [],
    expenseTransactions: JSON.parse(localStorage.getItem('ExpenseTransactions')) || []
}


//Create a context for globalState
export const GlobalContext = createContext(initialState);
//Create Provider for state
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(() => {
        localStorage.setItem('IncomeTransactions', JSON.stringify(state.incomeTransactions));
        localStorage.setItem('ExpenseTransactions', JSON.stringify(state.expenseTransactions));
    })

    const addIncome = (incomeTransaction) => {
        //console.log(incomeTransaction)
        dispatch({ type: 'ADD_INCOME', payload: incomeTransaction })
    }

    const addExpense = (expenseTransaction) => {
        // console.log(incomeTransaction)
        dispatch({ type: 'ADD_EXPENSE', payload: expenseTransaction })
    }
    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }
    return (
        <GlobalContext.Provider
            value={{
                incomeTransactions: state.incomeTransactions,
                expenseTransactions: state.expenseTransactions,
                addIncome,
                addExpense,
                deleteTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}



