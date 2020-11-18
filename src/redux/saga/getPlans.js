import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPlansSuccess,
  getPlansError,
} from '../actions/plans';
import { getPlansRequest } from '../../services/plans';
import * as actionTypes from '../actions/actionTypes';

function* getPlans({ params }) {
  const response = yield call(getPlansRequest, params);
  if (response.status) {
    yield put(getPlansSuccess(response.data));
  } else {
    yield put(getPlansError('error'));
  }
}

export function* watchGetPlans() {
  yield takeLatest(actionTypes.plans.request, getPlans);
}
