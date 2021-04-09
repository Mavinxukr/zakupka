import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
})

export default rootReducer;