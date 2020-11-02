import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';
import { watchLogout } from './userData/logout';
import { watchGetTenders } from './tenders/getTenders';
import { watchGetPlans } from './plans/getPlans';

export function* rootSaga() {
  yield all([
    watchGetCurrentUser(),
    watchLogout(),
    watchGetTenders(),
    watchGetPlans(),
  ]);
}
