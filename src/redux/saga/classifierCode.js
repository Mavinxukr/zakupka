import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getClassifierCodeSuccess,
  getClassifierCodeError,
} from '../actions/classifierCode';
import { getClassifierCodeRequest } from '../../services/classifierCode';
import * as actionTypes from '../actions/actionTypes';

function* getClassifierCode({ params }) {
  const response = yield call(getClassifierCodeRequest, params);
  if (response.status) {
    yield put(getClassifierCodeSuccess(response.data));
  } else {
    yield put(getClassifierCodeError('error'));
  }
}

export function* watchClassifierCodeData() {
  yield takeLatest(actionTypes.classifierCode.request, getClassifierCode);
}
