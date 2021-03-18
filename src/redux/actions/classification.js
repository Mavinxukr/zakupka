import * as actionTypes from './actionTypes';

export const getClassification = (params) => ({
  type: actionTypes.classification.request,
  params,
});

export const classificationSuccess = (body) => ({
  type: actionTypes.classification.success,
  body,
});

export const classificationError = (error) => ({
  type: actionTypes.classification.error,
  error,
});
