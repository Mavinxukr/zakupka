import { call, put, takeEvery } from 'redux-saga/effects';
import { registration } from '../../server/registration.server';
import { registrationFailure, registrationRequest } from '../reducers/registrationReducer';

function* registrationWorker({ payload: { history, formData } }) {
  try {
    yield call(registration, formData);
    history.push('/login');
  } catch (error) {
    if (error.response) {
      yield put(registrationFailure(error.response));
    }
  }
}

export function* registrationWatcher() {
  yield takeEvery(registrationRequest, registrationWorker);
}

