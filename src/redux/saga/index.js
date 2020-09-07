import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';
import { watchLogout } from './userData/logout';

export function* rootSaga() {
  yield all([
    watchGetCurrentUser(),
    watchLogout(),
  ]);
}
