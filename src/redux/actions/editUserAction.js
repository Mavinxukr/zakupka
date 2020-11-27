import * as actionTypes from './actionTypes';

export const editUserAction = (params, cookies, body) => ({
  type: actionTypes.createUser.request,
  cookies,
  params,
  body,
});

export const editUserActionSuccess = (body) => ({
  type: actionTypes.createUser.success,
  body,
});

export const updateUserAction = (params, cookies) => ({
  type: actionTypes.createUser.update,
  cookies,
  params,
});

export const editUserActionError = (error) => ({
  type: actionTypes.createUser.error,
  error,
});
