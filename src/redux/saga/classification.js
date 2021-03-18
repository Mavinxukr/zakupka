import { call, put, takeLatest } from 'redux-saga/effects';
import {
  classificationSuccess,
  classificationError,
} from '../actions/classification';
import { getClassificationRequest } from '../../services/classification';
import * as actionTypes from '../actions/actionTypes';

function* getClassification({ params }) {
  const response = yield call(getClassificationRequest, params);
  if (response.status) {
    yield put(classificationSuccess(response.data[0]));
  } else {
    yield put(classificationError('error'));
  }
}

export function* watchClassificationData() {
  yield takeLatest(actionTypes.classification.request, getClassification);
}
