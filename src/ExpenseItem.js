import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props)=> {
const [title, setTitle]= useState(props.title);

const clickHandler= ()=>{
    setTitle('updated!');
    console.log(title);
};
  return (
    <div className='expenses-item'>
        <ExpenseDate date={props.date}/>
        <div className='expenses-item_description'>
         <h2>{title}</h2>
         <div className='expenses-item_price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}

export default ExpenseItem