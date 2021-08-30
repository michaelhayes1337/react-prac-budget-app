import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react'
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('new expense')
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    
    const startedEditing = ()=>{
        setIsEditing(true)
    }
    const stopediting = ()=>{
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startedEditing}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel = {stopediting}/>}
        </div>
    );
}

export default NewExpense;
