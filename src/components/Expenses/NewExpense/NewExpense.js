import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) =>{

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        // const result = await fetch("http://localhost:5000/record/add", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(expenseData),
        //     })
        //     .catch(error => {
        //       window.alert(error);
        //     });
        //     console.log(result);
            props.onAddExpense(expenseData);
        }
    return(
        <div className='new-expense'>
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;