import * as actionTypes from './actionTypes';

export const editUserAction = (params, cookies, body) => ({
  type: actionTypes.editUser.request,
  cookies,
  params,
  body,
});

export const editUserActionSuccess = (body) => ({
  type: actionTypes.editUser.success,
  body,
});

export const editUserActionError = (error) => ({
  type: actionTypes.editUser.error,
  error,
});
