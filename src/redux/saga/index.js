import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';
import { watchLogout } from './userData/logout';
import { watchGetTenders } from './getTenders';
import { watchGetPlans } from './getPlans';
import { watchMoneyType } from './getMoneyType';
import { watchClassifierCodeData } from './classifierCode';
import { watchGetTendersType } from './tendersType';
import { watchGetCompanyType } from './companyType';
import { watchGetRegions } from './getRegions';

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
  ]);
}
