import * as actionTypes from './actionTypes';

export const getPlans = (params) => ({
  type: actionTypes.plans.request,
  params,
});

export const getPlansSuccess = (body) => ({
  type: actionTypes.plans.success,
  body,
});

export const getPlansError = (error) => ({
  type: actionTypes.plans.error,
  error,
});
