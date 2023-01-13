import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle]= useState(props.title);

    const onclickHandler=()=>{
        setTitle('updated!')
        console.log('updated!')
    }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>

      </div>
      <button onClick={onclickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;