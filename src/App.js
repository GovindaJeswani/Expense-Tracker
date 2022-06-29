import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses  = [
  {
  id:'e1',
  title:'toilet paper',
  amount:94.21,
  date: new Date(2020,7,13),
},
{
  id:'e2',title:'new Tv',amount:234.1,date:new Date(2020,12,15)
},
{
  id:'e3',title:'car Insurance',amount:321.32,date:new Date(2020,12,32)
},
{
  id:'e4',title:'new Wooden Desk',amount:531.3,date:new Date(3201,21,32)
}
]

const App = ()=> {
  const [expenses,setExpenses]= useState(dummyExpenses);

const addExpanseHandler = (expense) =>{
    console.log('in app js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpanseHandler}/>
     <Expenses items={expenses}/>
     </div>
  );
}

export default App;
