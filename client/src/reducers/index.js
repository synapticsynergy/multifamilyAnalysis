import { combineReducers } from 'redux';
import calculateReducer from './calculate';

export default combineReducers({
  calculation: calculateReducer,
});