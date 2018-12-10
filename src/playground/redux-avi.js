import {createStore,  combineReducers} from 'redux';
import uuid from 'uuid';

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

// ============ Expenses Action Generators ===========
// ADD_EXPENSE
const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  });
// Delete Expense
const deleteExpense = ({id}) =>({
    type:'DELETE_EXPENSE',
    id
});

// Default State
const expensesDefaultState = [];
const filtersDefaultstate = {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
};

// Expense Reducer
const expensesReducer = (state = expensesDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
    }
};

// Create Store
const store = createStore(expensesReducer);

// Subscribe .... To get the state as soon as it changes sooner
store.subscribe(() => {
    console.log(store.getState());
  });

//   Performing Actions
  const expenseOne = store.dispatch(addExpense({ descreption: 'Rent', amount: 1000 }));
  const expenseTwo = store.dispatch(addExpense({descreption:'Coffee', amount:5}));
