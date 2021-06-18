import './styles/NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  //will conditionally render the form
  const [isShowing, setIsShowing] = useState(false);

  const NewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.floor(Math.random()*1000).toString()
    }
    //forwarding data up to App.js
    props.onAddExpense(expenseData);
    //after an entry has been submitted form should go away
    setIsShowing(false);
  }

  const showFormHandler = () => {
    console.log("clicked addexpense");
    setIsShowing(true);
  }

  /**
   * Will handle the cancel button rendered in ExpenseForm
   * Only function is to allow child component to communicate back up and inform the 'cancel' button has been clicked
   */
  const hideFormHandler = () => {
    console.log("clicked cancel");
    setIsShowing(false);
  }

  return(
    <div className="new-expense">
      {!isShowing ? 
        <button onClick={showFormHandler}>Add Expense</button>
      :
        <ExpenseForm onNewExpense={NewExpenseHandler} onCancel={hideFormHandler}/>      
      }
    </div>
  )
}

export default NewExpense;