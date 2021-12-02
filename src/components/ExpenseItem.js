import './ExpenseItem.css';
import Date from './Date';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props){
  
    const [title,settitle] = useState(props.title);

    function clickHandler(){
        settitle('updated');
    }
    return(<li>
        <Card className = 'expense-item'>
        <Date date={props.date} />
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
        </div>
        </Card>
    </li>
    );

}

export default ExpenseItem;