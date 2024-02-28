import React, { useContext, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currencies, dispatch } = useContext(AppContext);
    const currencyChangeHandler = (symbol) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol
        });

    }

    return (
        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => currencyChangeHandler(event.target.value)}>

        {currencies.map((currency) => (
                        <option value={currency.symbol} name={currency.name} key={currency.id}> {currency.name} </option>
                    ))}
        </select>

    );
};

export default CurrencyList;