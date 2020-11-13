import * as actionTypes from './actionTypes';

export const getTendersType = (params) => ({
  type: actionTypes.tendersType.request,
  params,
});

export const getTendersTypeSuccess = (body) => ({
  type: actionTypes.tendersType.success,
  body,
});

export const getTendersTypeError = (error) => ({
  type: actionTypes.tendersType.error,
  error,
});
