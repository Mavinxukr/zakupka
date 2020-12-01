import { call, put, takeLatest } from 'redux-saga/effects';
import {
  plansByCompanySuccess,
  plansByCompanyError,
} from '../actions/plansByCompany';
import { plansByCompanyRequest } from '../../services/plansByCompanyRequest';
import * as actionTypes from '../actions/actionTypes';

function* plansByCompany({ params, cookies }) {
  const response = yield call(plansByCompanyRequest, params, cookies);
  if (response.status) {
    yield put(plansByCompanySuccess(response));
  } else {
    yield put(plansByCompanyError('error'));
  }
}

export function* watchPlansByCompany() {
  yield takeLatest(actionTypes.plansByCompany.request, plansByCompany);
}
