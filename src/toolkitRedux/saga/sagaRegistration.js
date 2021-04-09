import { call, put, takeEvery } from 'redux-saga/effects';
import { registration } from '../../server/registration.server';
import { registrationFailure, registrationRequest } from '../reducers/registrationReducer';

function* registrationWorker({ payload }) {
  try {
    yield call(registration, payload)
  } catch (error) {
    if (error.response) {
      yield put(registrationFailure(error.response))
    }
  }
}

export function* registrationWatcher() {
  yield takeEvery(registrationRequest, registrationWorker)
}

