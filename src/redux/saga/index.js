import { all } from 'redux-saga/effects';
import { watchGetCurrentUser } from './userData/getCurrentUser';

export function* rootSaga() {
  yield all([
    watchGetCurrentUser(),
  ]);
}
