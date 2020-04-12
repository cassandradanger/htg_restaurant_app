import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import restaurant from './restaurantReducer';

const rootReducer = combineReducers({
  errors, 
  loginMode,
  user,
  restaurant
});

export default rootReducer;
