import './NewExpense.css'
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const[isForm,setisForm] = useState(false);

    function SaveExpenseDataHandler(newExpense){
            const expenseData = {
                ...newExpense,
                id: Math.random().toString()
            }
            //console.log(expenseData);
            props.onAddExpense(expenseData);
    }
    function showFormHandler(){
        setisForm(true);
    }
    function hideFormHandler(){
        setisForm(false);
    }
    
    return (<div className='new-expense'>

            {/* conditional rendering */}
            {!isForm && <button onClick={showFormHandler}>Add new Expense</button>}
            {isForm && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} hideForm={hideFormHandler}/>}
        
    </div>);
}

export default NewExpense;



