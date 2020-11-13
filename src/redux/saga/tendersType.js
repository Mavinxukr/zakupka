import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getTendersTypeSuccess,
  getTendersTypeError,
} from '../actions/getTendersType.js';
import { getTendersTypes } from '../../services/tendersType.js';
import * as actionTypes from '../actions/actionTypes.js';

function* getTendersType({ params }) {
  const response = yield call(getTendersTypes, params);
  if (response.status) {
    yield put(getTendersTypeSuccess(response.data));
  } else {
    yield put(getTendersTypeError('error'));
  }
}

export function* watchGetTendersType() {
  yield takeLatest(actionTypes.tendersType.request, getTendersType);
}
