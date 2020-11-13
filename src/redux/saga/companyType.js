import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getCompanyTypeSuccess,
  getCompanyTypeError,
} from '../actions/getCompanyType';
import { getCompanyTypeRequest } from '../../services/companyType.js';
import * as actionTypes from '../actions/actionTypes';

function* getCompanyType({ params, cookies }) {
  const response = yield call(getCompanyTypeRequest, params, cookies);
  if (response.status) {
    yield put(getCompanyTypeSuccess(response.data));
  } else {
    yield put(getCompanyTypeError('error'));
  }
}

export function* watchGetCompanyType() {
  yield takeLatest(actionTypes.companyType.request, getCompanyType);
}
