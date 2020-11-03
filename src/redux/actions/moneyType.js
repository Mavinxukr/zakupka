import * as actionTypes from './actionTypes';

export const getMoneyType = (params, id) => ({
  type: actionTypes.moneyType.request,
  id,
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
