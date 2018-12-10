import React from 'react';
import {createStore, combineReducer} from 'redux';

// State Prototype
const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
  };

// Default State
const expensesDefaultState = [];
const filtersDefaultstate = {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
};

// Expense Reducer
const expenseReducer = (state = expensesDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':{
            console.log(action.type);
        }
    }
};

// Combine Reducers
