import './Date.css'

function Date(props){
    const year = props.date.getFullYear();
    //const month = props.date.getMonth().toLocaleString('en-us',{month:'long'});
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return (<div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>);
}
export default Date;