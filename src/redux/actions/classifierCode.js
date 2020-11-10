import * as actionTypes from './actionTypes';

export const getClassifierCode = (params) => ({
  type: actionTypes.classifierCode.request,
  params,
});

export const getClassifierCodeSuccess = (body) => ({
  type: actionTypes.classifierCode.success,
  body,
});

export const getClassifierCodeError = (error) => ({
  type: actionTypes.classifierCode.error,
  error,
});
