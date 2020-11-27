import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createTenderSuccess,
  createTenderError,
} from '../../actions/createTender';
import { createTenderRequest } from '../../../services/Tenders/createTender';
import * as actionTypes from '../../actions/actionTypes';

function* createTender({ params, cookies, body }) {
  const response = yield call(createTenderRequest, params, cookies, body);
  if (response.status) {
    yield put(createTenderSuccess(response));
  } else {
    yield put(createTenderError('error'));
  }
}

export function* watchCreateTender() {
  yield takeLatest(actionTypes.createTender.request, createTender);
}
