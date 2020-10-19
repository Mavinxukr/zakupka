import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPlanSuccess,
  getPlanError,
} from '../../../actions/plan';
import { getPlanRequest } from '../../../../services/plan';
import * as actionTypes from '../../../actions/actionTypes';

function* getPlan({ params }) {
  const response = yield call(getPlanRequest, params);
  if (response.status) {
    yield put(getPlanSuccess(response.data));
  } else {
    yield put(getPlanError('error'));
  }
}

export function* watchGetPlan() {
  yield takeLatest(actionTypes.plans.request, getPlan);
}
