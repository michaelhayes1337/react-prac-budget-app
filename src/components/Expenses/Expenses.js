import React from "react";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState(2022);
  const onSetFilterHandler = (newFilter) => {
    setFilter(newFilter);
  };
  const filteredList = props.expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() == filter) {
      return expense;
    }
  });

  
  
  return (
    <Card className="expenses">
      <ExpenseFilter onSetFilter={onSetFilterHandler} />
      <ExpensesChart expenses={filteredList}/>
      <ExpensesList items={filteredList}/>
    
    </Card>
  );
};

export default Expenses;
