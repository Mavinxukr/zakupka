import * as actionTypes from './actionTypes';

export const plansByCompany = (params, cookies) => ({
  type: actionTypes.plansByCompany.request,
  cookies,
  params,
});

export const plansByCompanySuccess = (body) => ({
  type: actionTypes.plansByCompany.success,
  body,
});

export const plansByCompanyError = (error) => ({
  type: actionTypes.plansByCompany.error,
  error,
});
