import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createPlanSuccess,
  createPlanError,
} from '../../actions/createPlane';
import { createPlaneRequest } from '../../../services/Plans/createPlan';
import * as actionTypes from '../../actions/actionTypes';

function* createPlan({ params, cookies, body }) {
  const response = yield call(createPlaneRequest, params, cookies, body);
  if (response.status) {
    yield put(createPlanSuccess(response));
  } else {
    yield put(createPlanError('error'));
  }
}

export function* watchCreatePlan() {
  yield takeLatest(actionTypes.createPlan.request, createPlan);
}
