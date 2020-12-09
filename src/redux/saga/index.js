import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';
import { watchLogout } from './userData/logout';
import { watchGetTenders } from './getTenders';
import { watchGetPlans } from './plans/getPlans';
import { watchMoneyType } from './getMoneyType';
import { watchClassifierCodeData } from './classifierCode';
import { watchGetTendersType } from './tendersType';
import { watchGetCompanyType } from './companyType';
import { watchGetRegions } from './getRegions';
import { watchGetIdentifier } from './getIdentifier';
import { watchCreatePlan } from './plans/createPlan';
import { watchCreateTender } from './tenders/createTender';
import { watchPlansByCompany } from './plansByCompany';
import { watchGetPlan } from './plans/getPlan';
import { watchUpdatePlan } from './plans/updatePlan';
import { watchEditUser } from './userData/editUser';

export function* rootSaga() {
  yield all([
    watchGetCurrentUser(),
    watchLogout(),
    watchGetTenders(),
    watchGetPlans(),
    watchMoneyType(),
    watchClassifierCodeData(),
    watchGetTendersType(),
    watchGetCompanyType(),
    watchGetRegions(),
    watchGetIdentifier(),
    watchCreatePlan(),
    watchCreateTender(),
    watchPlansByCompany(),
    watchGetPlan(),
    watchUpdatePlan(),
    watchEditUser(),
  ]);
}
