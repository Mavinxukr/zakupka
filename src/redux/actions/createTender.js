import * as actionTypes from './actionTypes';

export const createTender = (params, cookies, body) => ({
  type: actionTypes.createTender.request,
  cookies,
  params,
  body,
});

export const createTenderSuccess = (body) => ({
  type: actionTypes.createTender.success,
  body,
});

export const updateTender = (params, cookies) => ({
  type: actionTypes.createTender.update,
  cookies,
  params,
});

export const createTenderError = (error) => ({
  type: actionTypes.createTender.error,
  error,
});
