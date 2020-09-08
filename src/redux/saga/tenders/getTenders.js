import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getTendersSuccess,
  getTendersError,
} from '../../actions/tenders';
import { getTendersRequest } from '../../../services/tenders';
import * as actionTypes from '../../actions/actionTypes';

function* getTenders({ params }) {
  const response = yield call(getTendersRequest, params);
  if (response.status) {
    yield put(getTendersSuccess(response.data));
  } else {
    yield put(getTendersError('error'));
  }
}

export function* watchGetTenders() {
  yield takeLatest(actionTypes.tenders.request, getTenders);
}
