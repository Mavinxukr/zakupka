import * as actionTypes from './actionTypes';

export const addSubsidiaryCompany = (params, cookies) => ({
  type: actionTypes.subsidiaryCompany.request,
  params,
  cookies,
});

export const deleteSubsidiaryCompany = (params, cookies) => ({
  type: actionTypes.subsidiaryCompany.delete,
  params,
  cookies,
});

export const getClassifierCodeSuccess = (body) => ({
  type: actionTypes.subsidiaryCompany.success,
  body,
});

export const getClassifierCodeError = (error) => ({
  type: actionTypes.classifierCode.error,
  error,
});
