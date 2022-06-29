import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(expense=>{
    if(filteredYear==='All'){
      return expense
    }
    else{
        return expense.date.getFullYear().toString() === filteredYear;
      }
    }
  )

  return (
    <div>
      <Card className='expenses'> 
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpense}/>
        {/* <ExpenseList items={filteredExpense}/> */}
        <ExpenseList items={filteredExpense}/>

      </Card>
    </div>
  );
}

export default Expenses;
