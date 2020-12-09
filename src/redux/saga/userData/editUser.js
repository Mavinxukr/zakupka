import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import { getCurrentUserSuccess, getCurrentUserError } from '../../actions/currentUser';
import { editUserRequest } from '../../../services/editUserRequest';

function* editUser({ params, cookies, body }) {
  const response = yield call(editUserRequest, params, cookies, body);
  if (response.status) {
    yield put(getCurrentUserSuccess([]));
  } else {
    yield put(getCurrentUserError('error'));
  }
}

export function* watchEditUser() {
  yield takeLatest(actionTypes.currentUser.update, editUser);
}
