import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { tenders } from './tenders';
import { plans } from './plans';
import { onePlan } from './onePlan';

export default combineReducers({
  currentUser,
  tenders,
  plans,
  onePlan,
});
