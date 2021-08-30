import React from 'react';
import ExpenseForm from '../NewExpense/ExpenseForm';

const ControlPanel = () => {
    const [formState, toggleFormState] = useState(false);
    const onClickHandler = ()=>{
        toggleFormState((prev)=>{
            return !prev;
        })
    }
    return (
        <div>
            {formState && ExpenseForm}
            {!formState &&<button type="button" onClick={onClickHandler}>Add Expense</button>}
            
        </div>
    );
}

export default ControlPanel;
