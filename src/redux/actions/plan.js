import * as actionTypes from './actionTypes';

export const getPlanSuccess = (body) => ({
  type: actionTypes.plans.success,
  body,
});

export const getPlanError = (error) => ({
  type: actionTypes.plans.error,
  error,
});
