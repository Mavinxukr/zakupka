import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { tenders } from './tenders';

export default combineReducers({
  currentUser,
  tenders,
});
