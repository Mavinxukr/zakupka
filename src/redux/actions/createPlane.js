import * as actionTypes from './actionTypes';

export const createPlan = (params, cookies, body) => ({
  type: actionTypes.createPlan.request,
  cookies,
  params,
  body,
});

export const createPlanSuccess = (body) => ({
  type: actionTypes.createPlan.success,
  body,
});

export const updatePlan = (params, cookies) => ({
  type: actionTypes.createPlan.update,
  cookies,
  params,
});

export const createPlanError = (error) => ({
  type: actionTypes.createPlan.error,
  error,
});
