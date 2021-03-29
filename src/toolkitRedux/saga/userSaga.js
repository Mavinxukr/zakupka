import { put, takeEvery, call } from 'redux-saga/effects';
import { setUser, fetchUser, userError, userLoading, fetchUserToken, logoutUser } from '../reducers/userReducer';
import cookie from 'js-cookie';
import { login, loginWithToken } from '../../server/user';

function* fetchUserWorker({ payload }) {
  try {
    yield put(userLoading());
    const { data } = yield call(login, payload);
    cookie.set('token', data.token)
    yield put(setUser({ ...data.user, token: data.token }));
  } catch (error) {
    yield put(userError(error));
  }
}


function* fetchUserTokenWorker() {
  try {
    yield put(userLoading());
    const { data } = yield call(loginWithToken);
    yield put(setUser({ ...data.user, token: data.token }));
  } catch (error) {
    yield put(userError(error));
  }
}

function* logoutUserWorker() {
  yield put(userLoading(logoutUser));
  cookie.remove('token');
}

export function* userWatcher() {
  yield takeEvery(fetchUser, fetchUserWorker)
  yield takeEvery(fetchUserToken, fetchUserTokenWorker)
  yield takeEvery(logoutUser, logoutUserWorker)
}

