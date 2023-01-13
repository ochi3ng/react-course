import React from 'react'

function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US', {month:'long'});
    const day=props.date.toLocaleString('en-US', {day:'2-digit'});
    const year= props.date.getFullYear();
    return (
    <div>
        <div className="expense-data_month">{month}</div>
        <div className="expense-data_day">{day}</div>
        <div className="expense-data_year">{year}</div>
      
    </div>
  )
}

export default ExpenseDate