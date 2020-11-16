import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getRegionsSuccess,
  getRegionsError,
} from '../actions/getRegions';
import { getRegionsRequest } from '../../services/regions.js';
import * as actionTypes from '../actions/actionTypes';

function* getRegions({ params }) {
  const response = yield call(getRegionsRequest, params);
  if (response.status) {
    yield put(getRegionsSuccess(response.data));
  } else {
    yield put(getRegionsError('error'));
  }
}

export function* watchGetRegions() {
  yield takeLatest(actionTypes.companyType.request, getRegions);
}
