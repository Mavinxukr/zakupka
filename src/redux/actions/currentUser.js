import * as actionTypes from './actionTypes';

export const getCurrentUser = (params, cookies) => ({
  type: actionTypes.currentUser.request,
  params,
  cookies,
});

export const editCurrentUser = (params, cookies, body) => ({
  type: actionTypes.currentUser.update,
  params,
  body,
  cookies,
});

export const getCurrentUserSuccess = (body) => ({
  type: actionTypes.currentUser.success,
  body,
});

export const getCurrentUserError = (error) => ({
  type: actionTypes.currentUser.error,
  error,
});

export const logoutCurrentUser = (params, cookies) => ({
  type: actionTypes.currentUser.delete,
  params,
  cookies,
});
