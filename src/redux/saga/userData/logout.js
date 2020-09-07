import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import { getCurrentUserSuccess, getCurrentUserError } from '../../actions/currentUser';
import { logoutRequest } from '../../../services/user';

function* logout({ params, cookies }) {
  const response = yield call(logoutRequest, params, cookies);
  if (response.status) {
    yield put(getCurrentUserSuccess([]));
  } else {
    yield put(getCurrentUserError('error'));
  }
}

export function* watchLogout() {
  yield takeLatest(actionTypes.currentUser.delete, logout);
}
