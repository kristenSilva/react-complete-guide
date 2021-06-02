import './styles/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const NewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.floor(Math.random()*1000).toString()
    }
    //forwarding data up to App.js
    props.onAddExpense(expenseData);
  }

  return(
    <div className="new-expense">
      <ExpenseForm onNewExpense={NewExpenseHandler}/>
    </div>
  )
}

export default NewExpense;