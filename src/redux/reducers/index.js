import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import restaurant from './restaurantReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
  errors,
  loginMode,
  user,
  restaurant,
  menu
});

export default rootReducer;
