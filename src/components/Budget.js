import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,currency } = useContext(AppContext);
    
    const handleBudgetChange = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span>
        <input type="number" step="10" value={budget} onChange={(event) => handleBudgetChange(event.target.value)}></input>
        </div>
    );
};
export default Budget;