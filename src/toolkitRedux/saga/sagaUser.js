import { put, takeEvery, call } from 'redux-saga/effects';
import {
  fetchUser,
  fetchUserToken,
  logoutUser,
  userFailure,
  userRequest,
  userSuccess,
} from '../reducers/userReducer';
import cookie from 'js-cookie';
import { login, loginWithToken } from '../../server/user.server';

function* fetchUserWorker({ payload }) {
  try {
    yield put(userRequest());
    const { data } = yield call(login, payload);
    cookie.set('token', data.token)
    yield put(userSuccess({ ...data.user, token: data.token }));
  } catch (error) {
    if (error.response) {
      yield put(userFailure(error.response));
    }
  }
}

function* fetchUserTokenWorker() {
  try {
    yield put(userRequest());
    const { data } = yield call(loginWithToken);
    yield put(userSuccess({ ...data.user, token: data.token }));
  } catch (error) {
    yield put(userFailure(error));
  }
}

function* logoutUserWorker() {
  yield put(userRequest(logoutUser));
  cookie.remove('token');
}

export function* userWatcher() {
  yield takeEvery(fetchUser, fetchUserWorker)
  yield takeEvery(fetchUserToken, fetchUserTokenWorker)
  yield takeEvery(logoutUser, logoutUserWorker)
}

