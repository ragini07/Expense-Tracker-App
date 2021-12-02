import React from "react";
import Chart from "./chart/Chart";

function ExpenseChart(props){
    const filterExpenseByYear = props.expenses.filter((expense)=>expense.date.getFullYear().toString() === props.year);
    const chartDataPoints = [
        {label : 'Jan' , value : 0},
        {label : 'Feb' , value : 0},
        {label : 'March' , value : 0},
        {label : 'April' , value : 0},
        {label : 'May' , value : 0},
        {label : 'June' , value : 0},
        {label : 'July' , value : 0},
        {label : 'Aug' , value : 0},
        {label : 'Sept' , value : 0},
        {label : 'Oct' , value : 0},
        {label : 'Nov' , value : 0},
        {label : 'Dec' , value : 0}
    ]


  
    for(const expense of filterExpenseByYear){
       
         const month = expense.date.getMonth(); 
         console.log(month)
         chartDataPoints[month-1].value += expense.amount;
    }
     
   
    return <Chart 
                dataPoints={chartDataPoints}/>

}

export default ExpenseChart;