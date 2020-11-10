import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';
import { watchLogout } from './userData/logout';
import { watchGetTenders } from './tenders/getTenders';
import { watchGetPlans } from './plans/getPlans';
import { watchMoneyType } from './moneyType/getMoneyType';
import { watchClassifierCodeData } from './classifierCode/classifierCode';

export function* rootSaga() {
  yield all([
    watchGetCurrentUser(),
    watchLogout(),
    watchGetTenders(),
    watchGetPlans(),
    watchMoneyType(),
    watchClassifierCodeData(),
  ]);
}
