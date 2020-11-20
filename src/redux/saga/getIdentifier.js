import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getIdentifierSuccess,
  getIdentifierError,
} from '../actions/getIdentifier';
import { getIdentifierRequest } from '../../services/ServiceTenders/getIdentifier';
import * as actionTypes from '../actions/actionTypes';

function* getIdentifier({ params, cookies }) {
  const response = yield call(getIdentifierRequest, params, cookies);
  if (response.status) {
    yield put(getIdentifierSuccess(response.data));
  } else {
    yield put(getIdentifierError('error'));
  }
}

export function* watchGetIdentifier() {
  yield takeLatest(actionTypes.companyType.request, getIdentifier);
}
