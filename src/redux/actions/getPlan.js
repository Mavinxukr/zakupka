import * as actionTypes from './actionTypes';

export const getPlan = (params, id) => ({
  type: actionTypes.getPlan.request,
  id,
  params,
});

export const planUpdate = (params, cookies, id, body) => ({
  type: actionTypes.getPlan.update,
  id,
  params,
  cookies,
  body,
});

export const getPlanSuccess = (body) => ({
  type: actionTypes.getPlan.success,
  body,
});

export const getPlanError = (error) => ({
  type: actionTypes.getPlan.error,
  error,
});
