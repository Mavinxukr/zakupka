import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { tenders } from './tenders';
import { plans } from './plans';
import { onePlan } from './onePlan';
import { moneyType } from './moneyType';
import { classifierCode } from './classifierCode';
import { tendersType } from './getTendersType';
import { companyType } from './getCompanyType';
import { regions } from './getRegions';
import { getIdentifier } from './getIdentifier';
import { createPlan } from './createPlan';
import { createTender } from './createTender';
import { plansByCompany } from './plansByCompany';
import { getPlan } from './getPlan';
import { subsidiaryCompany } from './subsidiaryCompany';

export default combineReducers({
  currentUser,
  tenders,
  plans,
  onePlan,
  moneyType,
  classifierCode,
  tendersType,
  companyType,
  regions,
  getIdentifier,
  createPlan,
  createTender,
  plansByCompany,
  getPlan,
  subsidiaryCompany,
});
