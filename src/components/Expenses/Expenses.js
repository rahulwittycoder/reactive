import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    if(props.item.length===0)
    {
        return <h1>Make your first Entry!</h1>
    }
    return (
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key={ expense.id }
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount } />
                    )
                )
            }

        </Card>
    );
}

export default Expenses;