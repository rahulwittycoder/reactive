import Expenses from './components/Expenses/Expenses';
import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import axios from 'axios';
function App()
{
  const url = 'http://localhost:5000/record/add';
  const [expenses, setExpenses] = useState('');
  
  useEffect(()=>async () => { await fetch('http://localhost:5000/record')
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  },[])

  const addExpenseHandler = (expense) =>{
    const updatedExpense = [expense,...expenses];
    console.log(updatedExpense);
    fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({data:expense})
        })
    setExpenses(updatedExpense);
  }

  return(
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </>
  );
}
export default App;
