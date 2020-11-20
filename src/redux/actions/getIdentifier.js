import * as actionTypes from './actionTypes';

export const getIdentifier = (params, cookies) => ({
  type: actionTypes.country.request,
  cookies,
  params,
});

export const getIdentifierSuccess = (body) => ({
  type: actionTypes.country.success,
  body,
});

export const getIdentifierError = (error) => ({
  type: actionTypes.country.error,
  error,
});
