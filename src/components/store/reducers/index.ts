import { combineReducers } from 'redux';
import { hotels } from './hotels';
import { myReducer } from './myReducer';

export const rootReducer = combineReducers({
  myReducer,
  hotels,
});
