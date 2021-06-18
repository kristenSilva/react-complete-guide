import './styles/Expenses.css';

import React, { useState } from 'react';

import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses (props) {

  const [filteredYear, setYear] = useState('2021');

  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  }
   /**
   * Data is first filtered to match the dropdown menu which filters via year - note '+' changes from string to number
   */
    let filteredExpenses = props.data
    .filter(expense => expense.date.getFullYear() === +filteredYear)

  return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList data={filteredExpenses}/>
      </Card>
  );

}

export default Expenses;