import { Fetch } from '../utils/fetcher';

export const getMoneyTypeRequest = async (params, cookies) => {
  const dataType = await Fetch.get('type-money', params, {}, cookies);
  return dataType;
};
