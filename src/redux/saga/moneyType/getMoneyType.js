import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getMoneyTypeSuccess,
  getMoneyTypeError,
} from '../../actions/moneyType';
import { getMoneyTypeRequest } from '../../../services/moneyType';
import * as actionTypes from '../../actions/actionTypes';

function* getMoneyType({ params, cookies }) {
  const response = yield call(getMoneyTypeRequest, params, cookies);
  if (response.status) {
    yield put(getMoneyTypeSuccess(response.data));
  } else {
    yield put(getMoneyTypeError('error'));
  }
}

export function* watchMoneyType() {
  yield takeLatest(actionTypes.moneyType.request, getMoneyType);
}
