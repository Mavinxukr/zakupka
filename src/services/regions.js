import { Fetch } from '../utils/fetcher';

export const getRegionsRequest = async (params) => {
  const regionsData = await Fetch.get('get-region', params, {});
  return regionsData;
};
