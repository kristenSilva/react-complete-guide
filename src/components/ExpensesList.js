import './styles/ExpensesList.css'
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
  if(!props.data.length){
    return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }

  /**
   * Data is maped to create ExpenseItems rendered
   */
  return (
    <ul className='expenses-list'>
      {props.data.map(expense => 
      <ExpenseItem expense={expense} key={expense.id}/>
      )}
    </ul>
  )
}

export default ExpensesList;
