import * as actionTypes from './actionTypes';

export const getPlansByCompany = (params, cookies) => ({
  type: actionTypes.plansByCompany.request,
  cookies,
  params,
});

export const getPlansByCompanySuccess = (body) => ({
  type: actionTypes.plansByCompany.success,
  body,
});

export const getPlansByCompanyError = (error) => ({
  type: actionTypes.plansByCompany.error,
  error,
});
