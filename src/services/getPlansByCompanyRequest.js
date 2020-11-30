import { Fetch } from '../utils/fetcher';

export const getPlansByCompanyRequest = async (params, cookies) => {
  const data = await Fetch.get('plans-company', params, {}, cookies);
  return data;
};
