import * as actionTypes from './actionTypes';

export const getCompanyType = (params, cookies) => ({
  type: actionTypes.companyType.request,
  cookies,
  params,
});

export const getCompanyTypeSuccess = (body) => ({
  type: actionTypes.companyType.success,
  body,
});

export const getCompanyTypeError = (error) => ({
  type: actionTypes.companyType.error,
  error,
});
