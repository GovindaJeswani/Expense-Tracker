import React,{ useState } from 'react'

import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    //  useState only apply directly on component only
    const [enteredTitle,setEnteredTile ] = useState('')
    const [ enteredAmount,setEnteredAmount] = useState('')
    const [ enteredDate,setEnteredDate] = useState('')

    const titleChangeHandler = (e)=>{
        setEnteredTile(e.target.value);
    }
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e)=>{
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData=  {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData)
        // console.log(expenseData);
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTile('')
    }

    return <form onSubmit={submitHandler}> 
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' 
            value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='Date' min="2022/01/01" max="2025/12/31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm