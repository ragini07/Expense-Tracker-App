import './NewExpense.css'
import {useState} from 'react';

function ExpenseForm(props){
    const [enteredtitle,setttitle] = useState('');
    const [entereddate,setdate] = useState('');
    const [enteredamount,setamount] = useState('');

    const [isValidInput,setisValidInput] = useState(true);

    //alternate for using multiple use state and here we have to update all key evertime
    // const [userInput,setuserInput] = useState({
    //     enteredtitle: '',
    //     entereddate: '',
    //     enteredamount: ''
    // });
    function titleHandler(event){
        console.log(event.target.value);
        setttitle(event.target.value);
        //this may fail
        // setuserInput({
        //     ...userInput,
        //     enteredtitle: event.target.value
        // });
        
        //always use it with function
        // setuserInput((prevState)=>{
        //     return {...prevState,
        //         enteredtitle: event.target.value};
        // });
    }
    function dateHandler(event){
        console.log(event.target.value);
        setdate(event.target.value);
    //     setuserInput({
    //         ...userInput,
    //     entereddate: event.target.value 
    //  })

    // setuserInput((prevState)=>{
    //     return {...prevState,entereddate: event.target.value};
    // })
    }
    function amountHandler(event){
        console.log(event.target.value);
        setamount(event.target.value);
    //     setuserInput({
    //         ...userInput,
    //     entereddate: event.target.value 
    //  })

    // setuserInput((prevState)=>{
    //     return {...prevState,enteredamount: event.target.value};
    // })
  
    }
    function submitFormHandler(e){
        e.preventDefault();
        setisValidInput(true);

        if(enteredamount.trim().length === 0 || enteredtitle.trim().length === 0)
        {
            setisValidInput(false);
            return;
        }       
         
        const newExpense = {
            title : enteredtitle,
            amount: Number(enteredamount),
            date: new Date(entereddate)
        }
       // console.log(newExpense);
      
       
       props.onSaveExpenseData(newExpense);
        //two way binding
        setamount('');
        setdate('');
        setttitle('');

    }


    
    return(
    <form onSubmit={submitFormHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label className='new-expense__control label'>Title</label>
                <input 
                    className='new-expense__control input' 
                    type='text' 
                    //to reflect in ui
                    value={enteredtitle}
                    onChange={titleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label className='new-expense__control label'>Amount</label>
                <input 
                    className='new-expense__control input' 
                    type='number' min="0.01" step="0.01"
                    value={enteredamount}
                    onChange={amountHandler}/>
            </div>
            <div className='new-expense__control'>
                <label className='new-expense__control label'>Date</label>
                <input 
                    className='new-expense__control input' 
                    type='date' min="2019-01-01" max="2022-12-31"
                    value={entereddate}
                    onChange={dateHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={props.hideForm}>Cancel</button>
            </div>
            <p 
                // style={{display: !isValidInput?'block':'none'}}
                 className={`${!isValidInput?'show':'hide'}`}
                >
                    Please provide valid input</p>
           
        </div>
        
    </form>
     
    );

 
}

export default ExpenseForm;
