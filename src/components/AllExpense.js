import ExpenseItem from "./ExpenseItem";

function AllExpense(props){
    // console.log(props.item[0].date.getFullYear());
    // console.log(props.item.filter((expense)=>expense.date.getFullYear()==props.year));
    const filterExpenseByYear = props.item.filter((expense)=>expense.date.getFullYear().toString() === props.year);

    //conditional rendering
   
    if(filterExpenseByYear.length > 0){
        return (<ul>
            {filterExpenseByYear.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}/>)
        )}</ul>
            );
    }
    return <h3>Found no expense</h3>
     
}

export default AllExpense;