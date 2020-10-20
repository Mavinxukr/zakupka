import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getOnePlanSuccess,
  getOnePlanError,
} from '../../actions/onePlan';
import { getOnePlanRequest } from '../../../services/onePlan';
import * as actionTypes from '../../actions/actionTypes';

function* getOnePlan({ params, id }) {
  const response = yield call(getOnePlanRequest, params, id);
  if (response.status) {
    yield put(getOnePlanSuccess(response.data));
  } else {
    yield put(getOnePlanError('error'));
  }
}

export function* watchGetPlanById() {
  yield takeLatest(actionTypes.onePlan.request, getOnePlan);
}
