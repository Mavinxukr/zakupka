import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPlanSuccess,
  getPlanError,
} from '../../actions/getPlan';
import { updatePlanRequest } from '../../../services/updatePlan';
import * as actionTypes from '../../actions/actionTypes';

function* updatePlan({
  params, id, cookies, body,
}) {
  const response = yield call(updatePlanRequest, params, id, cookies, body);
  if (response.status) {
    yield put(getPlanSuccess(response.data));
  } else {
    yield put(getPlanError('error'));
  }
}

export function* watchUpdatePlan() {
  yield takeLatest(actionTypes.getPlan.update, updatePlan);
}
