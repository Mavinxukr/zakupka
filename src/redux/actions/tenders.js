import * as actionTypes from './actionTypes';

export const getTenders = (params) => ({
  type: actionTypes.tenders.request,
  params,
});

export const getTendersSuccess = (body) => ({
  type: actionTypes.tenders.success,
  body,
});

export const getTendersError = (error) => ({
  type: actionTypes.tenders.error,
  error,
});
