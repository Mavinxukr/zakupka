import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { tenders } from './tenders';
import { plans } from './plans';

export default combineReducers({
  currentUser,
  tenders,
  plans,
});
