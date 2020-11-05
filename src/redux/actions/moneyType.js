import * as actionTypes from './actionTypes';

export const getMoneyType = (params, cookies) => ({
  type: actionTypes.moneyType.request,
  cookies,
  params,
});

export const getMoneyTypeSuccess = (body) => ({
  type: actionTypes.moneyType.success,
  body,
});

export const getMoneyTypeError = (error) => ({
  type: actionTypes.moneyType.error,
  error,
});
