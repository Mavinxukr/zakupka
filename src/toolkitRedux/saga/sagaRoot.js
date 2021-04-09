import { all } from 'redux-saga/effects';
import { userWatcher } from './sagaUser';
import { registrationWatcher } from './sagaRegistration'

export function* rootSaga() {
  yield all ([
    userWatcher(),
    registrationWatcher(),
  ])
}