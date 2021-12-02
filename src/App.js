import './components/ExpenseItem';
import expensedata  from './components/expensedata';
import Card from './components/Card';
import './expenses.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpensesFilter';
import React, { useState } from 'react';
import AllExpense from './components/AllExpense';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [selectedYear,setselectedYear] = useState('2020');
  const [allExpense,setallExpense] = useState(expensedata);
  
  function addExpenseHandler(newExpense){
      console.log("App");
      console.log(newExpense);
      //passing function as argument in state update if it depends on previous state
          setallExpense((prevExpense)=>{
        return [newExpense,...prevExpense];
      });
  }
  function yearFilterHandler(selectedYear){
      setselectedYear(selectedYear);
     
  }

  return (
    <Card className='expense'>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseChart expenses = {allExpense} year={selectedYear}/>
        <ExpensesFilter selected={selectedYear} onSelectYear={yearFilterHandler}/>
        <AllExpense item={allExpense} year={selectedYear}/>
       {/* doubt**************************** */}
       
      {/* <ExpenseItem 
        title={expensedata[0].title}
        date={expensedata[0].date}
        amount={expensedata[0].amount}/>
         <ExpenseItem 
        title={expensedata[1].title}
        date={expensedata[1].date}
        amount={expensedata[1].amount}/>
         <ExpenseItem 
        title={expensedata[2].title}
        date={expensedata[2].date}
        amount={expensedata[2].amount}/> */}
      
    </Card>
  );
}

export default App;
