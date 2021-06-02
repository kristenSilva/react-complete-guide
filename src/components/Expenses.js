import './styles/Expenses.css';

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses (props) {

  const [filteredYear, setYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  }

  /**
   * Data is first filtered to match the dropdown menu which filters via year - note '+' changes from string to number
   * Data is then maped to create ExpenseItems rendered
   */
  let expenses = props.data
    .filter(expense => expense.date.getFullYear() === +filteredYear)
    .map(expense => 
      <ExpenseItem expense={expense} key={expense.id}/>
    );

  return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler}/>
        {expenses}
      </Card>
  );

}

export default Expenses;