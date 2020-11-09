import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getKEKVSuccess,
  getKEKVError,
} from '../../actions/kekv';
import { getKEKVRequest } from '../../../services/kekv';
import * as actionTypes from '../../actions/actionTypes';

function* getKEKV({ params }) {
  const response = yield call(getKEKVRequest, params);
  if (response.status) {
    yield put(getKEKVSuccess(response.data));
  } else {
    yield put(getKEKVError('error'));
  }
}

export function* watchKEKVType() {
  yield takeLatest(actionTypes.kekv.request, getKEKV);
}
