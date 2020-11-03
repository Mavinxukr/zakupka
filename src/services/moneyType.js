import { Fetch } from '../utils/fetcher';

export const getMoneyTypeRequest = async (params) => {
  const dataType = await Fetch.get('moneyType', params, {});
  return dataType;
};
