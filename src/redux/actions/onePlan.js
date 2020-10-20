import * as actionTypes from './actionTypes';

export const getOnePlan = (params, id) => ({
  type: actionTypes.onePlan.request,
  id,
  params,
});

export const getOnePlanSuccess = (body) => ({
  type: actionTypes.onePlan.success,
  body,
});

export const getOnePlanError = (error) => ({
  type: actionTypes.onePlan.error,
  error,
});
