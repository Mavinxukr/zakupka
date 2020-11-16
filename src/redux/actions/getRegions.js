import * as actionTypes from './actionTypes';

export const getRegions = (params, cookies) => ({
  type: actionTypes.regions.request,
  cookies,
  params,
});

export const getRegionsSuccess = (body) => ({
  type: actionTypes.regions.success,
  body,
});

export const getRegionsError = (error) => ({
  type: actionTypes.regions.error,
  error,
});
