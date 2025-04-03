// the whole context part how context api is done 
// is here 
import React, { createContext, useReducer } from "react";
import contextreducer from "./transactioncontextreducer";
export const TransactionContext = createContext();

const Initialstate = [];
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextreducer, Initialstate);
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: { id } });
  };
  const balance=transactions.reduce((acc, curr) => 
    (curr.type==='Expense' ? acc - curr.amount : acc + curr.amount), 0);
  
  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction,balance }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

