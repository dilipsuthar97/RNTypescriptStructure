import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import commonReducer from './CommonSlice';

// Root saga
const reducer = combineReducers({
  common: commonReducer,
});

export default reducer;

// Export all actions
export * from './CommonSlice';
