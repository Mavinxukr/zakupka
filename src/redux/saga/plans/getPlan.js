import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPlanSuccess,
  getPlanError,
} from '../../actions/getPlan';
import { getPlanRequest } from '../../../services/getPlan';
import * as actionTypes from '../../actions/actionTypes';

function* getPlan({ params, id }) {
  const response = yield call(getPlanRequest, params, id);
  if (response.status) {
    yield put(getPlanSuccess(response.data));
  } else {
    yield put(getPlanError('error'));
  }
}

export function* watchGetPlan() {
  yield takeLatest(actionTypes.getPlan.request, getPlan);
}
