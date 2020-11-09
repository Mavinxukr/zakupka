import * as actionTypes from './actionTypes';

export const getKEKV = (params) => ({
  type: actionTypes.kekv.request,
  params,
});

export const getKEKVSuccess = (body) => ({
  type: actionTypes.kekv.success,
  body,
});

export const getKEKVError = (error) => ({
  type: actionTypes.kekv.error,
  error,
});
