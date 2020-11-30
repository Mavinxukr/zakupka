import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPlansByCompanySuccess,
  getPlansByCompanyError,
} from '../actions/getPlansByCompanyAction';
import { getPlansByCompanyRequest } from '../../services/getPlansByCompanyRequest';
import * as actionTypes from '../actions/actionTypes';

function* plansByCompany({ params, cookies }) {
  const response = yield call(getPlansByCompanyRequest, params, cookies);
  if (response.status) {
    yield put(getPlansByCompanySuccess(response));
  } else {
    yield put(getPlansByCompanyError('error'));
  }
}

export function* watchPlansByCompany() {
  yield takeLatest(actionTypes.plansByCompany.request, plansByCompany);
}
