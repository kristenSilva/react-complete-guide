import { useState } from 'react';
import './styles/ExpenseForm.css';

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState(
    {
      title: '',
      amount: '',
      date: ''
    }
  );

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //using prevState makes sure you are using the most current state update
    //always use this structure if state update depends on previous state
    setUserInput((prevState) => {
      return {
        ...prevState, //ensure that other values aren't thrown away
        [name]: value //just this would remove any value not updated
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount, //+ converts string to number
      date: new Date(userInput.date.replace(/-/g, '/'))
    }
    //passes expenseData UP to NewExpense component 
    props.onNewExpense(expenseData);
    //clears out form input on submit
    setUserInput({
      title: '',
      amount: '',
      date: ''
    })
  
  }

  // const cancelHandler = () => {
  //   console.log("clicked cancel")
  //   props.onHideForm(false);
  //   return false;

  // }

  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title" 
            type="text" 
            value={userInput.title} 
            onChange={changeHandler}
            />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            name="amount"
            type="number" 
            value={userInput.amount} 
            min="0.01" 
            step="0.01"
            onChange={changeHandler}
            />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            name="date"
            type="date" 
            value={userInput.date}
            min="2019-01-01" 
            max="2022-12-31"
            onChange={changeHandler}
            />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;